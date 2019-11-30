import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {BrowserRouter as Router,Route} from "react-router-dom";

export default class Mine extends Component {
    render() {
        return (
            <Router>
            <div>
                <div style=
                    {{
                        width: '100%',
                        fontSize: '5vw',
                        textAlign: 'center',
                        
                        paddingTop: '0.5em'
                    }}>
                    我的
                </div>
                <div style=
                    {{
                        width: '100%',
                        height: '30vw',
                        
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
                                width: '33%',
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
                                    marginLeft:'7vw'
                                }}>关注</Link>
                                <p style={{
                                    color:'black',
                                    marginLeft:'7vw',
                                    marginTop:'2vw',
                                    fontSize:'6vw'
                                }}>12</p>
                        </li>
                        <li style=
                            {{
                                width: '33%',
                                height: '18vw',
                                borderRightStyle: 'solid',
                                borderRightColor: 'gray',
                                borderRightWidth: '0.5vw',
                                display: 'inline-block'
                            }}>
                                <Link to='shoucangjia'
                                style={{
                                    color:'black',
                                    marginLeft:'7vw'
                                }}>收藏夹</Link>
                                <p style={{
                                    color:'black',
                                    marginLeft:'10vw',
                                    marginTop:'2vw',
                                    fontSize:'6vw'
                                }}>12</p>
                        </li>
                        <li style=
                            {{
                                width: '33%',
                                height: '18vw',
                                display: 'inline-block'
                            }}>
                                <Link to='lishi'
                                style={{
                                    color:'black',
                                    marginLeft:'15vw'
                                }}>历史</Link>
                                <p style={{
                                    color:'black',
                                    marginLeft:'15vw',
                                    marginTop:'2vw',
                                    fontSize:'6vw'
                                }}>12</p>
                        </li>
                    </ul>
                </div>
                <div style=
                    {{
                        width: '100%',
                        height: '100vw',
                        
                    }}>
                    <ul className='ID' style=
                        {{
                            width: '99%',
                            height: '95vw',
                            float: 'left',
                            listStyleType: 'none',
                            marginLeft: '0.5vw'
                        }}>
                        <li style=
                            {{
                                width: '130%',
                                height: '18vw',
                                display: 'inline-block',
                                borderTop:'1px solid gray',
                                borderBottom:'1px solid gray',
                                marginLeft:'-13vw',
                                paddingLeft:'20vw',
                                paddingTop:'5vw'
                            }}>
                                <Link to='/userID'
                                style={{
                                    color:'black',
                                    fontSize:'4vw'
                                }}
                                >账号与安全
                                </Link>
                            </li>
                        <li style=
                            {{
                                width: '130%',
                                height: '18vw',
                                display: 'inline-block',
                                borderBottom:'1px solid gray',
                                marginLeft:'-13vw',
                                paddingLeft:'20vw',
                                paddingTop:'5vw'
                            }}>
                                <Link to='/userID'
                                style={{
                                    color:'black',
                                    fontSize:'4vw'
                                }}
                                >账号与安全</Link>
                            </li>
                        <li style=
                            {{
                                width: '120%',
                                height: '18vw',
                                display: 'inline-block',
                                borderBottom:'1px solid gray',
                                marginLeft:'-13vw',
                                paddingLeft:'20vw',
                                paddingTop:'5vw'
                            }}>
                                <Link to='/userID'
                                style={{
                                    color:'black',
                                    fontSize:'4vw'
                                }}>账号与安全</Link>
                            </li>
                        <li style=
                            {{
                                width: '120%',
                                height: '18vw',
                                display: 'inline-block',
                                borderBottom:'1px solid gray',
                                marginLeft:'-13vw',
                                paddingLeft:'20vw',
                                paddingTop:'5vw'
                            }}>
                                <Link to='/userID'
                                style={{
                                    color:'black',
                                    fontSize:'4vw'
                                }}>账号与安全</Link>
                            </li>
                        <li style=
                            {{
                                width: '120%',
                                height: '18vw',
                                display: 'inline-block',
                                borderBottom:'1px solid gray',
                                marginLeft:'-13vw',
                                paddingLeft:'20vw',
                                paddingTop:'5vw',
                                
                            }}>
                                <Link to='/userID'
                                style={{
                                    color:'black',
                                    fontSize:'4vw'
                                }}>账号与安全</Link>
                            </li>
                    </ul>
                </div>
            </div>
            </Router>
        )
    }
}
