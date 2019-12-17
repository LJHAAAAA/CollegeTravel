import React, { Component } from 'react';
import '../../../index.css';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();
// import { directive } from '@babel/types';

export default class Shoucanggl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    fanhui = () => {
        his.push('/Mine');
        window.location.reload();
    }
    componentDidMount(){
        fetch("http://localhost:8080/getshoucanggl").then(res => res.json()).then(date => {
            console.log(date);
            this.setState({
                data: date
            })
            console.log(this.state.data)
        }
        )
    }
    render() {
        return (
        <div className='mu_shoucang'>
            <div className='mu_shoucangtop'>
                <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhui}></span>
                <span className='mu_sc'>我的收藏</span>
            </div>
            <div className='mu_lankuai'>
                <span className='iconfont icon-shequ2 mu_neirong'>共6条内容</span>
            </div>
            
            {
                    this.state.data.map((item, idx) =>
                        <div className='mu_remen' key={idx}>
                            <h4>{item.title}</h4>
                            
                            <div className='mu_user'>
                                {/* <img src={require('../images/m-2.png')} className='mu_usertou' alt='用户头像'></img> */}
                                <span className='mu_userming'>黄金鸡</span>
                            </div>
                            <div>{item.content}</div>
                        </div>
                    )
                }
        </div>
        )
    }
}