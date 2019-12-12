import React, { Component, Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
export default class Nothing extends Component {
    render() {
        return (
            <Fragment>
                <div style={{ position: 'fixed', zIndex: '1111', width: '100%' }}>
                    <NavBar
                        mode='light'
                        icon={
                            <Link to='/home'>
                                <Icon type='left' />
                            </Link>
                        }
                 >
                    </NavBar>
                    <p style={{fontSize:'10vw',width:'99%',textAlign:'center',marginTop:'10vw'}}>暂无数据</p>
                </div>
            </Fragment>
        )
    }
}
