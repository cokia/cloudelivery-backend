"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minio_1 = __importDefault(require("minio"));
const index_1 = __importDefault(require("../index"));
var username;
var userlogin;
var minioClient = new minio_1.default.Client({
    endPoint: 'docker.cloudus.io',
    port: 900,
    useSSL: false,
    accessKey: 'admin',
    secretKey: 'hjww0904'
});
index_1.default.get("/download", function (request, response) {
    minioClient.getObject("test", request.query.filename, function (error, stream) {
        if (error) {
            return response.status(500).send(error);
        }
        stream.pipe(response);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2Rvd25sb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQXlCO0FBRXpCLHFEQUEwQjtBQUMxQixJQUFJLFFBQWdCLENBQUM7QUFDckIsSUFBSSxTQUFrQixDQUFDO0FBR3ZCLElBQUksV0FBVyxHQUFHLElBQUksZUFBSyxDQUFDLE1BQU0sQ0FBQztJQUMvQixRQUFRLEVBQUUsbUJBQW1CO0lBQzdCLElBQUksRUFBRSxHQUFHO0lBQ1QsTUFBTSxFQUFFLEtBQUs7SUFDYixTQUFTLEVBQUUsT0FBTztJQUNsQixTQUFTLEVBQUUsVUFBVTtDQUN4QixDQUFDLENBQUM7QUFFSCxlQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLE9BQU8sRUFBRSxRQUFRO0lBQzVDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFLE1BQU07UUFDekUsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=