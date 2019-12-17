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


/**登录 */
var User = '';
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
                User = data.username;
                res.send(message1);
            }
        }
    })
})

/**注册 */
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


/**获取验证码 */
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



/** 获取当前城市信息 */
app.get('/getCity',(req,res)=>{
    let cityNow = req.query.cityNow;
    // console.log(cityNow);
    let content = JSON.stringify(cityNow);
    // console.log(content);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from college where city=?", [cityNow],(err,result)=>{
        if(err){
            throw err;
        }
        else{
            // console.log(result);
            res.send(result);
        }
    })
})



/**后台管理登录 */
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

/**后台管理获取所有用户信息 */
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

/**后台手动添加用户信息 */
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

/**获取用户名 更新数据库，反馈用户收藏信息 黄*/
var loginusername = ''
app.get("/getusername",function (req,res) {
    console.log(req.url);
    console.log((req.url).split("="))
    loginusername = (req.url.split("=")[1]);
    console.log(loginusername);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("update post set collection = 0")
    con.query("select postID from collection where username = ?",[loginusername],(err,result)=>{
        if(err){
            throw err
        }else{
            console.log(result);
            
            for(let i = 0;i<result.length;i++){
                console.log(result[i].postID)
                con.query("update post set collection=1 where ID= ?",[result[i].postID])
            }
        }
    })
})

/**帖子_热门渲染 */
app.get('/tiezi',function(req,res){
    /**连接数据库 */
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from tiezi",function(err,result){
        if(err){
            throw err;
        }else{
           res.send(result);
        }
    })
})
/**获取数据库中的贴子标题及内容 黄*/
app.get('/gettiezi',function (req,res) {
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from post",function (err,result) {
        if(err){
            throw err
        }else{
            res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"})
            res.end(JSON.stringify(result));
        }
    })
    
})

/**发帖 黄*/
app.post('/posting',function (req,res) {
    let data = req.body;
    console.log(data)
    let message1 = {success:true};
    let message2 = {success:false};

    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("insert into post(username,title,tzcontent,collection,time,lable) values(?,?,?,?,?,?)",[loginusername,data.title,data.content,0,data.date,data.value],(err,result)=>{
        if(err){
            console.log(err);
            res.send(message2)
        }else{
            res.send(message1)
        }
    })
})

/**上传帖子内容 黄*/
var a = {}
app.post('/postxiangqing',function (req,res) {
    console.log(req.body)
    console.log(req.body.data);
    a = req.body;
    a.data.username = loginusername
    res.send(JSON.stringify(a))
})

/**渲染详情页 黄*/
app.get('/getxiangqing',function (req,res) {
    console.log(a)
    res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"})
    res.end(JSON.stringify(a));
})

/**上传评论 黄*/
app.post('/postcomment',function (req,res) {
    console.log(req.body);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("insert into comment(context,title) values(?,?)",[req.body.comment,req.body.title],(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
            res.send(JSON.stringify(result))
        }
    })
})

/**得到评论 黄*/
app.get('/getcomment',function (req,res) {
    console.log(req.query.id)
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("SELECT * FROM comment WHERE title = ?",[req.query.id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(JSON.stringify(result))
        }
    })
})

/**更新某一用户的帖子收藏信息 黄*/
app.post('/postshoucang',function (req,res) {
    console.log(req.body.data);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    if(req.body.data.collection == 1){
        con.query("update post set collection = 1 where ID = ?",[req.body.data.id])
        con.query("select * from post ",(err,result)=>{
            if(err){
                throw err
            }else{
                console.log(result)
                res.send(result)
            }
        })
        con.query("insert into collection(username,postID) values(?,?)",[loginusername,req.body.data.id])
    }
    else{
        con.query("update post set collection = 0 where id = ?",[req.body.data.id])
        con.query("select * from post ",(err,result)=>{
            if(err){
                throw err
            }else{
                console.log(result)
                res.send(result)
            }
        })
        con.query("delete from collection where username = ? and postID = ?",[loginusername,req.body.data.id])
    }
    
})

/**获取某用户下有收藏标记的所有帖子信息 黄*/
app.get('/getshoucang',function (req,res) {
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from post where ID in (select postID from collection where username = ?)",[loginusername],function(err,result){
        if(err){
            throw err;
        }
        else{
            console.log(result)
            res.send(JSON.stringify(result))
        }
    })
})



/** 获取攻略收藏 */
app.get('/getshoucanggl',function (req,res) {
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from schoolraider where ID in (select postID from gonglvesc where username = ?)",[loginusername],function(err,result){
        if(err){
            throw err;
        }
        else{
            console.log(result)
            res.send(JSON.stringify(result))
        }
    })
})


/** qin__获取大学详细信息 */
app.get('/getCollegeDetails', function (req, res) {
    let collegeName = req.query.collegeName;
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from collegedetails where cName=?", [collegeName], (err, result) => {
        if (err) {
            throw err;
        }
        else {
            if(result[0] == null){
                res.send(false);
            }else{
                console.log(result[0])
                res.send(result[0]);
            }
        }
    })
})

/** qin__获取大学攻略粗略 */
app.get('/getCollegeRaiders', function (req, res) {
    let collegeName = req.query.collegeName;
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from schoolraider where schoolName=?", [collegeName], (err, result) => {
        if (err) {
            throw err;
        }
        else {
            if(result[0] == null){
                res.send(false);
            }else{
                res.send(result);
            }
        }
    })
})

/** qin__获取大学攻略详情页 */
app.get('/getRaidersDetails', function (req, res) {
    // console.log(req.query.title1);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from schoolraider where rTitleP=? and rTitleSpan=?", [req.query.title1,req.query.title2], (err, result) => {
        if (err) {
            throw err;
        }
        else {
            // console.log(result);
            res.send(result[0]);
        }
    })
})


/**qin__获取users表信息 —— 用于编辑资料 */
app.get('/getEditor',function (req,res) {
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from users where username=?",[User],function (err,result) {
        if(err){
            throw err
        }else{
            console.log(111)
            console.log(result[0])
            res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"})
            res.end(JSON.stringify(result[0]));
        }
    })
})


var server = app.listen(8080,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为http://%s:%s",host,port);
})
