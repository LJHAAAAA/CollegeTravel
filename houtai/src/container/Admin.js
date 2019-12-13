import React, { Component } from 'react'

export default class Admin extends Component {
    constructor(props){
        super(props);
        this.state={
            username:this.props.location.pathname.split('/')[3],
            Data:{}
        }
    }
    componentWillMount(){
        fetch("http://localhost:8080/adminInf?username="+this.state.username)
        .then(res=>res.json())
        .then(
            data=>{
                this.setState({
                    Data:data
                })
            }
        )
    }
    render() {
        if(this.state.Data[0]&&this.state.Data[0].name){
            return (
                <div className="liu_r1">
                    <img src={this.state.Data[0].headPic} alt="" className="liu_r2"/>
                    <p className="liu_rp1">姓名:</p>
                    <p className="liu_rp2">编号:</p>
                    <p className="liu_rp3">{this.state.Data[0].name}</p>
                    <p className="liu_rp4">{this.state.Data[0].groupNum}</p>
                    <p className="liu_rp5">职务:</p>
                    <p className="liu_rp6">{this.state.Data[0].work}</p>
                    <p className="liu_rp7">性别:</p>
                    <p className="liu_rp6">{this.state.Data[0].sex}</p>
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
