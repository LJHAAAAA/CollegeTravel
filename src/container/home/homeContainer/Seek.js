import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../../../index.css';
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();
export default class Seek extends Component {
    constructor(){
        super();
        this.state = {
            collegeName:''
        }
    }
    change = (e)=>{
        this.setState({
            collegeName:e.target.value
        })
    }
    keydown = (e) => {
        if (e.target.value && e.keyCode === 13) {
            this.click()
        }
    }
    click = ()=>{
        let s = this.state.collegeName.length;
        if(s >= 0 && s < 4){
            alert("请输入正确的大学名称");
        }
        else {
            console.log(this.state.collegeName);
            his.push('/collegeDetails/' + this.state.collegeName);
            window.location.reload();
        }
    }
    render() {
        return (
            <div>
                <NavBar  
                mode="light"
                icon={
                    <Link to='/home'><Icon type="left" /></Link>}>名校搜索
                </NavBar>
                <div className='wu_Seek_box'>
                    <img style={{width:'122%',position:'absolute', left:'-10vw'}} src={'https://s2.ax1x.com/2019/12/11/QrKTaQ.jpg'} alt=""/>
                    <div style={{position:'relative'}}>
                        <input placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入你想查询的高校..." className='wu_seek' onChange={this.change}  onKeyDown={this.keydown} />
                        <img src={'https://s2.ax1x.com/2019/12/11/QrdLKe.png'} className='wu_arrow' onClick={this.click}/>
                    </div>
                </div>
            </div>
        )
    }
}
