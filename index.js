var express = require("express"),
    app = express(),
    port = 5000,
    publicDir = process.argv[2] || __dirname;

app.get('/', function (req, res) {
  res.sendfile("index.html");
});
app.get('/account', function (req, res) {
  res.sendfile("index.html");
});
app.get('/questions', function (req, res) {
  res.sendfile("index.html");
});
app.get('/login', function (req, res) {
  res.sendfile("index.html");
});
app.get('/lectureroom', function (req, res) {
  res.sendfile("index.html");
});
app.get('/mylectures', function (req, res) {
  res.sendfile("index.html");
});
app.use(express.static(publicDir));

console.log("server showing %s listening at %s", publicDir, port);
app.listen(port);