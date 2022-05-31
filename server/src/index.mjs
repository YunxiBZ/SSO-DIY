import express from 'express';
import path from 'path';

import db,  {find as findByEmail} from '../db/index.mjs'

const  app = express();

const __dirname = path.resolve();

app.use(
    '/public/stylesheets',
    express.static(__dirname + '/public/stylesheets')
);
app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(express.urlencoded());

app.get('/', (req, res) => {
    // res.send('Hello world');
    res.render("login");
})

app.post('/api/session/login', (req,res)=> {
    console.log(req.body);
    const {email, password} = req.body;
    const findUser = findByEmail(db, email)
    if (findUser === false) {
       return res.send(404)
    }
    if(password === findUser.password) {
        res.send(200)
    } else {
        res.send(500)
    }
    console.log(findUser)
})

app.listen(3000);