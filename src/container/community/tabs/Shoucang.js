import React, { Component } from 'react';
import '../../../index.css';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();
// import { directive } from '@babel/types';

export default class Shoucang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    fanhui = () => {
        his.push('/MineTab');
        window.location.reload();
    }
    componentDidMount() {
        fetch("http://localhost:8080/getshoucang").then(res => res.json()).then(date => {
            console.log(date);
            this.setState({
                data: date
            })
            console.log(this.state.data)
        }
        )
    }
    xiangqing = (item, idx) => {
        let text = {
            data: this.state.data[idx]
        }
        console.log(text)
        let send = JSON.stringify(text);

        fetch("http://localhost:8080/postxiangqing", {
            method: 'POST',
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: send
        }).then(res => res.json())
            .then(
                (res) => { console.log(res) }
            )
        his.push(`/tiezi/xiangqing?id=${item.title}`);
        window.location.reload();
    }
    render() {
        return (
            <div className='mu_shoucang'>
                {/* <div className='mu_shoucangtop'>
                    <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhui}></span>
                    <span className='mu_sc'>帖子收藏</span>
                </div> */}
                <div className='mu_lankuai' style={{height:'7vh'}}>
                    <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhui}></span>
                    <span className='iconfont icon-shequ2 mu_neirong' style={{marginTop:'2vh'}}>共{this.state.data.length}条内容</span>
                </div>

                {this.state.data.map((item, idx) =>
                    <div className='qin_remen' key={idx}>
                        <p style={{ color: 'gray', fontWeight: 'bolder', float: 'right', marginTop: '3vh', marginRight: '5vw' }}>{item.time}</p>
                        <p className='qinremenTitle' onClick={() => { return this.xiangqing(item, idx) }}>{item.title}</p>
                        <div style={{ marginLeft: '4.5vw' }}>
                            <img src={'https://s2.ax1x.com/2019/12/18/QTHeo9.png'} className='mu_usertou' alt='用户头像'></img>
                            <span style={{ float: 'left', marginTop: '1.5vh', color: 'gray' }}>{item.username}</span>
                        </div>
                        <div style={{ color: 'rgb(26, 70, 94)', width: '95%', height: '5vh', overflow: 'hidden', fontSize: '4vw', marginTop: '4.5vh', marginLeft: '3vw', }}>&nbsp;&nbsp;{item.tzcontent}</div>
                        <div className='mu_zan'>
                            <i className='iconfont icon-dianzan'> </i>
                            <span className='mu_zi'>{item.dznum}</span>
                            <i className='iconfont icon-collection' key={idx} ></i>
                        </div>
                    </div>

                    // <div className='mu_remen' key={idx}>
                    //     <h4 onClick={() => { return this.xiangqing(item, idx) }}>{item.title}</h4>
                    //     <div className='mu_user'>
                    //         <img src={'https://s2.ax1x.com/2019/12/03/QMALHf.png'} className='mu_usertou' alt='用户头像'></img>
                    //         <span className='mu_userming'>{item.username}</span>
                    //     </div>
                    //     <div className='mu_yhwenzi'>{item.tzcontent}</div>
                    //     <div className='mu_zan'>
                    //         <i className='iconfont icon-dianzan' ></i>
                    //         <span className='mu_zi'>{item.dznum}</span>
                    //         <i className='iconfont icon-collection' ></i>
                    //         <span className='mu_zi'>{item.scnum}</span>
                    //     </div>
                    // </div>
                )}
            </div>
        )
    }
}