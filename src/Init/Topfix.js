import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile';
import Login from './Login';
import Register from './Register';
import '../index.css'


export default class Topfix extends Component {
    render() {
        const tabs = [
            { title: <Badge>登 录</Badge> },
            { title: <Badge>注 册</Badge> },
            { title: <Badge>关 于 我 们</Badge> },
        ];
        const TabExample = () => (
            <div>
              <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
              >
                <div className='downBac1'>
                  <Login />
                </div>
                <div className='downBac2'>
                  <Register />
                </div>
                <div className='downBac3'>
                    <div className="InitAboutus">
                        <p className="InitAboutus-p1">人们对国内高校参观拜访游学的需求越来越</p>
                        <p className="InitAboutus-p2">旺盛，但是却又往往不知道去哪里参观和如何</p>
                        <p className="InitAboutus-p3">文明参观，高校畅游通将提供免费的名校预约</p>
                        <p className="InitAboutus-p4">参观服务，让用户不白去;提供校内精准游览地</p>
                        <p className="InitAboutus-p5">图和学校历史介绍，让用户更加具体形象的了解</p>
                        <p className="InitAboutus-p6">名校；提供游玩攻略服务和经验分享服务，让用</p>
                        <p className="InitAboutus-p7">用户之间GET高校最闪光的点........</p>
                        <p className="InitAboutus-p8">from 小畅团队</p>
                    </div>
                </div>
              </Tabs>
            </div>
        )
        return (
            <div className="InitTop">
                <div className="InitTop-1"></div>
                <div className="InitTop-2"></div>
                {/* <p className="InitTitle">高 校 畅 游 通</p> */}
                <TabExample/>
            </div>
        )
    }
}
