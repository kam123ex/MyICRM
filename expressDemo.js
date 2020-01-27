var express = require("express")
var app = express();

app.get("/", function(req, res) {
    res.send("main response page")
})

app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('delete response page');
 })

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})