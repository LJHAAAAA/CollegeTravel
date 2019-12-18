import React, { Component, Fragment } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();

export default class Mine extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                username:'未登录',
                Signature:'暂未编辑'
            }
        } 
    }
    componentDidMount = ()=>{
        fetch('http://localhost:8080/getEditor')
        .then(res=>res.json())
        .then(
            (res)=>{
                if(res){ 
                    this.setState({
                        data:res
                    })
                    console.log('res');
                    console.log(this.state.data)
                }                
            }
        )
    }
        
    
    editor = ()=>{
        his.push('/MineTab/editor');
        window.location.reload();
    }
    about = ()=>{
        his.push('/MineTab/about');
        window.location.reload();
    }
    Exit = ()=>{
        var confirm = window.confirm("确认退出？");
        if(confirm){
            his.push('/');
            window.location.reload();
        }else{
            
        }
    }
    render() {
        return (
            <Fragment>

                <div>
                    <NavBar
                        style={{ zIndex: '999', backgroundColor: 'rgb(77,199,249)', position: 'fixed', width: '100vw' }}
                        mode="light"
                    ><span style={{color:'white',fontFamily:'楷体',fontWeight:'bolder',fontSize:'6.5vw'}}>我&nbsp;&nbsp;的</span></NavBar>
                </div>
                <div><NavBar></NavBar></div>
                <div className='lv_headImg'>
                    <img style={{ position: 'relative', width: '100vw' }} src='https://s2.ax1x.com/2019/12/17/QoBhee.jpg' />
                </div>
                <div style={{ backgroundColor: 'white' }}>
                    <div className="lv_touxiang">
                        <img src="https://s2.ax1x.com/2019/12/17/QoDw1P.jpg" />
                    </div>

        <p style={{ position: 'relative', top: '-6vh', textAlign: 'center' }}>{this.state.data.username}</p>
        <p style={{ position: 'relative', top: '-5vh', textAlign: 'center' }}>{this.state.data.Signature}</p>
                </div>
                <div className='qinMineContent'>
                    <div className='qinMineEvery'>
                        <img src='https://s2.ax1x.com/2019/12/17/QoqnS0.png' />
                        <p>攻略收藏</p> 
                    </div>
                    <div className='qinMineEvery'>
                        <img src='https://s2.ax1x.com/2019/12/17/QoqulV.png' />
                        <p>帖子收藏</p> 
                    </div>
                    <div className='qinMineEvery' onClick={this.editor}>
                        <img src='https://s2.ax1x.com/2019/12/17/QoqKyT.png' />
                        <p>编辑资料</p> 
                    </div>
                    <div className='qinMineEvery' onClick={this.about}>
                        <img src='https://s2.ax1x.com/2019/12/17/QoqeWq.png' />
                        <p>关于我们</p> 
                    </div>
                    <button className='qinMineExit' onClick={this.Exit}>退出登录</button>
                </div>
            </Fragment>
        )
    }
}
