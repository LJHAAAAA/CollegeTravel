import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {createBrowserHistory} from 'history';
const his = createBrowserHistory();

export default class AppRaiders extends Component {
    constructor(){
        super();
    }
    showDetail=()=>{
        his.push('/RaiderDetail');
        window.location.reload();
    }
    state = {
        city:''
    }
    componentDidMount() {
        fetch('http://restapi.amap.com/v3/ip?key=bfac02e9509fdd41a723a3f26d363663')
            .then((res) => (res.json()))
            .then((res) => {
                console.log(res.city)
                this.setState({
                    city:res.city
                })
            })
    }

    render() {
        return (
            <Router>
            <div>
                <div style={{ width: '100%', height: '14.2vw' }} className='feng_search'>
                    <div className='feng_setPosition'>
                        <img src='https://s2.ax1x.com/2019/12/03/QMAu0f.png' />
                        <p>{this.state.city}</p>
                    </div>
                    <input type='text' placeholder="请输入大学名称"/>
                    {/* <SearchBar placeholder="请输入大学名称" maxLength={15} /> */}
                </div>
                
                <div className='feng_cover' >
                    <img src='https://s2.ax1x.com/2019/12/04/QQr9m9.jpg' className='feng_cover_img'/>
                    <div className='feng_title' onClick={this.showDetail}>
                        <p className='feng_tag'>
                            #美景
                        <br/>
                            《春天到武大<br/>
                            <span className='feng_title2'>看樱花</span>》
                        </p>
                    </div>
                    <img src='https://s2.ax1x.com/2019/12/04/QQszZ9.png' className='feng_cover_icon'/>
                </div>

                <div className='feng_cover'>
                    <img src='https://s2.ax1x.com/2019/12/04/QQrCwR.jpg' className='feng_cover_img'/>
                    <div className='feng_title' onClick={this.showDetail}>
                        <p className='feng_tag'>
                            #食堂
                        <br/>
                            《一日三餐<br/>
                            <span className='feng_title2'>吃在复旦</span>》
                        </p>
                    </div>
                    <img src='https://s2.ax1x.com/2019/12/04/QQszZ9.png' className='feng_cover_icon'/>
                </div>

                <div className='feng_cover'>
                    <img src='https://s2.ax1x.com/2019/12/04/QQr9m9.jpg' className='feng_cover_img'/>
                    <div className='feng_title' onClick={this.showDetail}>
                        <p className='feng_tag'>
                            #美景
                        <br/>
                            《春天到武大<br/>
                            <span className='feng_title2'>看樱花</span>》
                        </p>
                    </div>
                    <img src='https://s2.ax1x.com/2019/12/04/QQszZ9.png' className='feng_cover_icon'/>
                </div>
            </div>
            
            </Router>
        )
    }
}
