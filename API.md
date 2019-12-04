# 高校畅游通 接口文档  

## 目录:  
[1、获取短信验证码](#1获取短信验证码)  
[2、获取用户注册信息](#2获取用户注册信息)  
[3、获取登录验证](#3获取登录验证)    
[4、获取大学信息](#4获取大学信息)  
[5、获取当前城市](#5获取当前城市)  
[6、获取高校地图](#6获取高校地图)  

## 接口列表： 

### 1、获取短信验证码  
##### 请求URL：  
```
http://localhost:8080/Getnum
```
##### 示例：  
[http://localhost:8080/Getnum?mobile=15732152366](http://localhost:8080/Getnum?mobile=15732152366)  
##### 请求方式：  
```
GET
```
##### 参数类型：string  
| 参数 | 是否必选 | 类型 | 说明 |
|:-----|:-------:|:-----|:-----|
| mobile | Y | string | 请求验证码的手机号码 |  
##### 返回示例：  
```
{
  "success":true,
  "trueNum":197931
}
```


### 2、获取用户注册信息  
##### 请求URL：  
```
https://localhost:8080/login
```
##### 示例：  
[https://localhost:8080/login](https://localhost:8080/login)
##### 请求方式：  
```
POST
```


### 3、获取登录验证    
##### 请求URL：  
```
https://localhost:8080/Register
```
##### 示例：  
[https://localhost:8080/Register](https://localhost:8080/Register)
##### 请求方式：  
```
POST
```


### 4、获取大学信息
##### 请求URL：  
```
http://localhost:8080/getCity
```
##### 示例：  
[http://localhost:8080/getCity?cityNow=北京](http://localhost:8080/getCity?cityNow=北京)  
##### 请求方式：  
```
GET
```
##### 参数类型：string  
| 参数 | 是否必选 | 类型 | 说明 |
|:-----|:-------:|:-----|:-----|
| cityNow| Y | string | 选择要显示热门高校的城市 |  
##### 返回示例：  
```
{
  "college":北京大学,
  "city":北京,
  "content":北京大学（Peking University）,简称北大，诞生于1898年...,
  "collegePic":https://s2.axlx.com/2019/12/04/QQ2tXT.jpg
}
```


### 5、获取当前城市  
##### 请求URL：  
```
http://restapi.amap.com/v3/ip
```
##### 示例：  
[http://restapi.amap.com/v3/ip?key=bfac02e9509fdd41a723a3f26d363663](http://restapi.amap.com/v3/ip?key=bfac02e9509fdd41a723a3f26d363663) 
##### 请求方式：  
```
GET
```
##### 参数类型：string  
| 参数 | 是否必选 | 类型 | 说明 |
|:-----|:-------:|:-----|:-----|
| key | Y | string | 高德地图API控制台自行申请Key值 |  
##### 返回示例：  
```
{
  "status":"1",
  "info":"OK",
  "infocode":"10000",
  "province":"河北省",
  "city":"石家庄市",
  "adcode":"130000",
  "rectangle":"114.2195964,37.86302147;114.7912717,38.22308596"
}
```


### 6、获取高校地图  
##### 请求URL：  
```
https://restapi.amap.com/v3/geocode/geo
```
##### 示例：  
[https://restapi.amap.com/v3/geocode/geo?key=bfac02e9509fdd41a723a3f26d363663&address=北京大学](https://restapi.amap.com/v3/geocode/geo?key=bfac02e9509fdd41a723a3f26d363663&address=) 
##### 请求方式：  
```
GET
```
##### 参数类型：string  
| 参数 | 是否必选 | 类型 | 说明 |
|:-----|:-------:|:-----|:-----|
| key | Y | string | 高德地图API控制台自行申请Key值 |  
| address | Y | string | 具体搜索的地址 | 
##### 返回示例：  
```
{
  "status":"1",
  "info":"OK",
  "infocode":"10000",
  "count":"1",
  "geocodes":
    [
      {
        "formatted_address":"北京市海淀区北京大学",
        "country":"中国",
        "province":"北京市",
        "citycode":"010",
        "city":"北京市",
        "district":"海淀区",
        "township":[],
        "neighborhood":{"name":[],"type":[]},
        "building":{"name":[],"type":[]},
        "adcode":"110108",
        "street":[],
        "number":[],
        "location":"116.308264,39.995304",
        "level":"兴趣点"
      }
    ]
}
