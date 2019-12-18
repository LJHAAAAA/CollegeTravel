import React, { Component } from 'react'
import { Tabs, Badge, SearchBar } from 'antd-mobile';
import Remen from '../tabs/Remen';
import Tuijian from '../tabs/Tuijian';
import Wode from '../tabs/Wode';
import '../../../index.css';
import { createBrowserHistory } from 'history';
import AppTab from '../../../Init/AppTab';
import { NavBar, Icon } from 'antd-mobile';
const his = createBrowserHistory();

export default class Header extends Component {
    render() {
        return (
            <div className='mu_header'>
                <header>
                    <NavBar
                        style={{ zIndex: '999', backgroundColor: 'rgb(77,199,249)', position: 'fixed', width: '100vw' }}
                        mode="light"
                    >
                        <span style={{color:'white',fontFamily:'楷体',fontWeight:'bolder',fontSize:'6.5vw'}}>
                            圈&nbsp;&nbsp;子
                        </span>
                    </NavBar>
                    <div className='tab' style={{paddingTop:'8vh'}}>
                        <Tabs tabs={[
                            { title: <Badge >热门</Badge> },
                            { title: <Badge >社区</Badge> },
                        ]}
                            initialPage={1}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', height: '150vw', backgroundColor: '#E0E0E0' }}>
                                <Remen />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', height: '150vw', backgroundColor: '#E0E0E0' }}>
                                <Wode />
                            </div>
                        </Tabs>
                    </div>
                </header>
            </div>
        )
    }
}