import React, { Component } from 'react'
import { statement } from '@babel/template'
import { WingBlank} from 'antd-mobile';
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();

export default class Xiangqing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            a:'',
            comment:[],
            mycomment:''
        }
        
    }
    componentDidMount(){
        console.log("1")
        console.log(this.props)
        fetch("http://localhost:8080/getxiangqing",{method:'GET',headers:{"Content-Type":"application/json;charset=utf-8"}})
        .then(res=>{return res.json()})
        .then((res)=>{
            console.log(res)
            this.setState({
                data:res.data
            })
        })
        
        fetch("http://localhost:8080/getcomment"+this.props.location.search,{method:'GET'})
        .then(res=>res.json())
        .then(
            (res)=>{
                //console.log(res)
                
                this.setState({
                    comment:res
                })
                //console.log(this.state.comment)
                this.state.comment.map((item,idx)=>{
                    //console.log(item,idx)
                })
            }
        )
    }

    commentChange=(e)=>{
        this.setState({
            a:e.target.value
        })
    }
    sComment = ()=>{
        this.setState({
            mycomment:this.state.a
        })
            let text = {
                title:this.state.data.title,
                comment:this.state.a
            }
            let send = JSON.stringify(text);
            if(text.comment === ''){
                alert("评论不能为空！")
            }else{
                fetch('http://localhost:8080/postcomment',{
                    method:'POST',
                    headers:{"Content-Type":"application/json;charset=utf-8"},
                    body:send
                }).then(res=>res.json())
                .then(
                    (res)=>{
                        //console.log(res)
                    }
                )
            } 
        
    }
    fanhui = ()=>{
        his.push('/home');
        window.location.reload();
    }
    render() {
        return (
            <div style={{ width: '100%', backgroundColor: '#fff' }} >
            <div className='mu_shoucangtop'>
                <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhui}></span>
            </div>
            <div className='mu_t'>
                <h2 className='mu_biaoti'>{this.state.data.title}</h2>
                <div className='mu_yhxx'>
                    <img src={'https://s2.ax1x.com/2019/12/03/QMALHf.png'} className='mu_usertou2' alt='用户头像'></img>
                    <p className='mu_userming2'>黄金鸡</p>
                    <p className='mu_riqi'>2019-12-10</p>
                </div>
                <div>
                    <WingBlank className='mu_zw'>{this.state.data.content}
                    </WingBlank>
                    <p className='mu_xue'>#清华大学</p>
                </div>
                <input type='text' placeholder="输入评论" onChange={this.commentChange}/>
                <button onClick={()=>{return this.sComment()}}>提交</button>
                {this.state.mycomment}
                <ul>
                        {
                            this.state.comment.map((item,idx)=>
                            <li key={idx}>
                                {item.context}
                            </li>)
                        }
                </ul>
            </div>
        </div>
        )
    }
}
