import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Tiezi extends Component {
    constructor(props){
        super(props);
        this.state = {
            Data:[],  //所有数据
            indexList:[],//当前页面渲染的数据量
            current:1,  //当前页码
            pageSize:6, //每页显示的数据条数
            num:0, // 页码变量
            totalPage:0, //总页数
            display:false,
            ID:""
        }
    }
    componentWillMount(){
        fetch("http://localhost:8080/HouTiezi")
        .then(res=>res.json())
        .then(
            data => {
                console.log(data);
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
    delAll=()=>{
        console.log(this.state.ID);
        fetch("http://localhost:8080/delTiezi?ID="+this.state.ID)
        .then(res=>res.json())
        .then(
            data=>{
                console.log(data.success);
                // eslint-disable-next-line eqeqeq
                if(data.success == 0){
                    window.alert("删除失败，无该帖子");
                }
                else{
                    this.setState({
                        display:!this.state.display
                    })
                    window.alert("删除成功");
                }
            }
        )
    }
    delTie=()=>{
        this.setState({
            display:!this.state.display
        })
    }
    delID=(e)=>{
        this.setState({
            ID:e.target.value
        })
    }
    render() {
        const divStyle2 = {
            display:this.state.display?'block':'none'
        };
        if(this.state.indexList[0]&&this.state.indexList[0].title){
            return (
                <div className="liu_u">
                    <div className="liu_udel" style={divStyle2}>
                        <p className="liu_ud1">请输入需要删除帖子ID</p>
                        <input type="text" className="liu_ud3" onChange={this.delID}/>
                        <Link onClick={this.delAll}><p className="liu_ud4">删 除</p></Link>
                    </div>
                    <p className="tiezi1">ID</p>
                    <p className="tiezi2">发帖人</p>
                    <p className="tiezi3">主题</p>
                    <p className="tiezi4">发帖内容</p>
                    <p className="tiezi5">对应高校</p>
                    <p className="tiezi10">时间</p>
                    {
                        this.state.indexList.map((item,idx)=>(
                            <div key={idx} className="liu_u2">
                                <p className="tiezi6">{item.id}</p>
                                <p className="tiezi7">{item.username}</p>
                                <p className="tiezi8">{item.title}</p>
                                <p className="tiezi9">{item.tzcontent}</p>
                                <p className="tiezi11">{item.lable}</p>
                                <p className="tiezi12">{item.time}</p>
                            </div>
                        ))
                    }
                    <Link onClick={this.delTie}><p className="tiezi13">删 除 贴 子</p></Link>
                    <Link className="liu_u3"><span onClick={ this.setUp } className="liu_u3_span">上 一 页</span></Link>
                    <span className="liu_u4">{ this.state.current }页/ { this.state.totalPage }页</span>
                    <Link className="liu_u5"><span onClick={ this.setNext } className="liu_u5_span">下 一 页</span></Link>
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
