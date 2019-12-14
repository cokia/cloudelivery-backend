"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import user from "../models/user"
require("source-map-support/register");
const index_1 = __importDefault(require("../../index"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9hdXRoL3NpZ25pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9DQUFvQztBQUNwQyx1Q0FBcUM7QUFFckMsd0RBQThCO0FBQzlCLGtFQUF5QztBQUN6QyxrRUFBeUM7QUFDekMsc0RBQThCO0FBQzlCLGtEQUEwQjtBQUMxQixzRUFBc0M7QUFFdEMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQyxNQUFNLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDcEMsTUFBTSxVQUFVLEdBQUcsdUJBQVksQ0FBQyx5QkFBTyxDQUFDLENBQUM7QUFDekMsZUFBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBWSxFQUFFLENBQUMsQ0FBQztBQUN4QixlQUFHLENBQUMsR0FBRyxDQUFDLHlCQUFPLENBQUM7SUFDWixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxJQUFJLFVBQVUsQ0FBQztRQUNsQixJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsVUFBVTtRQUNsQixFQUFFLEVBQUUsQ0FBQztLQUNSLENBQUM7Q0FDTCxDQUFDLENBQUMsQ0FBQztBQUVKLDJEQUEyRDtBQUMzRCx3REFBd0Q7QUFDeEQsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxlQUFlO0FBQ2YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUixJQUFJO0FBRUosU0FBUyxNQUFNLENBQUMsR0FBUTtJQUNwQixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0MsTUFBTTtBQUVOLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQSJ9