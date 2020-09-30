import model from '../models/index';

const role = model.role_login;
const level = model.level_role;

class Role {

    static showall(req, res){
        return role 
            .findAll()
            .then(datas => {
                const resObj = datas.map(role => {
                    return Object.assign(
                        {},
                        {
                            id: role.id,
                            uker: role.uker,
                            level: role.level,
                            desc: level.findone({where : {id : role.level}})
                        }
                    )
                })
                res.status(201).send({resObj});
            })
    }

    static create(req, res){
        const { uker, level } = req.body;
        return role
            .create({
                uker,
                level
            }).then(data => res.status(201).send({
                message: `Role ${uker} - ${level}  has been created successfully `,
                data
            })).catch(error => res.status(400).send(error));
    }

    static showLevel(req, res){
        return level 
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Level',
                datas
            })).catch(error => res.status(400).send(error));
    }

    static createLevel(req, res){
        const { id, level_desc } = req.body;
        return level
            .create({
                id,
                level_desc
            }).then(data => res.status(201).send({
                message: `Role ${id} - ${level_desc}  has been created successfully `,
                data
            })).catch(error => res.status(400).send(error));
    }

    // static regis(req, res){
    //     const { api_user, api_pass } = req.body;
    //     const pass = setPassword(api_pass);
    //     const api_key = crypto.randomBytes(16).toString('hex');
    //     return access
    //         .create({
    //             api_user,
    //             "api_pass" : pass,
    //             api_key
    //         }).then(data => res.status(201).send({
    //             message: `Your users with the name ${api_user} has been created successfully `,
    //             data
    //         }));
    // }

    // static login(req, res){
    //     const { api_user, api_pass } = req.body;
    //     return access
    //         .findOne({
    //             where: {api_user},
    //         })
    //         .then(data => {
    //             if(data){
    //                 if( validPassword(data.api_pass, api_pass)) {
    //                     const token = jwt.sign({ id: data.id }, process.env.JWT_KEY, { expiresIn: '1h' });
    //                     res.status(200).send({
    //                         error: false,
    //                         message: `Welcome back ${data.api_user}`,
    //                         key: data.api_key,
    //                         token
    //                     })
    //                 }else{
    //                     res.status(400).send({
    //                         error: true,
    //                         message: 'your credentials is not valid'
    //                     })
    //                 }
    //             }else{
    //                 res.status(400).send({
    //                     error: true,
    //                     message: 'no data showing id that'
    //                 })
    //             }
    //         } 
    //     ).catch(error => res.status(400).send(error));
    // }

    // static get(req, res){
    //     return access
    //         .findAll()
    //         .then(datas => res.status(201).send({
    //             success: true,
    //             msg: 'Showing datas accesss',
    //             key : req.access.api_key,
    //             datas
    //         }))
    // }
    
}

export default Role