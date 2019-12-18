import React, { Component } from 'react'
import {Link} from 'react-router-dom';



export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            Data:[],  //所有数据
            indexList:[],//当前页面渲染的数据量
            current:1,  //当前页码
            pageSize:6, //每页显示的数据条数
            num:0, // 页码变量
            totalPage:0, //总页数
            display1:false,
            display2:false,
            username:"",
            password:"",
            name:"",
            phone:"",
            delname:""
        }
    }
    componentWillMount(){
        fetch("http://localhost:8080/HouAll")
        .then(res=>res.json())
        .then(
            data => {
                this.setState({
                    Data:data,
                    totalPage:Math.ceil(data.length/this.state.pageSize),  
                    indexList:data.slice(this.state.num,this.state.num+this.state.pageSize)  
                })
            }
        )
    }
    setNext=()=>{
        if(this.state.current < this.state.totalPage){
            this.setState({
                num:this.state.num + this.state.pageSize,
                current:this.state.current + 1,
                // indexList:this.state.Data.slice(this.state.num,this.state.num+this.state.pageSize)  
            },function(){
                this.setState({
                    indexList:this.state.Data.slice(this.state.num,this.state.num+this.state.pageSize)  
                })
            })
        }
    }
    setUp=()=>{
        if(this.state.current > 1){
            this.setState({
                num:this.state.num - this.state.pageSize,
                current:this.state.current - 1
            },function(){
                this.setState({
                    indexList:this.state.Data.slice(this.state.num,this.state.num+this.state.pageSize)  
                })
            })
        }
    }
    addUser=()=>{
        this.setState({
            display1:!this.state.display1
        })
    }
    delUser=()=>{
        this.setState({
            display2:!this.state.display2
        })
    }
    addUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    addPassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    addName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    addPhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }
    delName=(e)=>{
        this.setState({
            delname:e.target.value
        })
    }
    addAll=()=>{
        let text = {username:this.state.username,password:this.state.password,name:this.state.name,phone:this.state.phone};
        let send = JSON.stringify(text);
        fetch("http://localhost:8080/addHoutaiuser",{
            method:'POST',
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:send
        })
        .then(res=>res.json())
        .then(
            data=>{
                // eslint-disable-next-line eqeqeq
                if(data.success == 0){
                    window.alert("添加成功");
                    this.setState({
                        display1:!this.state.display1,
                        username:""
                    })
                }
                // eslint-disable-next-line eqeqeq
                else if(data.success == 1){
                    window.alert("该用户名已存在");
                }
                else{
                    window.alert("添加失败");
                }
            }
        )
    }
    delAll=()=>{
        fetch("http://localhost:8080/delHoutaiuser?delname="+this.state.delname)
        .then(res=>res.json())
        .then(
            data=>{
                console.log(data.success);
                // eslint-disable-next-line eqeqeq
                if(data.success == 0){
                    window.alert("删除失败，无该用户");
                }
                else{
                    this.setState({
                        display2:!this.state.display2
                    })
                    window.alert("删除成功");
                }
            }
        )
    }
    render() {
        const divStyle1 = {
            display:this.state.display1?'block':'none'
        };
        const divStyle2 = {
            display:this.state.display2?'block':'none'
        };
        if(this.state.indexList[0]&&this.state.indexList[0].username){
            return (
                <div className="liu_u">
                    <div className="liu_uadd" style={divStyle1}>
                        <img src="https://s2.ax1x.com/2019/12/10/QDpwMq.jpg" alt="" className="add1"/>
                        <p className="add2">账号</p><input type="text" className="add3" onChange={this.addUsername}/>
                        <p className="add4">密码</p><input type="password" className="add5" onChange={this.addPassword}/>
                        <p className="add6">用户名</p><input type="text" className="add7" onChange={this.addName}/>
                        <p className="add8">手机号</p><input type="text" className="add9" onChange={this.addPhone}/>
                        <Link onClick={this.addAll}><p className="add10">添 加</p></Link>
                    </div>
                    <div className="liu_udel" style={divStyle2}>
                        <p className="liu_ud1">请输入需要删除的账号</p>
                        <input type="text" className="liu_ud3" onChange={this.delName}/>
                        <Link onClick={this.delAll}><p className="liu_ud4">删 除</p></Link>
                    </div>
                    <p className="liu_up1">账号</p>
                    <p className="liu_up2">密码</p>
                    <p className="liu_up3">用户名</p>
                    <p className="liu_up4">电话</p>
                    {
                        this.state.indexList.map((item,idx)=>(
                            <div key={idx} className="liu_u2">
                                <img src={item.Pic} alt="" className="liu_upic"/>
                                <p className="liu_up5">{item.username}</p>
                                <p className="liu_up6">{item.password}</p>
                                <p className="liu_up7">{item.Name}</p>
                                <p className="liu_up8">{item.Phone}</p>
                            </div>
                        ))
                    }
                    <Link className="liu_u3"><span onClick={ this.setUp } className="liu_u3_span">上 一 页</span></Link>
                    <span className="liu_u4">{ this.state.current }页/ { this.state.totalPage }页</span>
                    <Link className="liu_u5"><span onClick={ this.setNext } className="liu_u5_span">下 一 页</span></Link>
                    <Link onClick={this.addUser}><p className="liu_u6">添 加 用 户</p></Link>
                    <Link onClick={this.delUser}><p className="liu_u7">删除用户</p></Link>
                </div>
            )
        }
        else{
            return(
                <div>
                </div>
            )
        }
    }
}
