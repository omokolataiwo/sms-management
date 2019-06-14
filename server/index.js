import express from 'express';
import bodyParser from 'body-parser';
import db from './database';
import route from './route';

const app = express();

db.init();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', route);

const port = process.NODE_ENV || 3000;
app.listen(port, () => {
     console.log('App started on port: ', port);
});
