import React, { Component } from 'react'
import { Tabs, Badge, SearchBar } from 'antd-mobile';
import Remen from '../tabs/Remen';
import Wode from '../tabs/Wode';
import '../../../index.css';
import { createBrowserHistory } from 'history';
import AppTab from '../../../Init/AppTab';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom'
const his = createBrowserHistory();

export default class Header extends Component {
    render() {
        return (
            <div className='mu_header'>
                <header>
                    <NavBar
                        style={{ zIndex: '999', backgroundColor: 'rgb(77,199,249)', position: 'fixed', width: '100vw' }}
                        mode="light"
                    ><span style={{color:'white',fontSize:'6.5vw'}}>圈&nbsp;&nbsp;&nbsp;&nbsp;子</span></NavBar>
                    <div className='tab' style={{paddingTop:'7vh'}}>
                        <Tabs tabs={[
                            { title: <Badge >热门</Badge> },
                            { title: <Badge >社区</Badge> },
                        ]}
                            initialPage={0}
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