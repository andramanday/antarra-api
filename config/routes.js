const auth = require('../middleware/auth');
import Access from '../controllers/accessController';
import Role from '../controllers/roleController';

export default (app) => {
    app.post('/register', Access.regis);
    app.post('/login', Access.login);
    app.post('/access', auth, Access.get);


    app.post('/role', auth, Role.create);
    app.post('/roles', auth, Role.showall);

    app.post('/level', auth, Role.createLevel);
    app.post('/levels', auth, Role.showLevel);


    app.post('/header', (req, res) => {
        const header = req.headers;
        console.log(req.accepts);
        res.status(201).send({user : header.apiuser});
    })

}