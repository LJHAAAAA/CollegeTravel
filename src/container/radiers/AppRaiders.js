import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();

export default class AppRaiders extends Component {
    constructor() {
        super();
        this.state = ({
            city: '',
            CollegeRaiders: [],
            collegeName: '武汉大学',
            data:[]
        })
    }
    componentDidMount() {
        fetch('http://restapi.amap.com/v3/ip?key=bfac02e9509fdd41a723a3f26d363663')
            .then((res) => (res.json()))
            .then((res) => {
                this.setState({
                    city: res.city
                })
            })
        fetch('http://localhost:8080/getCollegeRaiders?collegeName=' + this.state.collegeName)
            .then(res => res.json())
            .then(
                data => {
                    this.setState({
                        CollegeRaiders: data
                    })
                    console.log(this.state.CollegeRaiders)
                    this.state.CollegeRaiders.map((item, idx) => {
                        console.log(item, idx)
                    })
                }
            )

    }
    shoucang=(e) =>{
        if(this.state.CollegeRaiders[e].collection == 0){
            this.state.CollegeRaiders[e].collection = 1
            
        }else{
            this.state.CollegeRaiders[e].collection = 0
            
        }
        console.log(this.state.CollegeRaiders[e]);
        
        fetch("http://localhost:8080/postglsc",{
            method:'POST',
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body: JSON.stringify(this.state.CollegeRaiders[e])
        }).then(res=>res.json())
        .then(
            (res)=>{
                this.setState({
                    CollegeRaiders:res
                })
            }
        )
    }
    change = (e) => {
        this.setState({
            collegeName: e.target.value
        })
    }
    keydown = (e) => {
        if (e.target.value && e.keyCode === 13) {
            this.click();
        }
    }
    click = () => {
        console.log("1")
        fetch('http://localhost:8080/getCollegeRaiders?collegeName=' + this.state.collegeName)
            .then(res => res.json())
            .then(
                data => {
                    this.setState({
                        CollegeRaiders: data
                    })

                }
            )
    }
    showDetail = (e) => {
        let whole = e.target.parentNode.innerHTML;
        let title1 = whole.split('</p>')[1].split('《')[1];
        let title2 = whole.split('</p>')[2].split('>')[1];
        his.push('/RaidersTab/RaiderDetail?title1=' + title1 + '&title2=' + title2);
        window.location.reload();
    }

    render() {

        return (
            <Router>
                <div>
                    <div style={{ width: '100%', height: '14.2vw' }} className='feng_search'>
                        <div className='feng_setPosition'>
                            <img src='https://s2.ax1x.com/2019/12/03/QMAu0f.png' />
                            <p>{this.state.city}</p>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input type='text' placeholder="请输入大学名称" onChange={this.change} onKeyDown={this.keydown} />
                            <img src={'https://s2.ax1x.com/2019/12/11/QsNxFx.png'} onClick={this.click} className='feng_jiantou' />
                        </div>
                    </div>

                    {
                        this.state.CollegeRaiders.map((item, idx) => {
                            return (
                                <div className='feng_cover' >
                                    <img src={item.rImg} className='feng_cover_img' />
                                    <div className='feng_title' onClick={this.showDetail}>
                                        <p>{item.rTag}</p>
                                        <p>《{item.rTitleP}</p>
                                        <p className='feng_title2'>{item.rTitleSpan}</p><span>》</span>
                                    </div>
                                    <i onClick={()=>{this.shoucang(idx)}} style={{color: item.collection==0 ? "white" : "#ffe700"}} className='feng_icon iconfont icon-collection'></i>
                                </div>
                            )
                        })
                    }
                </div>
            </Router>
        )
    }

}
