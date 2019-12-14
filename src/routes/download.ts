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

app.get("/download", function (request, response) {
    minioClient.getObject("test", request.query.filename, function (error, stream) {
        if (error) {
            return response.status(500).send(error);
        }
        stream.pipe(response);
    });
});