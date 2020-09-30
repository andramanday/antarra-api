import model from '../models/index';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import rsp from '../config/response';
import {setPassword , validPassword} from '../config/cryptoParse';

const access = model.access;

class Access {

    static regis(req, res){
        const { api_user, api_pass, api_ip } = req.body;
        const pass = setPassword(api_pass);
        const api_key = crypto.randomBytes(16).toString('hex');
        return access
            .create({
                api_user,
                "api_pass" : pass,
                api_key,
                api_ip
            }).then(data => {
                const token = jwt.sign({ id: data.id }, process.env.JWT_KEY, { expiresIn: '1h' });
                res.status(201).send({
                    message: `Your users with the name ${api_user} has been created successfully `,
                    data,
                    token
                })
            });
    }

    static login(req, res){
        const { api_user, api_pass } = req.body;
        let api_ip = req.ip;
        if (api_ip.substr(0, 7) == "::ffff:") {
            api_ip = api_ip.substr(7)
        }
        return access
            .findOne({
                where: {api_user},
            })
            .then(data => {
                if(data){
                    if(data.api_ip != api_ip){
                        rsp.error('your credentials is not valid', res, '103');
                    }
                    if( validPassword(data.api_pass, api_pass)) {
                        const token = jwt.sign({ id: data.id }, process.env.JWT_KEY, { expiresIn: '1h' });
                        const dt ={data, token};

                        rsp.ok(dt, `Welcome back ${data.api_user}`, res);
                    }else{
                        rsp.error('your credentials is not valid', res, '102');
                    }
                }else{
                    rsp.error('your credentials is not valid', res, '101');
                }
            } 
        ).catch(error => {
            rsp.error(error.errors[0].message, res);
        });
    }

    static get(req, res){
        return access
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing datas accesss',
                key : req.access.api_key,
                datas
            }))
    }

    static getByid(req, res)
    {
        const { id } = req.params
        return access
            .findOne({where :{id}})
            .then(data => {
                rsp.ok(data, `Show data access ${data.api_user}`, res);
            }).catch(error => {
                rsp.error(error.errors[0].message, res);
            });
    }

    static update(req, res)
    {
        const { id } = req.params;
        const { api_user, api_pass, api_ip } = req.body;
        let updt = {};
        if(api_pass){
            const pass = setPassword(api_pass);
            updt = {
                api_user, 
                api_pass : pass,
                api_ip
            };
        }else{
            updt = {api_user, api_ip};
        }
        return access
            .update(updt, {where : {id: id}}).then(result => {
                rsp.ok(result, `data ${api_user} updated`, res);
            }).catch(error => {
                rsp.error(error.errors[0].message, res);
            });
    }

    static deleteBy(req, res) {
        const { id } = req.params
        return access
            .destroy({where :{id}})
            .then(data => {
                rsp.ok(data, `ID ${id} has been deleted`, res);
            }).catch(error => {
                rsp.error(error.errors[0].message, res);
            });
    }
    
}

export default Access