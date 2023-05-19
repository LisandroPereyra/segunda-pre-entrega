import express from "express";
import handlebars from "express-handlebars";
import expressSession from 'express-session'
import passport from 'passport'
import MongoStore from 'connect-mongo'

import ApiRouter from "./src/routes/ApiRouters/index.js"
import ViewsRouter from "./src/routes/ApiRouters/index.js"

import dbConnection from "./src/config/connectionDB.js";
import initPassport from './src/config/passport.config.js'

import { fileURLToPath } from "url";
import { dirname } from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dbConnection()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(expressSession({
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      mongoOptions: {},
      ttl: 20,
    }),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
}))


initPassport()  

app.use(passport.initialize())
app.use(passport.session())


app.use("/api", ApiRouter)
app.use("/", ViewsRouter)

export default app