const auth = require('../middleware/auth');
import Access from '../controllers/accessController';
import Role from '../controllers/roleController';

export default (app) => {
    app.post('/register', Access.regis);
    app.post('/login', Access.login);

    app.post('/access', auth, Access.get);
    app.get('/access/:id', auth, Access.getByid);
    app.put('/access/:id', auth, Access.update);
    app.delete('/access/:id', auth, Access.deleteBy);


    app.post('/roles', auth, Role.showall);
    app.post('/role', auth, Role.create);
    app.get('/role/:id', auth, Role.showbyid);
    // app.put('/role', auth, Role.update);
    // app.delete('/role', auth, Role.delete);

    app.post('/level', auth, Role.createLevel);
    app.post('/levels', auth, Role.showLevel);


    app.get('/header', (req, res) => {
        let ip = req.ip;
        if (ip.substr(0, 7) == "::ffff:") {
            ip = ip.substr(7)
        }
        console.log("Hostname : "+req.hostname);
        console.log("Request IP : "+ip);
        res.status(201).send({user : ip});
    })

    app.get('/test', Role.test);

}