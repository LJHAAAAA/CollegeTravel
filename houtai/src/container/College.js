import React, { Component } from 'react'

export default class College extends Component {
    constructor(props){
        super(props);
        this.state = {
            Data:[],  //所有数据
            indexList:[],//当前页面渲染的数据量
            current:1,  //当前页码
            pageSize:6, //每页显示的数据条数
            num:0, // 页码变量
            totalPage:0 //总页数
        }
    }
    componentWillMount(){
        fetch("http://localhost:8080/HouCollege")
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
    render() {
        if(this.state.indexList[0]&&this.state.indexList[0].collegeName){
            return (
                <div className="liu_u">
                    <p className="liu_uc1">高校名称</p>
                    <p className="liu_uc2">所在城市</p>
                    <p className="liu_uc3">简介</p>
                    {
                        this.state.indexList.map((item,idx)=>(
                            <div key={idx} className="liu_u2">
                                <img src={item.collegePic} alt="" className="liu_upic"/>
                                <p className="liu_uc4">{item.collegeName}</p>
                                <p className="liu_uc5">{item.city}</p>
                                <p className="liu_uc6">{item.content}</p>
                            </div>
                        ))
                    }
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
