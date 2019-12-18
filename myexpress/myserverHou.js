// const http = require("http");
var express = require("express");
var app = express();
var mysql = require("mysql");
var dbconfig = require("../DBconfig/dbconfig.json");
var bodyParser = require("body-parser"); //解析POST的body

app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static('public'));


/**登录Liu */
app.post('/login',function(req,res){
    /**获取请求体数据 */
    let data = req.body;
    console.log(data.username);
    console.log(data.password);
    let message1 = {success:true};
    let message2 = {success:false};
    /**连接数据库 */
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from users where username = '"+ data.username +"' and password = '"+data.password+"'",function(err,result){
        if(err){
            throw err;
        }
        else{
            console.log(result);
            // eslint-disable-next-line eqeqeq
            if(result == false){
                res.send(message2);
            }
            else{
                res.send(message1);
            }
        }
    })
})

/**注册Liu */
app.post('/Register',(req,res)=>{
    /**获取请求体数据 */
    let data = req.body;
    let message1 = {success:0}; // 注册成功
    let message2 = {success:1};  //失败类型1  两次密码不一致
    let message3 = {success:2};// 失败类型2 输入的用户名数据库已存在
    var con = mysql.createConnection(dbconfig);
    con.connect();
    // eslint-disable-next-line eqeqeq
    if(data.password != data.repassword){
        res.send(message2);
    }
    else{
        con.query("select count(*) from users where username ='"+data.username+"'",function(err,result){
            if(err){
                throw err;
            }
            else{
                if(result[0]["count(*)"] === 0){
                    con.query("insert into users(username,password) values(?,?)",[data.username,data.password],(err,result)=>{
                        if(err){
                            throw err;
                        }
                        else{
                            res.send(message1);
                        }
                    })
                }
                else{
                    res.send(message3);
                }
            }
        })
    }
})


/**获取验证码Liu */
app.get('/Getnum',(req,res)=>{
    function randomn(n) {
        if (n > 21) return null
        return parseInt((Math.random() + 1) * Math.pow(10,n-1))
    }
    var trueCode = randomn(6);
    let message1 = {success:true,trueNum:trueCode};
    let phoneNum = JSON.parse(req.query.mobile); 
    // let message2 = {success:false};
    var QcloudSms = require("qcloudsms_js");
    // 短信应用 SDK AppID
    var appid = 1400292437;  // SDK AppID 以1400开头
    // 短信应用 SDK AppKey
    var appkey = "1757adb7e3f7efac560dc3ad139a9852";
    // 需要发送短信的手机号码
    var phoneNumbers = [phoneNum];
    // 短信模板 ID，需要在短信控制台中申请
    var templateId = 486355;  // NOTE: 这里的模板ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
    // 签名
    var smsSign = "ACFUNFUN公众号";  // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
    // 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
    function callback(err, res, resData) {
        if (err) {
            console.log("err: ", err);
        } else {
            console.log("request data: ", res.req);
            console.log("response data: ", resData);
        }
    }
    // 实例化 QcloudSms
    var qcloudsms = QcloudSms(appid, appkey);
    var ssender = qcloudsms.SmsSingleSender();
    var params = [trueCode];
    ssender.sendWithParam("86", phoneNumbers[0], templateId,
    params, smsSign, "", "", callback);
    res.send(message1);
})



/** 获取当前城市信息Liu */
app.get('/getCity',(req,res)=>{
    let cityNow = req.query.cityNow;
    console.log(cityNow);
    let content = JSON.stringify(cityNow);
    console.log(content);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from college where city=?", [cityNow],(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})



/**后台管理登录Liu */
app.post('/loginHou',function(req,res){
    /**获取请求体数据 */
    let data = req.body;
    let message1 = {success:true};
    let message2 = {success:false};
    /**连接数据库 */
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from admin where username = '"+ data.username +"' and password = '"+data.password+"'",function(err,result){
        if(err){
            throw err;
        }
        else{
            // eslint-disable-next-line eqeqeq
            if(result == false){
                res.send(message2);
            }
            else{
                res.send(message1);
            }
        }
    })
})

/**后台管理获取所有用户信息Liu */
app.get("/HouAll",function(req,res){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from users",(err,result)=>{
        if(err){
            throw err;
        }
        else{
            res.send(result);
        }
    })
})

/**后台管理员信息获取 Liu */
app.get("/adminInf",function(req,res){
    let username = req.query.username;
    console.log(username);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from admin where username=?",[username],(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

/**后台手动添加用户信息Liu */
app.post("/addHoutaiuser",(req,res)=>{
    let data = req.body;
    let message1 = {success:0};
    let message2 = {success:1};
    let pic="https://s2.ax1x.com/2019/12/10/QDpwMq.jpg";
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select count(*) from users where username ='"+data.username+"'",function(err,result){
        if(err){
            throw err;
        }
        else{
            if(result[0]["count(*)"] === 0){
                con.query("insert into users(username,password,Name,Phone,Pic) values(?,?,?,?,?)",[data.username,data.password,data.name,data.phone,pic],(err,result)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        res.send(message1);
                    }
                })
            }
            else{
                res.send(message2);
            }
        }
    })
})

/**后台删除用户 */
app.get("/delHoutaiuser",(req,res)=>{
    let delname = req.query.delname;
    console.log(delname);
    let message1 = {success:0};  //无该用户
    let message2 = {success:1};  //删除成功
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select count(*) from users where username = ?",[delname],function(err,result){
        if(err){
            throw err;
        }
        else{
            console.log(result);
            // eslint-disable-next-line eqeqeq
            if(result[0]["count(*)"] == 0){
                console.log("删除失败，无该用户");
                res.send(message1);
            }
            else{
                con.query("delete from users where username = ?",[delname],(err,result)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        console.log(result);
                        res.send(message2);
                    }
                })
            }
        }
    })
})

/**后台获取所有大学信息 Liu */
app.get("/HouCollege",(req,res)=>{
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from college",(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

/**后台攻略信息获取 Liu */
app.get("/HouStrategy",(req,res)=>{
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from schoolraider",(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

/**后台获取所有帖子内容 */
app.get("/HouTiezi",(req,res)=>{
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from post",(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

/**后台删除对应ID帖子 */
app.get("/delTiezi",(req,res)=>{
    let delID = req.query.ID;
    console.log(delID);
    let message1 = {success:0};  //无该帖子
    let message2 = {success:1};  //删除成功
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select count(*) from post where id = ?",[delID],function(err,result){
        if(err){
            throw err;
        }
        else{
            console.log(result);
            // eslint-disable-next-line eqeqeq
            if(result[0]["count(*)"] == 0){
                console.log("删除失败，无该ID");
                res.send(message1);
            }
            else{
                con.query("delete from post where id = ?",[delID],(err,result)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        console.log(result);
                        res.send(message2);
                    }
                })
            }
        }
    })
})


var server = app.listen(8080,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为http://%s:%s",host,port);
})