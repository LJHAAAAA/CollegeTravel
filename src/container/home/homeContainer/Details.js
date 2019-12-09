import React, { Component,Fragment } from 'react'
import { NavBar, Icon, WingBlank, WhiteSpace, Grid } from 'antd-mobile'
import {Link} from 'react-router-dom'
import { Card } from 'antd-mobile';
import {createBrowserHistory} from 'history'
const his = createBrowserHistory()

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));

export default class Details extends Component {
    render() {
        return (
            <Fragment className='lv_total'>
                <div>
                    <NavBar
                        mode='light'
                        icon={
                            <Link to='/home'>
                                <Icon type='left' />
                            </Link>
                        }
                    >
                        <span>河北师范大学</span>
                    </NavBar>
                </div>
                <div className='lv_middle'>
                    <div className='lv_middle_child'>
                        <WhiteSpace/>
                        {/* 上下留白 WhiteSpace */}
                        {/* 左右留白 WingBlank */}
                        <WingBlank >
                            <div className='lv_middle_name'>
                                <img src='https://s2.ax1x.com/2019/12/04/QlJ7Wj.png'/>
                            </div> 
                            <div className='lv_line'></div>

                                <p className='lv_title'>怀天下，求真知</p>
                                <p className='lv_artical'>
                                    &nbsp;&nbsp;&nbsp;&nbsp;河北师范大学（Hebei Normal University）位于河北省会石家庄市，
                                    由中华人民共和国教育部与河北省人民政府共建，
                                    是一所具有百年历史和光荣传统的省属重点大学，
                                    河北省重点支持的国家一流大学建设一层次高校，
                                    是中国较早成立、规模较大的高等师范院校之一，
                                    入选卓越教师培养计划、中西部高校基础能力建设工程、
                                    国家建设高水平大学公派研究生项目、国家“特色重点学科项目”建设高校、
                                    新工科研究与实践项目、国家级大学生创新创业训练计划、
                                    全国深化创新创业教育改革示范高校、教育部来华留学示范基地建设高校。
                                </p>
                        </WingBlank>
                    </div>  
                </div>
                {/* 校园风光 */}
                <div>
                    <WhiteSpace/>
                    <WingBlank>
                        <h className='lv_title1'>校园风光</h>
                        <br/>
                        <WhiteSpace/>
                        <br/>
                        <div>
                            <Card>
                                <Card.Header
                                    thumb='https://s2.ax1x.com/2019/12/03/QMagKI.jpg'
                                    thumbStyle={{width:'100%'}}
                                />
                                <Card.Body>
                                <p className='lv_artical'>未名湖位于北京大学校园中北部，是北京大学校园内最大的人工湖。
                            湖南部有翻尾石鱼雕塑，中央有湖心岛，
                            由桥与北岸相通。湖心岛的南端有一个石舫。
                            湖南岸上有钟亭、临湖轩、花神庙和埃德加·斯诺墓，
                            东岸有博雅塔。是北京大学的标志景观之一。</p>
                                </Card.Body>
                            </Card>
                            <WhiteSpace/>
                            <Card>
                                <Card.Header
                                    thumb='https://s2.ax1x.com/2019/12/03/QMagKI.jpg'
                                    thumbStyle={{width:'100%'}}
                                />
                                <Card.Body>
                                <p className='lv_artical'>未名湖位于北京大学校园中北部，是北京大学校园内最大的人工湖。
                            湖南部有翻尾石鱼雕塑，中央有湖心岛，
                            由桥与北岸相通。湖心岛的南端有一个石舫。
                            湖南岸上有钟亭、临湖轩、花神庙和埃德加·斯诺墓，
                            东岸有博雅塔。是北京大学的标志景观之一。</p>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </WingBlank>
                </div>
                {/* 校园地图 */}
                <WhiteSpace/>
                <div>
                    <WingBlank>
                        <h className='lv_title1'>校园地图</h>
                        <br/>
                        <WhiteSpace/>
                            <div>
                                <Card>
                                    <Card.Header
                                        thumb='https://s2.ax1x.com/2019/12/09/QwGJzt.jpg'
                                        thumbStyle={{width:'100%'}}
                                    
                                    />

                                </Card>
                            </div>
                        </WingBlank>
                </div>

                

                
            </Fragment>
        )
    }
}
