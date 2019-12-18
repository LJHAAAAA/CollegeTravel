import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile';
import Login from './Login';
import Register from './Register';
import '../index.css'
import Forget from './Forget';


export default class Topfix extends Component {
    render() {
        const tabs = [
            { title: <Badge>登 录</Badge> },
            { title: <Badge>注 册</Badge> },
            { title: <Badge>密 码 找 回</Badge> },
        ];
        const TabExample = () => (
            <div>
              <Tabs tabs={tabs}
                initialPage={0}
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
                    <Forget />
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
