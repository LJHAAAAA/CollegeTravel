import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        this.state = {
            Data:[],  //所有数据
            indexList:[],//当前页面渲染的数据
            current:1,  //当前页码
            pageSize:6, //每页显示的数据条数
            goValue:0, //要去的条数index
            totalPage:0 //总页数
        }
    }
    componentWillMount(){
        fetch("http://localhost:8080/HouAll")
        .then(res=>res.json())
        .then(
            data => {
                this.setState({
                    Data:data,
                    totalPage:Math.ceil(data.length/this.state.pageSize)
                })
            }
        )
    }
    // setPage=(num)=>{
    //     this.setState({
    //         indexList:this.state.totalData.slice(num,num+this.state.pageSize)
    //     })
    // }
    // pageNext=(num)=>{
    //     this.setPage(num)
    // }
    // componentDidMount(){
        
        
    // }
    render() {
        console.log(this.state.totalPage);
        return (
            <div className="liu_u">
                <p className="liu_up1">账号</p>
                <p className="liu_up2">密码</p>
                <p className="liu_up3">用户名</p>
                <p className="liu_up4">电话</p>  
            </div>
        )
    }
}
