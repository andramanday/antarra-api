import model from '../models/index';
import rsp from '../config/response';

const role = model.roleLogin

class Role {

    static roleLogin(req, res)
    {
        const login = req.login;
        return access
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing datas accesss',
                key : req.access.api_key,
                datas
            }))
        // console.log(login);
        // return res.status(201).send({login});
    }
