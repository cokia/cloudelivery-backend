// import user from "../models/user"
import 'source-map-support/register';

import app from "../../index";
import connectredis from 'connect-redis';
import cookieParser from "cookie-parser";
import express from "express";
import redis from "redis";
import session from "express-session";

const router = express.Router();
const client = redis.createClient();
const redisStore = connectredis(session);
app.use(cookieParser());
app.use(session({
    secret: "",
    store: new redisStore({
        host: "docker.cloudus.io",
        port: 32768,
        client: client,
        prefix: "session:",
        db: 0
    }),
}));

// function login(req:any, res:any, id:String,pwd:String) {
//     if (id == user.user_id && pwd == user.user_pwd) {
//         req.session.logined = true;
//         req.session.user_id = id;
//     } else {
//         res.send("ERROR");
//     }
// }

function logout(req: any) {
    req.session.destroy();
};

router.get('/signin', (req, res) => {
    res.render("login.html");
});

// router.post('/signin', (req, res) => {
//     login(req,res,req.body.id,req.body.pwd);
// });

router.get("/logout", (req, res) => {
    logout(req);
})