import model from '../models/index';
import rsp from '../config/response';
// const { DataTypes } = require("Sequelize");

const role = model.role_login;
// const level = model.level_role;

const roleLogin = model.role_menu;
const menu = model.menu;

class Role {

    static roleLogin(req, res)
    {
        roleLogin.belongsTo(menu, {
            foreignKey: {
                name: 'menuID'
            }
        });

        const login = req.login;
        return roleLogin
        .findAll({where : {roleID : login.roleID}, include : menu})
        .then(data => {
            rsp.ok(data, `Show data access`, res);

            // rsp.ok(data, `Show data access`, res);
            // res.status(201).send({data})
            // let menus = [];
            // let child = [];
            // data.map((hs, i)=> {
            //     if(hs.menu.posisi == 0){
            //         // hs.menu.splice(1, 0, {child: 'anak'});
            //         menus.push(hs.menu);
            //     }
            // })

            // // let finalmenu = [];
            // // menus.map((main, i) => {                
            // //     data.map(sub => {
            // //         if(sub.menu.parentID == main.id){
            // //             child.push(sub.menu);
            // //             // console.log(sub.menu.parentID);
            // //         }
            // //     });
            // //     // menus.splice(i, i, {main, child});
            // // })
            // res.status(201).send(menus)
        }).catch(error => {
            rsp.error(error, res);
        });
    }

    // static showall(req, res){
    //     role.belongsTo(level, {
    //         foreignKey: {
    //           name: 'level'
    //         }
    //     });
    //     return role.findAll({include : level})
    //     .then(data => {
    //         rsp.ok(data, `show ${data.length} records of role`, res);
    //     }).catch(error => {
    //         rsp.error(error.errors[0].message, res);
    //     });
    // }

    // static test(req, res){
    //     role.belongsTo(level, {
    //         foreignKey: {
    //           name: 'level'
    //         }
    //     });
    //     return role.findAll({include : level})
    //     .then(data => {
    //         rsp.ok(data, `show ${data.length} records of role`, res);
    //     }).catch(error => {
    //         rsp.error(error.errors[0].message, res);
    //     });
    // }

    // static showbyid(req, res){
    //     return role 
    //         .findAll()
    //         .then(datas => {
    //             const resObj = datas.map(role => {
    //                 return Object.assign(
    //                     {},
    //                     {
    //                         id: role.id,
    //                         uker: role.uker,
    //                         level: role.level,
    //                         desc: level.findone({where : {id : role.level}})
    //                     }
    //                 )
    //             })
    //             res.status(201).send({resObj});
    //         })
    // }

    // static create(req, res){
    //     const { uker, level } = req.body;
    //     return role
    //         .create({
    //             uker,
    //             level
    //         }).then(data => {
    //             rsp.ok(data, `Role ${uker} - ${level}  has been created successfully `, res);
    //         }).catch(error => {
    //             rsp.error(error.errors[0].message, res);
    //         });
    // }

    // static showLevel(req, res){
    //     return level 
    //         .findAll()
    //         .then(datas => res.status(201).send({
    //             success: true,
    //             msg: 'Showing Level',
    //             datas
    //         })).catch(error => res.status(400).send(error));
    // }

    // static createLevel(req, res){
    //     const { id, level_desc } = req.body;
    //     return level
    //         .create({
    //             id,
    //             level_desc
    //         }).then(data => {
    //             rsp.ok(data, `Role ${id} - ${level_desc}  has been created successfully `, res);
    //         }).catch(error => {
    //             rsp.error(error.errors[0].message, res);
    //         });
    // }
    
}

export default Role