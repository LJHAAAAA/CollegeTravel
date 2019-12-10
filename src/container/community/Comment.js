import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

import '../../index.css';
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
      mode="light">
    </NavBar><button className='wu_fabiao'>发表</button>
    <hr className='wu_line1'/>
    <div className='wu_pinglun_box'>
        <div className="wu_biaoqian">
        <textarea style={{float:'left',width:'98.5vw',height:'23vh',marginTop:'-14.1em',marginLeft:'-1em',backgroundColor:'rgb(0, 195, 255)', borderStyle:'none'}} placeholder="分享此刻的想法吧..."></textarea>
        <select style={{width:'25vw',borderRadius:'8px'}} value={this.state.value} onChange={this.handleChange}>
            <option value="">选择标签</option>
            <option value="#清华大学">清华大学</option>
            <option value="#北京大学">北京大学</option>
            <option value="#中山大学">中山大学</option>
            <option value="#厦门大学">夏门大学</option>
            <option value="#同济大学">同济大学</option>
            <option value="#华侨大学">华侨大学</option>
            <option value="#暨南大学">暨南大学</option>
            <option value="#武汉大学">武汉大学</option>
            <option value="#西北工业大学">西北工业大学</option>
            <option value="#西安交通大学">西安交通大学</option>
            <option value="#河北师范大学">河北师范大学</option>
            <option value="#河北医科大学">河北医科大学</option>
            
        </select>
        <div>{this.state.value}</div>
        </div>
            </div>
            </div>
            
        )
    }
}
