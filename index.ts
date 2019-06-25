
const express = require('express');
const app = express();

// // Require the framework and instantiate it
// const fastify = require('fastify')({
//   logger: true
// })

// // Declare a route
// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })

// // Run the server!
// const start = async () => {
//   try {
//     await fastify.listen(3000)
//     fastify.log.info(`server listening on ${fastify.server.address().port}`)
//   } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// }
// start();

// // // Require external modules
// // const mongoose = require('mongoose')
// // // Connect to DB
// // mongoose.connect("mongodb://localhost/node-db")
// //  .then((e) => {
// // console.log("MongoDB connected…")
// //  } )
// //  .catch(err => console.log(err))


app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/testing', function (req, res, next) {
 res.json(["Kuasa","Ravi","Abhi","Cleveland","test"]);
});
app.listen(3000, function () {
  console.log('Node App listening on port 3000!');
});