import React, { Component, Fragment } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { createBrowserHistory } from 'history';
import {Link} from 'react-router-dom'
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


    componentDidMount=()=>{
        console.log(1)
        fetch("http://localhost:8080/getusername")
        .then(res=>res.json())
        .then(
            (res)=>{
                this.setState({
                    data:res
                })
                console.log('res')
                console.log(res)
            }
        )

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
    editor = () => {
        console.log(1)
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
        let src = this.state.data.Pic ? this.state.data.Pic : "https://s2.ax1x.com/2019/12/17/QoDw1P.jpg";
        let sig = this.state.data.Signature ? this.state.data.Signature : "暂未编辑";
        return (
            <Fragment>
                <NavBar
                        style={{ zIndex: '999', backgroundColor: 'rgb(77,199,249)', position: 'fixed', width: '100vw' }}
                        mode="light"
                    ><span style={{color:'white',fontSize:'6.5vw'}}>我&nbsp;&nbsp;&nbsp;&nbsp;的</span></NavBar>
                <div><NavBar></NavBar></div>
                <div className='lv_headImg'>
                    <img style={{ position: 'relative', width: '100vw' }} src='https://s2.ax1x.com/2019/12/17/QoBhee.jpg' />
                </div>
                <div style={{ backgroundColor: 'white' }}>
                    <div className="lv_touxiang">
                        <img src={src}/>
                    </div>

                    <p style={{ position: 'relative', top: '-6vh', textAlign: 'center' }}>{this.state.data.username}</p>
                    <p style={{ position: 'relative', top: '-5vh', textAlign: 'center' }}>{sig}</p>
                </div>
                <div className='qinMineContent'>
                    <div className='qinMineEvery'>
                        <img src='https://s2.ax1x.com/2019/12/17/QoqnS0.png' />
                        <Link to='/gonglue/shoucang'><p>攻略收藏</p> </Link>
                    </div>
                    <div className='qinMineEvery'>
                        <img src='https://s2.ax1x.com/2019/12/17/QoqulV.png' />
                        <Link to='/tiezi/shoucang'><p>帖子收藏</p></Link> 
                    </div>
                    <div className='qinMineEvery' onClick={this.editor}>
                        <img src='https://s2.ax1x.com/2019/12/17/QoqKyT.png' />
                        <Link to='/MineTab/editor'><p>编辑资料</p></Link>
                    </div>
                    <div className='qinMineEvery' onClick={this.about}>
                        <img src='https://s2.ax1x.com/2019/12/17/QoqeWq.png' />
                        <Link to='/MineTab/about'><p>关于我们</p></Link>
                    </div>
                    <button className='qinMineExit' onClick={this.Exit}>退出登录</button>
                </div>



            </Fragment>
        )
    }
}
