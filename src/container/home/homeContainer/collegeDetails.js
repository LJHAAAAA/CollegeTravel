import React, { Component, Fragment } from 'react';
import { NavBar, Icon, WingBlank, WhiteSpace, Grid } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { Card } from 'antd-mobile';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

export default class CollegeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collegeName: this.props.match.params.name,
            collegeDetails: ''
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:8080/getCollegeDetails?collegeName=' + this.state.collegeName)
            .then(res => res.json())
            .then(
                data => {
                    if(data){
                        this.setState({
                            collegeDetails: data
                        })
                    }else{
                        console.log('nothing')
                        his.push('/home/seek/nothingCollege');
                        window.location.reload();
                    }
                }
            )
    }
    render() {
        return (
            <Fragment className='lv_total'>
                <div style={{ position: 'fixed', zIndex: '1111', width: '100%' }}>
                    <NavBar
                        mode='light'
                        icon={
                            <Link to='/home/seek'>
                                <Icon type='left' />
                            </Link>
                        }
                    >
                        <span>{this.state.collegeDetails.cName}</span>
                    </NavBar>
                </div>
                <div>
                    <NavBar></NavBar>
                </div>
                <div className='lv_middle'>
                    <div className='lv_middle_child'>
                        <WhiteSpace />
                        {/* 上下留白 WhiteSpace */}
                        {/* 左右留白 WingBlank */}
                        <WingBlank >
                            <div style={{ width: '100%', height: '65vh', overflow: 'hidden'}}>
                                <img src={this.state.collegeDetails.cBack} style={{ opacity: '0.4', position: 'relative', height: '100%', marginLeft: '-50vw' }} />
                                <div style={{ position: 'absolute', top: '10vh', height: '100%' }}>
                                    <div className='lv_middle_name'>
                                        <img src={this.state.collegeDetails.cImg} />
                                    </div>
                                    <div className='lv_line'></div>
                                    <p className='lv_title'>{this.state.collegeDetails.cMotto}</p>
                                    <p className='lv_artical'>
                                        &nbsp;&nbsp;&nbsp;&nbsp;{this.state.collegeDetails.cHistory}
                                    </p>
                                </div>
                            </div>
                        </WingBlank>
                    </div>
                </div>

                {/* 校园风光 */}
                <br />
                <h className='lv_title1'>校园风光</h>
                <WhiteSpace />
                <WingBlank>
                    <br />
                    <WhiteSpace />
                    <Card>
                        <Card.Header
                            thumb={this.state.collegeDetails.imgA}
                            thumbStyle={{ width: '100%' }}
                        />
                        <Card.Body>
                            <p style={{ fontWeight: 'bolder', fontFamily: '楷体', fontSize: '5vw', color: 'rgb(6, 118, 138)' }}>{this.state.collegeDetails.cViewPointA}</p>
                            <p className='lv_artical'>{this.state.collegeDetails.contentA}</p>
                        </Card.Body>
                    </Card>
                    <WhiteSpace />
                    <Card>
                        <Card.Header
                            thumb={this.state.collegeDetails.imgB}
                            thumbStyle={{ width: '100%' }}
                        />
                        <Card.Body>
                            <p style={{ fontWeight: 'bolder', fontFamily: '楷体', fontSize: '5vw', color: 'rgb(6, 118, 138)' }}>{this.state.collegeDetails.cViewPointB}</p>
                            <p className='lv_artical'>{this.state.collegeDetails.contentB}</p>
                        </Card.Body>
                    </Card>
                </WingBlank>

                {/* 校园地图 */}
                <WhiteSpace />
                <br/>
                <p className='lv_title1'>校园地图</p>
                <br/>
                <WingBlank>
                    <br />
                    <WhiteSpace />
                    <div>
                        <Card>
                            <Card.Header
                                thumb={this.state.collegeDetails.cMap}
                                thumbStyle={{ width: '100%' }}
                            />
                        </Card>
                    </div>
                </WingBlank>
                <button style={{
                        width:'20vw', height:'5vh',
                        backgroundColor:'rgb(120,180,242)',
                        border:'none', 
                        borderRadius:'3vw',
                        marginTop:'3vh',
                        marginBottom:'1vh',
                        marginLeft:'40%'
                    }}
                    onClick={()=>{his.push('/home');window.location.reload()}}
                    >
                        返回主页
                    </button>
            </Fragment>
        )
    }
}
