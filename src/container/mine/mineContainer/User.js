import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default class User extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >关注人主页</NavBar>
                <p style={{
                    float:"left",
                    marginTop:'7vw',
                    marginLeft:'1vw'
                }}>手机号</p>.
                <input type='number' placeholder='输入手机号' style={{
                    width: '70vw',
                    height: '10vw',
                    borderRadius:'2vw',
                    padding: '3px 5px 3px 22px',
                    marginTop:'5vw',
                    marginLeft:'4vw',
                    float:'left'
                }}></input>
                <button style={{
                    height: '10vw',
                    width: '70vw',
                    borderRadius: '1vw',
                    backgroundColor: '#08c',
                    border: 'none',
                    padding: '1vw 2vw',
                    marginTop:'4vw',
                    marginLeft:'3vw',
                    fontSize: '4vw',
                    color: 'white'
                }}>点击获取验证码更改密码</button>
            </div>
        )
    }
}
