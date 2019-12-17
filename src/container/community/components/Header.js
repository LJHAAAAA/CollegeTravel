import React, { Component } from 'react'
import { Tabs,Badge,SearchBar} from 'antd-mobile';
import Remen from '../tabs/Remen';
import Tuijian from '../tabs/Tuijian';
import Wode from '../tabs/Wode';
import '../../../index.css';
import {createBrowserHistory} from 'history';
import AppTab from '../../../Init/AppTab';
const his=createBrowserHistory();

export default class Header extends Component {
    render() {
        return (
            <div className='mu_header'>
                <header>
                    <div>
                        <img src={'https://s2.ax1x.com/2019/12/03/QMA7jI.png'} alt='header' className='mu_tou' />
                        <SearchBar placeholder="搜索大学" maxLength={8} className="mu_search"/>
                        
                    </div>
                    <div className='tab'>
                        <Tabs tabs={[
                            { title: <Badge >热门</Badge> },
                            { title: <Badge >我的</Badge> },
                        ]}
                            initialPage={1}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <div style={{ display: 'flex',justifyContent: 'center', height: '150vw', backgroundColor: '#E0E0E0' }}>
                                <Remen />
                            </div>
                            <div style={{ display: 'flex',justifyContent: 'center', height: '150vw', backgroundColor: '#E0E0E0' }}>
                                <Wode />
                            </div>
                        </Tabs>
                    </div>
                </header>
            </div>
        )
    }
}