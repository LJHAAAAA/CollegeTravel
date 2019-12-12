import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Admin from './Admin';
import User from './User';
import College from './College';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            click1:true,
            click2:false,
            click3:false,
            click4:false,
            click5:false,
            username:this.props.location.pathname.split('/')[3]
        }
    }
    onClick1=()=>{
        this.setState({
            click1:true,
            click2:false,
            click3:false,
            click4:false,
            click5:false
        })
    }
    onClick2=()=>{
        this.setState({
            click1:false,
            click2:true,
            click3:false,
            click4:false,
            click5:false
        })
    }
    onClick3=()=>{
        this.setState({
            click1:false,
            click2:false,
            click3:true,
            click4:false,
            click5:false
        })
    }
    onClick4=()=>{
        this.setState({
            click1:false,
            click2:false,
            click3:false,
            click4:true,
            click5:false
        })
    }
    onClick5=()=>{
        this.setState({
            click1:false,
            click2:false,
            click3:false,
            click4:false,
            click5:true
        })
    }

    componentDidMount(){
        this.timer = setInterval(() => {
             this.setState({ date: new Date() }) 
        }, 1000);
    }
    componentWillMount(){
        clearInterval(this.timer);
        this.timer = null;
    }
    render() {
        const S1 = {
            color:this.state.click1?"rgb(13, 147, 102)":"black"
        }
        const S2 = {
            color:this.state.click2?"rgb(13, 147, 102)":"black"
        }
        const S3 = {
            color:this.state.click3?"rgb(13, 147, 102)":"black"
        }
        const S4 = {
            color:this.state.click4?"rgb(13, 147, 102)":"black"
        }
        const S5 = {
            color:this.state.click5?"rgb(13, 147, 102)":"black"
        }
        let t = this.state.date;
        let year = t.getFullYear();
        let month = t.getMonth() + 1;
        let day = t.getDay() + 1;
        let hour = ((t.getHours() < 10) ? "0" : "") + t.getHours();
        let minutes = ((t.getMinutes() < 10) ? "0" : "") + t.getMinutes();
        let seconds = ((t.getSeconds() < 10) ? "0" : "") + t.getSeconds();
        let ifnoon = ' ' + ((t.getHours() < 12) ? "上午" : "下午") + ' ';
        return (
            <div className="liu_home">
                <p className="liu_p1">高 校 畅 游 通 后 台 管 理 系 统</p>
                <p className="liu_p2">{year + '/' + month + '/' + day + ifnoon + hour + ':' + minutes + ':' + seconds}</p>
                <p className="liu_p3">欢迎您~ Alassea lome</p>
                {/* 主内容模板 */}
                <div className="liu_home1">
                    {/* 左侧功能选择 */}
                    <div className="liu_home2">
                        <div className="liu_home3">
                            <Link to={`/home/admin/${this.state.username}`}><p className="liu_p5" style={S1} onClick={this.onClick1}>管理员信息</p></Link>
                        </div>
                        <div className="liu_home3">
                            <Link to="/home/user"><p className="liu_p5" style={S2} onClick={this.onClick2}>用户信息</p></Link>
                        </div>
                        <div className="liu_home3">
                            <Link to="/home/college"><p className="liu_p5" style={S3} onClick={this.onClick3}>高校信息</p></Link>
                        </div>
                        <div className="liu_home3">
                            <Link to="/home/message"><p className="liu_p5" style={S4} onClick={this.onClick4}>帖子信息</p></Link>
                        </div>
                        <div className="liu_home3">
                            <Link><p className="liu_p5" style={S5} onClick={this.onClick5}>志愿者信息</p></Link>
                        </div>
                    </div>
                    {/* 右侧具体展示 */}
                    <div className="liu_r">
                        <Route path="/home/admin/:name" exact component={Admin}></Route>
                        <Route path="/home/user" component={User}></Route>
                        <Route path="/home/college" component={College}/>
                    </div>
                </div>
            </div>
        )
    }
}
