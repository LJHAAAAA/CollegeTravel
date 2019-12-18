import React, { Component } from 'react'
import {createBrowserHistory} from 'history'
const his = createBrowserHistory();


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    }
    userChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    pwdChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    
    getConnect=()=>{
        let text = {username:this.state.username,password:this.state.password};
        let send = JSON.stringify(text);  //需要把对象转换成JSON字符串去进行传输
        fetch('http://localhost:8080/login',{
            method:'POST',
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:send
        })
        .then(res=>res.json())
        .then(
            data=>{
                if(data.success){
                    his.push(`/home?username=${this.state.username}`);
                    window.location.reload();
                }
                else{
                    window.alert("登录失败");
                }
            }
        )
    }
    render() {
        return (
            <div className="Liu_Login">
                <div className="Liu_Login1">
                    <div className="Liu_Login2">
                        <div className="Login_img1 iconfont icon-yonghuming">
                            <input type="text" name="username" className="Login-1" placeholder="请输入用户名" onChange={this.userChange}/>
                        </div>
                        <div className="Login_img1 iconfont icon-mimasuo">
                            <input type="password" name="pwd" className="Login-2" placeholder="请输入密码" onChange={this.pwdChange} />
                        </div>
                        <input type="button" value="登 录" className="Login-3"  onClick={this.getConnect}/>
                    </div>
                </div>
            </div>
        )
    }
}

