import React, { Component } from 'react'
export default class Todoinput extends Component {
    state = {
        InputValue : "",//输入框输入值
      };
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
            this.setState({
              InputValue : ""
            })
        }
    }
    handleGetInputValue = (e) => {
        this.setState({
          InputValue : e.target.value,
        })
      }
    clickInput = ()=>{
        const {InputValue} = this.state;
        this.props.add(InputValue);
    }
  render() {
    return (
        <div>
            <div className='feng_comment'>
                <input placeholder='说说你的想法……' onKeyDown={this.handleInput} value={this.state.InputValue} onChange={this.handleGetInputValue}/>
                <div className='iconfont icon-pinglun' onClick={this.clickInput}></div>
                <div className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-'></div>
            </div>
        </div>
    );
  }
}
