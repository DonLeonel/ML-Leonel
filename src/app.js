
const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/mainRouter');

app.use('/', mainRouter);
app.use('/login', mainRouter);
app.use('/register', mainRouter);

app.use(express.static(path.join(__dirname, '../public')));

//configuramos ejs}
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

const _PORT = process.env.PORT || 3001;
app.listen(_PORT, ()=> console.log('Servidor corriendo en http://localhost:'+_PORT+'/'))