import { WingBlank, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import React, { Component,Fragment } from 'react'


export default class Editor extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        } 
    }
    componentDidMount = ()=>{
        fetch('http://localhost:8080/getEditor')
        .then(res=>res.json())
        .then(
            (res)=>{
                this.setState({
                    data:res
                })
                console.log('res');
                console.log(this.state.data)
            }
        )
    }
   
    render() {
            return (
                <Fragment>
                    <div>
                    <NavBar
                        mode="light"
                        icon={<Link to="/MineTab"><Icon type="left" /></Link>}
                        >
                            编辑资料
                    </NavBar>
                    </div>
                    <WhiteSpace/>
                    <WingBlank>
                        <div className='lv_input'>
                            <span>
                                用户名：
                            </span>
                            {/* <input placeholder={this.state.data[0].nicheng}></input> */}
                        </div>
                        <div className='lv_input'>
                            <span>
                                个性签名：
                            </span>
                            {/* <input placeholder={this.state.data[0].jianjie}></input> */}
                        </div>
                    </WingBlank>
                    {/* <div onClick={this.changeName}>提交</div> */}
                </Fragment>             
            )
        
    }
}
