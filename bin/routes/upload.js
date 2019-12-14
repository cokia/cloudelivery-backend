"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minio_1 = __importDefault(require("minio"));
const multer_1 = __importDefault(require("multer"));
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
if (userlogin == true) {
    bucketdiretory: String = "cloudelivery" + username;
    minioClient.fPutObject('cloudelivery', filename, file, metaData, function (err, etag) {
        if (err)
            return console.log(err);
        console.log('File uploaded successfully.');
    });
}
if (userlogin == false) {
    minioClient.fPutObject('cloudelivery', filename, file, metaData, function (err, etag) {
        if (err)
            return console.log(err);
        console.log('File uploaded successfully.');
    });
}
index_1.default.post("/upload", multer_1.default({ storage: multer_1.default.memoryStorage() }).single("upload"), function (request, response) {
    if (userlogin == true) {
        bucketdiretory: String = "cloudelivery" + username;
        minioClient.fPutObject('cloudelivery', request.file.originalname, request.file.buffer, function (error, etag) {
            if (error) {
                return console.log(error);
            }
            response.send(request.file);
        });
    }
    if (userlogin == false) {
        minioClient.fPutObject('cloudelivery', request.file.originalname, request.file.buffer, function (error, etag) {
            if (error) {
                return console.log(error);
            }
            response.send(request.file);
        });
    }
});
index_1.default.get("/download", function (request, response) {
    minioClient.getObject("test", request.query.filename, function (error, stream) {
        if (error) {
            return response.status(500).send(error);
        }
        stream.pipe(response);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy91cGxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBeUI7QUFDekIsb0RBQTJCO0FBQzNCLHFEQUEwQjtBQUMxQixJQUFJLFFBQWUsQ0FBQztBQUNwQixJQUFJLFNBQWlCLENBQUM7QUFFdEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxlQUFLLENBQUMsTUFBTSxDQUFDO0lBQy9CLFFBQVEsRUFBRSxtQkFBbUI7SUFDN0IsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsS0FBSztJQUNiLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFNBQVMsRUFBRSxVQUFVO0NBQ3hCLENBQUMsQ0FBQztBQUVILElBQUcsU0FBUyxJQUFFLElBQUksRUFBQztJQUNuQixjQUFjLEVBQUMsTUFBTSxHQUFHLGNBQWMsR0FBQyxRQUFRLENBQUM7SUFDaEQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsSUFBSTtRQUMvRSxJQUFJLEdBQUc7WUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0NBQ0o7QUFFRCxJQUFHLFNBQVMsSUFBRSxLQUFLLEVBQUM7SUFDaEIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsSUFBSTtRQUMvRSxJQUFJLEdBQUc7WUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0NBQ1I7QUFDRCxlQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxnQkFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFNLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFTLE9BQU8sRUFBRSxRQUFRO0lBQ3RHLElBQUcsU0FBUyxJQUFFLElBQUksRUFBQztRQUNmLGNBQWMsRUFBQyxNQUFNLEdBQUcsY0FBYyxHQUFDLFFBQVEsQ0FBQztRQUNoRCxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFTLEtBQUssRUFBRSxJQUFJO1lBQ3ZHLElBQUcsS0FBSyxFQUFFO2dCQUNOLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0tBQ0Y7SUFFRCxJQUFHLFNBQVMsSUFBRSxLQUFLLEVBQUM7UUFDaEIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBUyxLQUFLLEVBQUUsSUFBSTtZQUN0RyxJQUFHLEtBQUssRUFBRTtnQkFDTixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0I7WUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztLQUNOO0FBQ1QsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFTLE9BQU8sRUFBRSxRQUFRO0lBQzNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDeEUsSUFBRyxLQUFLLEVBQUU7WUFDTixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=