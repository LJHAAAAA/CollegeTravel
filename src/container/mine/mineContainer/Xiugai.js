import { WingBlank, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import React, { Component,Fragment } from 'react'


export default class Xiugai extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    changeName = (e)=>{
        let text = {
            data:this.state.data[e]
        }
        let send = JSON.stringify(text);
        fetch("http://localhost:8080/postziliao",{
            method:'POST',
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:send
        }).then(res=>res.json())
        .then(
            (res)=>{
                this.setState({
                    data:res
                })
            }
        )
    }
    componentDidMount(){
        fetch("http://localhost:8080/getziliao")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({
                data:data
            })
            
        }  
        )
    }
    render() {
        if(this.state.data[0]&&this.state.data[0].nicheng){
            return (
                <Fragment>
                    <div>
                    <NavBar
                        mode="light"
                        icon={<Link to="home"><Icon type="left" /></Link>}
                        >
                            编辑资料
                    </NavBar>
                    </div>
                    <WhiteSpace/>
                    <WingBlank>
                        <div className='lv_input'>
                            <span>
                                昵称：
                            </span>
                            <input placeholder={this.state.data[0].nicheng}></input>
                        </div>
                        <div className='lv_input'>
                            <span>
                                简介：
                            </span>
                            <input placeholder={this.state.data[0].jianjie}></input>
                        </div>
                    </WingBlank>
                    <div onClick={this.changeName}>提交</div>
                </Fragment>             
            )
        }else{
            return(
                <div>

                </div>
            )
        }
    }
}
