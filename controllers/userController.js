import model from '../models/index';
import rsp from '../config/response';

const user = model.user;

class User {

    static create(req, res){
        const { pernr, kostl, hilfm, status, roleID } = req.body;
        return user
            .create({
                pernr,
                kostl,
                hilfm,
                status,
                roleID
            }).then(data => {
                rsp.ok(data, `User ${pernr} - ${kostl} - ${hilfm}  has been created successfully `, res);
            }).catch(error => {
                rsp.error(error.errors[0].message, res);
            });
    }
    
    static showall(req, res){
        return user 
            .findAll()
            .then(data => {
                rsp.ok(data, `Show all records user`, res);
            }).catch(error => {
                rsp.error(error.errors[0].message, res);
            });
    }

    static showbyid(req, res){
        const { id } = req.body.request;
        return user 
            .findOne({where : {id}})
            .then(data => {
                rsp.ok(data, `Show user ${data.id}`, res);
            }).catch(error => {
                rsp.error(error.errors[0].message, res);
            });
    }

    static update(req, res)
    {
        const { id } = req.body;
        return user
            .update(req.body.update, {where : {id}}).then(result => {
                rsp.ok(result, `data ${id} updated`, res);
            }).catch(error => {
                rsp.error(error.errors[0].message, res);
            });
    }

    static deleteby(req, res) {
        const { id } = req.params
        return user
            .destroy({where :{id}})
            .then(data => {
                rsp.ok(data, `ID ${id} has been deleted`, res);
            }).catch(error => {
                rsp.error(error.errors[0].message, res);
            });
    }
}

export default User;