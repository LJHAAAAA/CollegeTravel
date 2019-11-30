import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';


export default class Favorites extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >收藏夹</NavBar>
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
        )
    }
}
