import 'source-map-support/register';

import express from "express";

const app = express();

const {
  PORT = 3000
} = process.env;

app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);

export default app;