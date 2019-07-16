const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/url', function (req, res, next) {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.listen(3000, function () {
  console.log('Node App listening on port 3000!');
});
