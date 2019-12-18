import React, { Component,Fragment } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';
import AppTab from '../../Init/AppTab';
import { Accordion, List } from 'antd-mobile';
import { WingBlank, WhiteSpace } from 'antd-mobile';

export default class Mine extends Component {
    render() {
        return (
            <Fragment>
                
                <div>
                <NavBar
                    style={{zIndex:'999',backgroundColor:'rgb(77,199,249)',position:'fixed',width:'100vw'}}
                    mode="light"
                    >我的</NavBar>
                </div>
                <div><NavBar></NavBar></div>
                <div className='lv_headImg'>
                    <img style={{position:'relative',width:'100vw'}} src='https://s2.ax1x.com/2019/12/17/QoBhee.jpg'/>
                </div>
                <div className="lv_touxiang">
                    <img src="https://s2.ax1x.com/2019/12/17/QoDw1P.jpg"/>
                </div>
                {/* <div style={{backgroundColor:'red',width:'100vw',height:'5vh'}}>

                </div> */}
                <p style={{position:'relative',top:'-5vh',textAlign:'center'}}>typhoon</p>
                <WingBlank style={{position:'relative',top:'-3vh'}}>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="帖子收藏">
                            <List className="my-list">
                            <List.Item></List.Item>
                            <List.Item></List.Item>
                            <List.Item></List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="攻略收藏" className="pad">this is panel content2 or other</Accordion.Panel>
                        <Accordion.Panel header="修改资料" className="pad">
                        <div className='lv_input'>
                            <span>
                                昵称：
                            </span>
                            <input placeholder="昵称"></input>
                        </div>
                        <div className='lv_input'>
                            <span>
                                简介：
                            </span>
                            <input placeholder="简介"></input>
                        </div>
                        </Accordion.Panel>
                        <Accordion.Panel header="退出登录" className="pad">
                            
                        </Accordion.Panel>
                        </Accordion>
                    </div>
                </WingBlank>
                
               
                
                
                
            </Fragment>
        )
    }
}
