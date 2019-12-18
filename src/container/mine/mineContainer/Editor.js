import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import React, { Component, Fragment } from 'react'

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username: '',
            signature: '',
            Phone: ''
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:8080/getEditor')
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        data: res,
                        username: res.username,
                        signature: res.Signature,
                        Phone: res.Phone
                    })
                }
            )
    }
    userchange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    sigchange = (e) => {
        this.setState({
            signature: e.target.value
        })
    }
    phonechange = (e) => {
        this.setState({
            Phone: e.target.value
        })
    }
    click = () => {
        let obj = { username: this.state.username, signature: this.state.signature, Phone: this.state.Phone };
        let send = JSON.stringify(obj);
        fetch("http://localhost:8080/changeEditor", {
            method: 'POST',
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: send
        }).then(res => res.json())
            .then(
                (res) => {
                    if (res.success) {
                        alert('编辑成功！')
                    } else {
                        alert('编辑失败！')
                    }
                }
            )
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
                <div>
                    <NavBar
                        mode="light"
                        icon={<Link to="/MineTab"><Icon type="left" /></Link>}
                    >
                        编辑资料
                    </NavBar>
                </div>
                <WhiteSpace />
                <WingBlank>
                    <div className='qinEditorContent'>
                        <p>用户名：</p>
                        <input defaultValue={this.state.data.username} onChange={this.userchange}></input>
                        <p>个性签名：</p>
                        <input defaultValue={this.state.data.Signature} onChange={this.sigchange}></input>
                        <p>更改绑定手机号：</p>
                        <input defaultValue={this.state.data.Phone} onChange={this.phonechange}></input>
                        <button onClick={this.click}>提交</button>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
