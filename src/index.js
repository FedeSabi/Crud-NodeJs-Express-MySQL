/*

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import flash from 'connect-flash'
import session from "express-session";
import MethodOverride  from "method-override";
import passport from "passport";
import morgan from "morgan";

//.env
dotenv.config();

//conecction app y port
const app = express();
const port = process.env.PORT || 9000;

//app norgan, body-parser y ejs
app.use(morgan('dev'))
app.use.apply(bodyParser.urlencoded(({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))


// routes
app.get('/', (req,res) =>{
  res.render('pages/index')
})

//mongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error de conexión ", err);
  });


app.listen(port, () => console.log("server listing on port", port));


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import flash from 'connect-flash';
import session from "express-session";
import methodOverride from "method-override";
import passport from "passport";
import morgan from "morgan";

import userRouter from './routes/users.js'

// .env
dotenv.config();

// Conexión app y puerto
const app = express();
const port = process.env.PORT || 9000;

// Configuración de Express
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Configuración de express-session
app.use(session({
  secret: 'tu_secreto',
  resave: true,
  saveUninitialized: true
}));

// Configuración de connect-flash
app.use(flash());

// Configuración de method-override
app.use(methodOverride('_method'));

// Configuración de Passport (si es necesario)
// app.use(passport.initialize();
// app.use(passport.session();

// Rutas
//app.get('/', (req, res) => {
//  res.render('users/login');
//});

app.use(userRouter)

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error de conexión", err);
  });

app.listen(port, () => console.log("Servidor escuchando en el puerto", port));
*/
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import flash from 'connect-flash';
import session from "express-session";
import methodOverride from "method-override";
import passport from "passport";
import morgan from "morgan";
import userRouter from './routes/users.js';

// .env
dotenv.config();

// Conexión app y puerto
const app = express();
const port = process.env.PORT || 9000;

// Configuración de Express
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Configuración de express-session
app.use(session({
  secret: 'tu_secreto',
  resave: true,
  saveUninitialized: true
}));

// Configuración de connect-flash
app.use(flash());

// Configuración de method-override
app.use(methodOverride('_method'));

// Configuración de Passport (si es necesario)
// app.use(passport.initialize());
// app.use(passport.session());

// Rutas
app.get('/', (req, res) => {
res.render('users/login');
 });

app.use(userRouter);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado a MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error de conexión", err);
  });

app.listen(port, () => console.log("Servidor escuchando en el puerto", port));
