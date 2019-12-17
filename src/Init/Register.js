import React, { Component } from 'react'


export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            repassword:"",
            mobile:"",
            trueNum:"",
            checkNum:""
        }
    }
    usernameChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    repasswordChange=(e)=>{
        this.setState({
            repassword:e.target.value
        })
    }
    passwordChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    mobileChange=(e)=>{
        this.setState({
            mobile:e.target.value
        })
    }
    numChange=(e)=>{
        this.setState({
            checkNum:e.target.value
        })
    }
    getConnect=()=>{
        let text = {username:this.state.username,password:this.state.password,repassword:this.state.repassword};
        let send = JSON.stringify(text);
        console.log(this.state.checkNum);
        console.log(this.state.trueNum);
        // eslint-disable-next-line eqeqeq
        if(this.state.checkNum == this.state.trueNum){
            fetch("http://localhost:8080/Register",{
                method:'POST',
                headers:{"Content-Type":"application/json;charset=utf-8"},
                body:send
            })
            .then(res=>res.json())
            .then(
                data=>{
                    if(data.success){
                        window.alert("注册成功");
                    }
                    else{
                        window.alert("注册失败");
                    }
                }
            )
        }
        else{
            window.alert("请输入正确的验证码");
        }
    }
    getCode=()=>{
        fetch("http://localhost:8080/Getnum?mobile="+this.state.mobile)
        .then(res=>res.json())
        .then(
            data=>{
                console.log(data);
                this.setState({
                    trueNum:data.trueNum
                })
            }
        )
    }



    render() {
        return (
            <div className='Register'>
                <div>
                    <div className="Register-0 iconfont icon-yonghuming">
                        <input type="text" name="username" className="Register-2" placeholder="请输入用户名" onChange={this.usernameChange}/>
                    </div>
                    <div className="Register-1 iconfont icon-mimasuo">
                        <input type="password" name="pwd" className="Register-2" placeholder="请输入密码" onChange={this.passwordChange}/>
                    </div>
                    <div className="Register-1 iconfont icon-zaicishurumima">
                        <input type="password" name="pwd" className="Register-2" placeholder="请再次输入密码" onChange={this.repasswordChange}/>
                    </div>
                    <div className="Register-1 iconfont icon-zhucedenglushoujihao">
                        <input type="text" name="pwd" className="Register-2" placeholder="请输入手机号码" onChange={this.mobileChange}/>
                    </div>
                    <input type="submit" value="获取验证码" className="lv_zhuce" onClick={this.getCode}/>
                    <div className="Register-1 iconfont icon-anquandunyanzhengma">
                        <input type="text" name="pwd" className="Register-2" placeholder="请输入验证码" onChange={this.numChange}/>
                    </div>
                    
                    <div className='Register-3'>
                        <input type="submit" value="注册" className="Register-4" onClick={this.getConnect}/>
                    </div>
                    {/* <div className='Register-3'>
                        <input type="submit" value="获取验证码" className="Register-5" onClick={this.getCode}/>
                    </div> */}
                </div>
            </div>
        )
    }
}
