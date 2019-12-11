import redis from "redis";
import mongodb from "mongodb";
import 'source-map-support/register';
import app from "../index.js";
import session from "express-session";
import connectredis from 'connect-redis';
import express from "express";
import cookieParser from "cookie-parser";
//setting redis
const client = redis.createClient();
const router = express.Router();
const redisStore = connectredis(session);

app.use(cookieParser());
app.use(session({
  secret:"",
  store: new redisStore(host: "docker.cloudus.io",port: 32768,client: client,prefix : "session:",db : 0)
}));

function sessionadd(req:string, sid: String, secret: String){
req.session.key=sid; // 세션키
req.session.secret=secret;// 비밀키
}