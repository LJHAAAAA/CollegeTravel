import React, { Component } from 'react'
import { statement } from '@babel/template'
import { WingBlank } from 'antd-mobile';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();

export default class Xiangqing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            a: '',
            comment: [],
            mycomment: ''
        }

    }
    componentDidMount() {
        fetch("http://localhost:8080/getxiangqing", { method: 'GET', headers: { "Content-Type": "application/json;charset=utf-8" } })
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })

        fetch("http://localhost:8080/getcomment" + this.props.location.search, { method: 'GET' })
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        comment: res
                    })
                    this.state.comment.map((item, idx) => {
                        //console.log(item,idx)
                    })
                }
            )
    }

    commentChange = (e) => {
        this.setState({
            a: e.target.value
        })
    }
    onkeyDown = (e) => {
        if (e.keyCode === 13) {
            return this.sComment();
        }
    }
    sComment = () => {
        this.setState({
            mycomment: this.state.a,
        })
        let text = {
            title: this.state.data.title,
            comment: this.state.a
        }
        let send = JSON.stringify(text);
        if (text.comment === '') {
            alert("评论不能为空！")
        } else {
            fetch('http://localhost:8080/postcomment', {
                method: 'POST',
                headers: { "Content-Type": "application/json;charset=utf-8" },
                body: send
            }).then(res => res.json())
                .then(
                    (res) => {
                        //console.log(res)
                    }
                )
        }
    }
    fanhui = () => {
        his.push('/communityTab');
        window.location.reload();
    }
    render() {
        if (this.state.data && this.state.data.title) {
            return (
                <div style={{ width: '100%', backgroundColor: '#fff' }} >
                    <div className='mu_shoucangtop'>
                        <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhui}></span>
                    </div>
                    <div className='mu_t'>
                        <h2 className='mu_biaoti'>{this.state.data.title}</h2>
                        <div className='mu_yhxx'>
                            <img src={'https://s2.ax1x.com/2019/12/18/QTHeo9.png'} className='mu_usertou2' alt='用户头像'></img>
                            <p className='mu_userming2'>{this.state.data.username}</p>
                            <p className='mu_riqi'>{this.state.data.time}</p>
                        </div>
                        <div>
                            <WingBlank className='mu_zw'>{this.state.data.tzcontent}
                            </WingBlank>
                            <p style={{
                                border: '1px solid gray',
                                borderRadius: '2vw',
                                width: '35vw',
                                textAlign: 'center',
                                height: '3vh',
                                marginLeft: '60%',
                                marginTop: '3vh'
                            }}>#{this.state.data.lable}</p>
                        </div>
                        <div style={{ marginTop: '1vh', marginLeft: '8vw' }}>
                            <input style={{ width: '70vw', marginBottom: '1vh', marginTop: '1vh' }} type='text' placeholder="输入评论" onChange={this.commentChange} onKeyDown={this.onkeyDown} />
                            <button onClick={() => { return this.sComment() }}>提交</button>
                            <p>{this.state.mycomment}</p>
                        </div>
                        <ul>
                            {
                                this.state.comment.map((item, idx) =>
                                    <li key={idx} style={{ marginLeft: '8vw', marginTop: '1vh' }}>
                                        {item.context}
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
}
