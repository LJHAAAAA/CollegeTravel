import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import AppRaiders from './AppRaiders'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Todolist from './Todolist';
const his = createBrowserHistory();

export default class RaiderDetail extends Component {
    showDetail=()=>{
        his.push('/home');
        window.location.reload();
    }
    render() {
        return (
            <Router>
                <div style={{width:'100vw',position:'fixed',top:'0'}}>
                    <Link to='/home'>
                    <NavBar
                    mode="dark"
                    leftContent="<"
                    onClick={this.showDetail}
                    className='feng_nav'
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >师大地标，洗月…</NavBar>
                    </Link>
                    
                </div>
                <div style={{width:'100vw',height:'10vh'}}>

                </div>
            <div>
                
                <p className='feng_detail_title'>师大地标，洗月湖</p>
                <div className='feng_detail_writter'>
                    <img  src={'https://s2.ax1x.com/2019/12/04/QQhEVS.jpg'} className='feng_head'/>
                    <p>校校官方</p>
                    <span>2019-09-09</span>
                </div>
                <div className='feng_detail_content'>
                    <p>
                        师大地标师大地标师大,地标师大地标师,大地标师大,地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大
                        地标师大地标师大地标师大地标师大地标,师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标
                        师大地标师大地标师大地标师大.地标
                    
                    </p>
                    <img  src={'https://s2.ax1x.com/2019/12/04/QQhEVS.jpg'} className='feng_chatu'/>
                    <p>
                    师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大
                        地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标
                        师大地标师大地标师大地标师大地标
                    师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标
                    师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标
                    师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标师大地标
                    </p>
                </div>
                <Todolist/>
            </div>
            <Route path='/AppRaiders' component={AppRaiders}/>
            
            </Router>
        )
    }
}
