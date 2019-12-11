import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import AppRaiders from './AppRaiders'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Todolist from './Todolist';
const his = createBrowserHistory();

export default class RaiderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: decodeURIComponent(this.props.location.search),//执行解码，因为中文字符串往往在传递时被编码过了
            raidersDetails: {}
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:8080/getRaidersDetails' + this.state.details)
            .then(res => res.json())
            .then(
                data => {
                    this.setState({
                        raidersDetails: data
                    })
                    console.log(data)
                }
            )
    }
    raidersDetailsFanhui = () => {
        his.push('/home');
        window.location.reload();
    }
    render() {
        let details = this.state.raidersDetails;
        var date = new Date().toLocaleDateString();
        return (
            <Router>
                <div style={{ width: '100vw', position: 'fixed', top: '0' }}>
                    <Link to='/home'>
                        <NavBar
                            mode="dark"
                            leftContent="<"
                            onClick={this.raidersDetailsFanhui}
                            className='feng_nav'
                        >{details.rTitleP+'...'}</NavBar>
                    </Link>
                </div>
                <div style={{ width: '100vw', height: '10vh' }}></div>
                <div>
                    <p className='feng_detail_title'>{details.rTitleP + details.rTitleSpan}</p>
                    <br/>
                    <div className='feng_detail_writter'>
                        <img src={'https://s2.ax1x.com/2019/12/04/QQhEVS.jpg'} className='feng_head' />
                        <p>校校官方</p>
                        <span>{date}</span>
                    </div>
                    <br/>
                    <div className='feng_detail_content'>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;{details.rDetai1}</p>
                        <img src={details.rImg} className='feng_chatu' />
                        <p style={{marginTop:'3vw'}}>&nbsp;&nbsp;&nbsp;&nbsp;{details.rDetai2}</p>
                    </div>
                    <Todolist />
                </div>
                <Route path='/AppRaiders' component={AppRaiders} />
            </Router>
        )
    }
}
