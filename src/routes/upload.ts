import Minio from 'minio'
import Multer from 'multer'
import app from '../index'
var username: string;
var userlogin: Boolean;
import session from "express-session";

var minioClient = new Minio.Client({
    endPoint: 'docker.cloudus.io',
    port: 900,
    useSSL: false,
    accessKey: '',
    secretKey: ''
});

app.post("/upload", Multer({storage: Multer.memoryStorage()}).single("upload"), function (req, res) {
    if (userlogin == true) {
        var bucketdirectory:string = "cloudelivery";
        bucketdirectory.concat(req.session.username)
        minioClient.fPutObject('cloudelivery', req.file.originalname, req.file.buffer, function (error:string) {
            if (error) {
                return console.log(error);
            }
            req.send(req.file);
        });
    }

    if (userlogin == false) {
        minioClient.fPutObject('cloudelivery', req.file.originalname, req.file.buffer, function (error:string) {
            if (error) {
                return console.log(error);
            }
            req.send(req.file);
        });
    }
});
