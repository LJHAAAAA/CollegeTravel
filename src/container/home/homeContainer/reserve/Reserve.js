import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Reason from './Reason.js';
import {createBrowserHistory} from 'history'
const his = createBrowserHistory();

export default class Reserve extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    inputHandle=(e)=>{
        if(e.keyCode === 13){
            let s = e.target.value.length;
            if(s === 0){
                alert("请输入要搜索的大学的名称");
            }
            else if(s > 0 && s < 4){
                alert("请输入正确的大学名称");
            }
            else{
                if(e.target.value === "清华大学"){
                    his.push("/Tsinghua");
                    window.location.reload();
                }
                else if(e.target.value === "北京大学"){
                    his.push("/Peking");
                    window.location.reload();
                }
                else if(e.target.value === "厦门大学"){
                    his.push("/Xia");
                    window.location.reload();
                }
                else if(e.target.value === "武汉大学"){
                    his.push("/Wu");
                    window.location.reload();
                }
                else{
                    his.push("/Else");
                    window.location.reload();
                }
            }
        }
    }
    render() {
        return (
            <Fragment>
                {/* 上半部分搜索学校 */}
                <div className='qin_back' id='qin_reserve'>
                    <div className="liu_cover">
                        <Link to="/home"><div className='iconfont icon-fanhui' id='liu_fanhui'></div></Link>
                        <input placeholder='&nbsp;&nbsp;&nbsp;&nbsp;请输入想预约的高校' ref={ref => this.autoFocusInst = ref} className="liu_search" onKeyDown = {this.inputHandle} />
                    </div>
                </div>
                <Reason/>
            </Fragment>
        )
    }
}
