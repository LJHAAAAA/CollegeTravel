import React from "react";

export default class Forget extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            mobile:"",
            trueNum:"",
            checkNum:"",
            password:[]
        }
    }
    usernameChange=(e)=>{
        this.setState({
            username:e.target.value
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
    getPassword=()=>{
        let text = {username:this.state.username,mobile:this.state.mobile};
        let send = JSON.stringify(text);
        console.log(this.state.checkNum);
        console.log(this.state.trueNum);
        // eslint-disable-next-line eqeqeq
        if(this.state.checkNum == this.state.trueNum){
            fetch("http://localhost:8080/Getpassword",{
                method:'post',
                headers:{"Content-Type":"application/json;charset=utf-8"},
                body:send
            }).then(res=>res.json())
            .then(res=>{
                console.log(res)
                this.setState({
                    password:res[0].password
                })
            })
        }else{
            alert("请输入正确的验证码")
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
    render(){
        return(
            <div style={{marginBottom:'25vh',marginRight:'15vw'}}>
                <div className="Register-0 iconfont icon-yonghuming">
                    <input type="text" name="username" className="Register-2" placeholder="请输入用户名" onChange={this.usernameChange}/>
                </div>
                <div className="Register-1 iconfont icon-zhucedenglushoujihao">
                    <input type="text" name="pwd" className="Register-2" placeholder="请输入手机号码" onChange={this.mobileChange}/>
                </div>
                <input style={{marginRight:'0vw'}} type="submit" value="获取验证码" className="lv_zhuce" onClick={this.getCode}/>
                <div className="Register-1 iconfont icon-anquandunyanzhengma">
                    <input type="text" name="pwd" className="Register-2" placeholder="请输入验证码" onChange={this.numChange}/>
                </div>
                <div style={{marginLeft:'20vw'}} className='Register-3'>
                    <input type="submit" value="获取密码" className="Register-4" onClick={this.getPassword}/>
                </div>
                <div style={{marginTop:'12vh',marginLeft:'25vw'}} className="lv_forget">
                    <p>
                        {this.state.password}
                    </p>
                    
                </div>
            </div>
        )
    }
}
