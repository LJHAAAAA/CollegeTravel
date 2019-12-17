import React, { Component } from 'react';
import '../../../index.css';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();

export default class Shoucang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            title: '',
            content: '',
            date: new Date().getFullYear()+"/"+(new Date().getMonth()+1)+"/"+new Date().getDate()+" "+((new Date().getHours() < 10) ? "0" : "") + new Date().getHours()+':'+((new Date().getMinutes() < 10) ? "0" : "") + new Date().getMinutes()
        };
    }
    titleChange = (e) => {//标题改变
        this.setState({title: e.target.value})
    }
    contentChange = (e) => {//内容改变
        console.log(e)
        this.setState({content: e.target.value})
    }
    fabiao = () => {//点击发表按钮
        console.log("1")
        let text = {
            title: this.state.title,
            content: this.state.content,
            value: this.state.value,
            date: this.state.date
        }
        
        let send = JSON.stringify(text);
        console.log(send)
        fetch("http://localhost:8080/posting", {
            method: 'POST',
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: send
        }).then(res => res.json())
        .then(
            data => {
                if (data.success) {
                     window.alert("发帖成功");
                }else {
                    window.alert("发帖失败");
                }
            }
        )
    }
    fanhuiW = () => {//点击左三角返回apptab页面
        his.push('/fanhuiW');
        window.location.reload();
    }
    handleChange=(event)=> {//点击标签选择大学
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <div className='mu_shoucangtop'>
                    <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhuiW}></span>
                    <span className='mu_sc'>发帖子</span>
                    <button className='mu_fabiao' onClick={this.fabiao}>发表</button>
                </div>
                <div className='wu_pinglun_title' >
                    <input onChange={this.titleChange} style={{ width: '100%', height: '6vh', backgroundColor: 'white', borderStyle: 'none', fontSize: '22px', fontWeight: '700', color: 'black', padding: '5px 10px 0' }} type='text' placeholder='请输入标题'></input>
                </div>
                <div className='mu_tie'>
                    <div className='mu_xiet'>
                        <textarea onChange={this.contentChange} placeholder="分享此刻的想法吧..." className='mu_fabuwenzi'></textarea>
                    </div>
                    <select className='mu_xzbq' value={this.state.value} onChange={this.handleChange}>
                        <option value="">选择标签</option>
                        <option value="#清华大学">清华大学</option>
                        <option value="#北京大学">北京大学</option>
                        <option value="#中山大学">中山大学</option>
                        <option value="#厦门大学">厦门大学</option>
                        <option value="#同济大学">同济大学</option>
                        <option value="#华侨大学">华侨大学</option>
                        <option value="#暨南大学">暨南大学</option>
                        <option value="#武汉大学">武汉大学</option>
                        <option value="#西北工业大学">西北工业大学</option>
                        <option value="#西安交通大学">西安交通大学</option>
                        <option value="#河北师范大学">河北师范大学</option>
                        <option value="#河北医科大学">河北医科大学</option>
                    </select>
                    <div>{this.state.value}</div>
                </div>
            </div>
        )
    }
}
