import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
const his = createBrowserHistory();

export default class Remen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/getrementiezi")
        .then(res => res.json())
        .then(
            data => {
                this.setState({
                    data: data
                })
            }
        )

    }

    isGood=(e)=>{
        console.log(this.state.data[e].isWell);
        if(this.state.data[e].isWell == 0){
            this.state.data[e].isWell = 1
            this.refs.tip.style.color = "red"
        }
        else{
            this.state.data[e].isWell = 0
            this.refs.tip.style.color = "black"
        }
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
            <div style={{ width: '100%', backgroundColor: 'white' }}>
                {
                    this.state.data.map((item, idx) =>
                        <div className='qin_remen' key={idx}>
                            <p style={{color:'gray', fontWeight:'bolder', float:'right',marginTop:'3vh',marginRight:'5vw'}}>{item.time}</p>
                            <p className='qinremenTitle' onClick={() => { return this.xiangqing(item, idx) }}>{item.title}</p>
                            <div style={{ marginLeft: '4.5vw' }}>
                                <img src={'https://s2.ax1x.com/2019/12/18/QTHeo9.png'} className='mu_usertou' alt='用户头像'></img>
                                <span style={{ float: 'left', marginTop: '1.5vh',color:'gray' }}>{item.username}</span>
                            </div>
                            <div style={{color:'rgb(26, 70, 94)', width: '95%', height: '5vh', overflow: 'hidden', fontSize: '4vw', marginTop: '4.5vh', marginLeft: '3vw', }}>&nbsp;&nbsp;{item.tzcontent}</div>
                            <div className='mu_zan'>
                                <i className='iconfont icon-dianzan'  onClick={() => { this.isGood(idx) }} ref="tip"> </i>
                                <span className='mu_zi'>{item.dznum}</span>
                                <i className='iconfont icon-collection' key={idx} ></i>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
