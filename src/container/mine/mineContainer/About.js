import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100vh',backgroundColor:'rgb(221, 225, 255)'}}>
                <NavBar
                    mode="light"
                    icon={<Link to="/MineTab"><Icon type="left" /></Link>}
                >  
                    关于我们
                    </NavBar>
                <p className='qinAboutContent'>&nbsp;&nbsp;&nbsp;&nbsp;
                    人们对国内高校参观拜访游学的需求越来越旺盛，
                    但是却又往往不知道去哪里参观和如何文明参观，高校畅游通将提供免费的名校预约参观服务，让用户不白去;
                    提供校内精准游览地图和学校历史介绍，让用户更加具体形象的了解名校；
                    提供游玩攻略服务和经验分享服务，让用户之间GET高校最闪光的点........
                </p>
                <p className='qinAboutFrom'>from 小畅团队</p>
            </div>
        )
    }
}
