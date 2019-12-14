import 'source-map-support/register';
import cors from 'cors'
import express from "express";

const app = express();
app.use(cors());

const {
  PORT = 3000
} = process.env;

app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);

export default app