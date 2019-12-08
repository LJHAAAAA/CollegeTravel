import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../index.css';
export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        return (
            <div>
                <NavBar
      mode="light"
      icon={<Icon type="left"  />}
      onLeftClick={() => console.log('onLeftClick')}>
    </NavBar><button className='wu_fabiao'>发表</button>
    <hr className='wu_line1'/>
    <div className='wu_pinglun_box'>
        <div className="wu_biaoqian">
        <select style={{width:'6em'}} value={this.state.value} onChange={this.handleChange}>
            <option value="">选择标签</option>
            <option value="#清华大学">#清华大学</option>
            <option value="#北京大学">#北京大学</option>
            <option value="#河北师范大学">#河北师范大学</option>
        </select>
        <div>{this.state.value}</div>
        </div>
            </div>
            </div>
            
        )
    }
}
