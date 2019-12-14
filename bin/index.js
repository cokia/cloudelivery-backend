"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(cors_1.default());
const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1Q0FBcUM7QUFDckMsZ0RBQXVCO0FBQ3ZCLHNEQUE4QjtBQUU5QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLE1BQU0sRUFDSixJQUFJLEdBQUcsSUFBSSxFQUNaLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUVoQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsSUFBSSxLQUFLLENBQUMsQ0FDN0QsQ0FBQztBQUVGLGtCQUFlLEdBQUcsQ0FBQSJ9