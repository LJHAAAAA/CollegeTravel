import React, { Component } from 'react';
import '../../../index.css';
// import {createBrowserHistory} from 'history';
// const his=createBrowserHistory();

export default class Shoucang extends Component {
    // fanhui=()=>{
    //     his.push('/fanhui');
    //     window.location.reload();
    // }
    render() {
        return (
        <div style={{width: '100%',backgroundColor: '#fff'}}>
            <div className='mu_shoucangtop'>
                <span className='iconfont icon-fanhui mu_fanhui'></span>
                <span className='mu_sc'>发帖子</span>
            </div>
            <div className='mu_lankuai'>
                <span className='iconfont icon-shequ2 mu_neirong'>共6条内容</span>
            </div>
        </div>
        )
    }
}