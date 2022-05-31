import express from 'express';
import path from 'path';
const  app = express();

const __dirname = path.resolve();

app.use(
    '/public/stylesheets',
    express.static(__dirname + '/public/stylesheets')
  );
app.set("view engine", "pug");
app.set("views", "./src/views");


app.get('/', (req, res) => {
    // res.send('Hello world');
    res.render("login");
})

app.listen(3000);