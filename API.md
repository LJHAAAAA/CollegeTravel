# 高校畅游通 接口文档  

## 目录:  

[1、获取短信验证码](#1获取短信验证码)<br/>  



## 接口列表：  

### 1、获取短信验证码  
#### 请求URL：  
```
http://localhost:8080/Getnum
```

#### 示例：  
[http://localhost:8080/Getnum?mobile=15232192369](http://localhost:8080/Getnum?mobile=15232192369)  

#### 请求方式：  
```
GET
```

#### 参数类型：string  

| 参数 | 是否必选 | 类型 | 说明 |
|:-----|:-------:|:-----|:-----|
| type | Y | string | guess：请求验证码的手机号码 |  

#### 返回示例：  
```
{"success":true,"trueNum":197931}
```
