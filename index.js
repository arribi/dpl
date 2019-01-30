const express = require('express'), http = require('http'),
  morgan = require("morgan");

const hostname = 'localhost';
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Express Server en Heroku conectado a un repo GitHub</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
