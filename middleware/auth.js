const jwt = require('jsonwebtoken');
import model from '../models'

const Access = model.access;

const auth = async(req, res, next) => {
    //api-key
    let ip = req.ip;
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
    }
    // if(!head.api_key || !head.api_user) return res.status(401).send('Access Denied');

    //header check
    if(!req.header('Authorization')) return res.status(401).send('Access Denied');
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const data = jwt.verify(token, process.env.JWT_KEY);
        const access = await Access.findOne({where : { id: data.id}})
        if (!access) {
            throw new Error()
        }
        if(access.api_ip != ip){
            res.status(401).send('Access Denied');
        }
        req.access = access
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}


module.exports = auth