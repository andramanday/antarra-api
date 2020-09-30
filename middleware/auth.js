const jwt = require('jsonwebtoken');
import model from '../models'

const Access = model.access;

const auth = async(req, res, next) => {
    //api-key
    const head = req.headers;
    if(!head.api_key || !head.api_user) return res.status(401).send('Access Denied');

    //header check
    if(!req.header('Authorization')) return res.status(401).send('Access Denied');
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const data = jwt.verify(token, process.env.JWT_KEY);
        const access = await Access.findOne({where : { id: data.id, api_user: head.api_user, api_key: head.api_key}})
        if (!access) {
            throw new Error()
        }
        req.access = access
        req.token = token
        // res.status(201).send(access);
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}


module.exports = auth