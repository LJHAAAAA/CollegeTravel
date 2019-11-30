import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import {Link} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";


export default class Follow extends Component {
    render() {
        return (
            <Router>
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >关注人主页</NavBar>
                <div style=
                    {{
                        width: '100%',
                        height: '30vw',
                        border: '1px solid red',
                    }}>
                    <img src='images/3.jpg' style=
                        {{
                            width: '24vw',
                            height: '24vw',
                            borderRadius: '24vw',
                            marginTop: '4vw',
                            marginLeft: '4vw',
                            float: 'left'
                        }} />{/* 头像，从数据库中获取 */}
                    <p style=
                        {{
                            fontSize: '4vw',
                            marginLeft: '36vw',
                            marginTop: '8vw'
                        }}>名字</p>{/* 名字，从数据库中获取 */}
                    <p style=
                        {{
                            fontSize: '3vw',
                            marginLeft: '40vw',
                        }}>个性签名</p>{/* 个性签名，从数据库中获取 */}
                </div>
                <div style=
                    {{
                        width: '100%',
                        height: '24vw',
                        border: '1px solid green',
                    }}>
                        <ul style=
                        {{
                            width: '99%',
                            height: '22vw',
                            float: 'left',
                            listStyleType: 'none',
                            marginLeft: '-3vw'
                        }}>
                            <li style=
                            {{
                                width: '50%',
                                marginTop: '2vw',
                                marginLeft:'-2vw',
                                height: '18vw',
                                borderRightStyle: 'solid',
                                borderRightColor: 'gery',
                                borderRightWidth: '0.5vw',
                                display: 'inline-block',
                            }}>
                                <Link to='guanzhu'
                                style={{
                                    color:'black',
                                    marginLeft:'15vw'
                                }}>关注</Link>
                                <p style={{
                                    color:'black',
                                    marginLeft:'15vw',
                                    marginTop:'2vw',
                                    fontSize:'6vw'
                                }}>12</p>
                        </li>
                        <li style=
                            {{
                                width: '50%',
                                marginTop: '2vw',
                                height: '18vw',
                                display: 'inline-block',
                            }}>
                                <Link to='guanzhu'
                                style={{
                                    color:'black',
                                    marginLeft:'19vw'
                                }}>关注</Link>
                                <p style={{
                                    color:'black',
                                    marginLeft:'19vw',
                                    marginTop:'2vw',
                                    fontSize:'6vw'
                                }}>12</p>
                        </li>
                        </ul>
                </div>
                <p style={{
                    width:'100%',
                    height:'12vw',
                    float:"left",
                    textAlign:'center'
                }}>他的帖子</p>
                 <div style={{
                    width: '100%',

                }}>
                    <ul style={{
                        width: '99%',
                        float: 'left',
                        listStyleType: 'none',
                        marginLeft: '-3vw',

                    }}>
                        <li style={{
                            width: '120%',
                            border: '1px solid black',
                            height: '30vw',
                            marginLeft: '-10vw'
                        }}>
                            <p style={{
                                fontWeight: 'bold',
                                marginLeft: '10vw',
                                marginTop: '1vw',
                                fontSize:'5vw'
                            }}>
                                标题
                            </p>
                            <img src='images/3.jpg' style=
                                {{
                                    width: '7vw',
                                    height: '7vw',
                                    borderRadius: '7vw',
                                    marginTop:'-5vw',
                                    marginLeft: '10vw',
                                }}></img>
                            <p style={{
                                marginTop: '-7vw',
                                fontSize:'3vw',
                                marginLeft: '20vw',
                            }}>
                                id
                            </p>
                            <p style={{
                                marginLeft: '10vw',
                                marginTop: '1vw',
                                fontSize:'2vw'
                            }}>内容...................</p>
                        </li>
                    </ul>

                </div>
            </div>
            </Router>
        )
    }
}


