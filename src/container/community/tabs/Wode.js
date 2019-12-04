import React, { Component } from 'react'
import '../../../index.css';

export default class Header extends Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className='mu_fatie'>
                    <button className='mu_tianjia'>+</button>
                </div>
                <div className='mu_remen'>
                <h4>河北师范大学一日游，哪里好玩？</h4>
                <div className='mu_user'>
                    <img src={'https://s2.ax1x.com/2019/12/03/QMALHf.png'} className='mu_usertou' alt='用户头像'></img>
                    <span className='mu_userming'>黄金鸡</span>
                </div>
                <div className='mu_yhwenzi'>时光塔，碎心湖，博物馆，真知讲堂，图书馆，风雨操场，国培大厦，师大科技楼，学术氛围浓厚，周边商场也比较实惠，吃喝玩乐来师大就够了,包你满意</div>
                <div className='mu_zan'>
                    <i className='iconfont icon-dianzan'></i>
                    <span className='mu_zi'>6</span>
                    <i className='iconfont icon-pinglun'></i>
                    <span className='mu_zi'>6</span>
                    <i className='iconfont icon-xingxing1'></i>
                    <span className='mu_zi'>6</span>
                </div>
            </div>
            <div className='mu_remen'>
                <h4>河北师范大学一日游，哪里好玩？</h4>
                <div className='mu_user'>
                    <img src={'https://s2.ax1x.com/2019/12/03/QMALHf.png'} className='mu_usertou' alt='用户头像'></img>
                    <span className='mu_userming'>黄金鸡</span>
                </div>
                <div className='mu_yhwenzi'>时光塔，碎心湖，博物馆，真知讲堂，图书馆，风雨操场，国培大厦，师大科技楼，学术氛围浓厚，周边商场也比较实惠，吃喝玩乐来师大就够了,包你满意</div>
                <div className='mu_zan'>
                    <i className='iconfont icon-dianzan'></i>
                    <span className='mu_zi'>6666</span>
                    <i className='iconfont icon-pinglun'></i>
                    <span className='mu_zi'>6666</span>
                    <i className='iconfont icon-xingxing1'></i>
                    <span className='mu_zi'>6666</span>
                </div>
            </div>
            </div>
        )
    }
}