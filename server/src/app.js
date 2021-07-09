const express = require("express");
const app = express();

const router = require('./router/user');

app.use(router);

app.listen(8080, () => {
  console.log('server is runing')
})