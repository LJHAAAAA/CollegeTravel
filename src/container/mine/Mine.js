import React, { Component,Fragment } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';
import AppTab from '../../Init/AppTab';

export default class Mine extends Component {
    render() {
        return (
            <Fragment>
                
                <div>
                <NavBar
                    style={{backgroundColor:'rgb(77,199,249)',position:'fixed',width:'100vw'}}
                    mode="light"
                    >我的</NavBar>
                </div>
                <div><NavBar></NavBar></div>
                <div className='lv_wode_head'>
                    <div className="lv_wode_img">
                        <img src="https://s2.ax1x.com/2019/12/09/Q0mmIx.jpg"/>
                    </div>
                    <div className='lv_wode_word'>
                        <p>typhoon</p>
                        <p>简介：软件学院小班长</p>
                    </div>
                </div>
                <div className='lv_wode_choose'>
                    <div className='lv_left'>
                        <p>13</p>
                        <p>
                        <Link to='/tiezi/shoucang'>
                            帖子收藏
                        </Link>
                        </p>
                    </div>
                    <div className='lv_right'>
                        <p>13</p>
                        <p>
                        <Link to='/gonglue/shoucang'>
                            攻略收藏
                        </Link>
                        </p>  
                    </div>

                </div>
                <div className="lv_loginout">
                    <Link to='/'>
                        <span>退出登录</span>
                    </Link>
                </div>
                
            </Fragment>
        )
    }
}
