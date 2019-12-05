import React,{ Component } from 'react'
import {createBrowserHistory} from 'history';
const his = createBrowserHistory();

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
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

    doLogin=()=>{
        let text = {username:this.state.username,password:this.state.password};
        let send = JSON.stringify(text);
        fetch("http://localhost:8080/loginHou",{
            method:'POST',
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:send
        })
        .then(res=>res.json())
        .then(
            data=>{
                if(data.success){
                    his.push('/home');
                    window.location.reload();
                }
                else{
                    window.alert('登陆失败');
                }
            }
        )
    }

    
   
    render() {
        return (
            <div className='lv_login'>
                <div className='lv_login1'>
                    <form  className='lv_login2'>
                        <p>账号:</p><input type="text" name='username' placeholder="请输入用户名" onChange={this.userChange} className="liu_login1"/><br/>
                        <p>密码:</p><input type="password" name='password' placeholder="请输入密码" onChange={this.pwdChange} className="liu_login2"/><br/>
                        <input type="submit" value="登录" onClick={this.doLogin} className="liu_login3"/>
                    </form>
                </div>
            </div>
        );
    }
}


