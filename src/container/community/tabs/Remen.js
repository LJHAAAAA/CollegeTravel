import React, { Component } from 'react'
import '../../../App';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorY: false,
            colorR: false,
            data: []
        }
    }
    setColorY = () => {// 点击变黄，再点变黑
        this.setState({
            colorY: !this.state.colorY
        })
    }
    setColorR = () => {// 点击变红，再点变黑
        this.setState({
            colorR: !this.state.colorR
        })
    }
    componentDidMount() {
        fetch("http://localhost:8080/tiezi").then(res => res.json()).then(date => {
            console.log(date);
            this.setState({
                data: date
            })
            console.log(this.state.data)
        }
    )}
    // shoucang = (e) => {
    //     if (this.state.data[e].collection == 0) {
    //         this.state.data[e].collection = 1
    //     } else {
    //         this.state.data[e].collection = 0
    //     }
    //     console.log(this.state.data);
    //     let text = {
    //         data: this.state.data[e]
    //     }

    //     let send = JSON.stringify(text);
    //     fetch("http://localhost:8080/postshoucang", {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json;charset=utf-8" },
    //         body: send
    //     }).then(res => res.json())
    //         .then(
    //             (res) => { console.log(res) }
    //         )
    // }
    // xiangqing = (item, idx) => {
    //     let text = {
    //         data: this.state.data[idx]
    //     }
    //     console.log(text);
    //     let send = JSON.stringify(text);
    //     fetch("http://localhost:8080/postxiangqing", {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json;charset=utf-8" },
    //         body: send
    //     }).then(res => res.json())
    //         .then(
    //             (res) => { console.log(res) }
    //         )
    //     his.push(`/tiezi/xiangqing?id=${item.title}`);
    //     window.location.reload();
    // }
    jumptzxq = () => {
        his.push('/tzxiangqing');
        window.location.reload();
    }
    comment=()=>{
        his.push('/tzxiangqing');
        window.location.reload();
    }
    render() {
        const Rstyle = {
            color: this.state.colorR ? "red" : "black",
        };
        const Ystyle = {
            color: this.state.colorY ? "yellow" : "black",
        }
        return (
            <div style={{ width: '100%' }}>
                {this.state.data.map((item, idx) =>
                    <div className='mu_remen' key={idx}>
                        <h4 className='mu_biao' onClick={this.jumptzxq}>{item.title}</h4>
                        {/* onClick={() => { return this.xiangqing(item, idx) }} */}
                        <div className='mu_user'>
                            <img src={'https://s2.ax1x.com/2019/12/03/QMALHf.png'} className='mu_usertou' alt='用户头像'></img>
                            <span className='mu_userming'>{item.username}</span>
                        </div>
                        <div className='mu_yhwenzi'>{item.tzcontent}</div>
                        <div className='mu_zan'>
                            <i className='iconfont icon-dianzan' style={Rstyle} onClick={this.setColorR}></i>
                            <span className='mu_zi' >{item.dznum}</span>
                            <i className='iconfont icon-pinglun' onClick={this.comment}></i>
                            <span className='mu_zi'>{item.plnum}</span>
                            <i className='iconfont icon-buoumaotubiao44'  onClick={this.setColorY}></i>
                            {/* onClick={() => { return this.shoucang(idx) }} */}
                            {/* style={Ystyle} */}
                            <span className='mu_zi'>{item.scnum}</span>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}