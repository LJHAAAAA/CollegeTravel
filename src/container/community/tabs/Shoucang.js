import React, { Component } from 'react';
import '../../../index.css';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();

export default class Shoucang extends Component {
    constructor(props) {
        super(props);
    }
    delItem=(e)=> {
        e.target.parentNode.parentNode.remove();
    }
    fanhui = () => {
        his.push('/fanhui');
        window.location.reload();
    }
    render() {
        return (
            <div style={{ width: '100%', backgroundColor: '#fff' }}>
                <div className='mu_shoucangtop'>
                    <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhui}></span>
                    <span className='mu_sc'>我的收藏</span>
                </div>
                <div className='mu_lankuai'>
                    <span className='iconfont icon-shequ2 mu_neirong'>共6条内容</span>
                </div>

                <div className='mu_remen'>
                    <h4>河北师范大学一日游，哪里好玩？</h4>
                    <div className='mu_user'>
                        <img src={'https://s2.ax1x.com/2019/12/03/QMALHf.png'} className='mu_usertou' alt='用户头像'></img>
                        <span className='mu_userming'>黄金鸡</span>
                    </div>
                    <div className='mu_yhwenzi'>1时光塔，碎心湖，博物馆，真知讲堂，图书馆，风雨操场，国培大厦，师大科技楼，学术氛围浓厚，周边商场也比较实惠，吃喝玩乐来师大就够了,包你满意</div>
                    <div className='mu_zan'>
                        <i className='iconfont icon-dianzan'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-pinglun'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-shoucang'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-lajixiang' onClick={this.delItem}></i>
                    </div>
                </div>
                <div className='mu_remen'>
                    <h4>河北师范大学一日游，哪里好玩？</h4>
                    <div className='mu_user'>
                        <img src={'https://s2.ax1x.com/2019/12/03/QMALHf.png'} className='mu_usertou' alt='用户头像'></img>
                        <span className='mu_userming'>黄金鸡</span>
                    </div>
                    <div className='mu_yhwenzi'>2时光塔，碎心湖，博物馆，真知讲堂，图书馆，风雨操场，国培大厦，师大科技楼，学术氛围浓厚，周边商场也比较实惠，吃喝玩乐来师大就够了,包你满意</div>
                    <div className='mu_zan'>
                        <i className='iconfont icon-dianzan'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-pinglun'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-shoucang'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-lajixiang' onClick={this.delItem}></i>
                    </div>
                </div>
                <div className='mu_remen'>
                    <h4>河北师范大学一日游，哪里好玩？</h4>
                    <div className='mu_user'>
                        <img src={'https://s2.ax1x.com/2019/12/03/QMALHf.png'} className='mu_usertou' alt='用户头像'></img>
                        <span className='mu_userming'>黄金鸡</span>
                    </div>
                    <div className='mu_yhwenzi'>3时光塔，碎心湖，博物馆，真知讲堂，图书馆，风雨操场，国培大厦，师大科技楼，学术氛围浓厚，周边商场也比较实惠，吃喝玩乐来师大就够了,包你满意</div>
                    <div className='mu_zan'>
                        <i className='iconfont icon-dianzan'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-pinglun'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-shoucang'></i>
                        <span className='mu_zi'>6666</span>
                        <i className='iconfont icon-lajixiang' onClick={this.delItem}></i>
                    </div>
                </div>
            </div>
        )
    }
}