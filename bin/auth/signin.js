"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import user from "../models/user"
require("source-map-support/register");
const index_1 = __importDefault(require("../index"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const redis_1 = __importDefault(require("redis"));
const express_session_1 = __importDefault(require("express-session"));
const router = express_1.default.Router();
const client = redis_1.default.createClient();
const redisStore = connect_redis_1.default(express_session_1.default);
index_1.default.use(cookie_parser_1.default());
index_1.default.use(express_session_1.default({
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
function logout(req) {
    req.session.destroy();
}
;
router.get('/signin', (req, res) => {
    res.render("login.html");
});
// router.post('/signin', (req, res) => {
//     login(req,res,req.body.id,req.body.pwd);
// });
router.get("/logout", (req, res) => {
    logout(req);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvc2lnbmluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLHVDQUFxQztBQUVyQyxxREFBMkI7QUFDM0Isa0VBQXlDO0FBQ3pDLGtFQUF5QztBQUN6QyxzREFBOEI7QUFDOUIsa0RBQTBCO0FBQzFCLHNFQUFzQztBQUV0QyxNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hDLE1BQU0sTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQyxNQUFNLFVBQVUsR0FBRyx1QkFBWSxDQUFDLHlCQUFPLENBQUMsQ0FBQztBQUN6QyxlQUFHLENBQUMsR0FBRyxDQUFDLHVCQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLGVBQUcsQ0FBQyxHQUFHLENBQUMseUJBQU8sQ0FBQztJQUNaLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLElBQUksVUFBVSxDQUFDO1FBQ2xCLElBQUksRUFBRSxtQkFBbUI7UUFDekIsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLEVBQUUsRUFBRSxDQUFDO0tBQ1IsQ0FBQztDQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUosMkRBQTJEO0FBQzNELHdEQUF3RDtBQUN4RCxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLGVBQWU7QUFDZiw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLElBQUk7QUFFSixTQUFTLE1BQU0sQ0FBQyxHQUFRO0lBQ3BCLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDMUIsQ0FBQztBQUFBLENBQUM7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUgseUNBQXlDO0FBQ3pDLCtDQUErQztBQUMvQyxNQUFNO0FBRU4sTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFBIn0=