import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
const his = createBrowserHistory();

export default class AppRaiders extends Component {
    constructor() {
        super();
        this.state = ({
            city: '',
            CollegeRaiders: '',
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
                }
            )
    }
    change = (e)=>{
        this.setState({
            collegeName:e.target.value
        })
    }
    keydown = (e) => {
        if (e.target.value && e.keyCode === 13) {
            this.click();
        }
    }
    click = ()=>{
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
        let whole= e.target.parentNode.innerHTML;
        let title1 = whole.split('</p>')[1].split('《')[1];
        let title2 = whole.split('</p>')[2].split('>')[1];
        his.push('/RaiderDetail?title1='+title1+'&title2='+title2);
        window.location.reload();
    } 
    
    // shoucang=(e)=>{
    //     console.log('1')
    //     if(this.state.data[e].collection == 0){
    //         this.state.data[e].collection = 1
    //     }else{
    //         this.state.data[e].collection = 0
    //     }
    //     console.log(this.state.data);
    //     let text = {
    //         data:this.state.data[e]
    //     }
        
    //     let send = JSON.stringify(text);
    //     fetch("http://localhost:8080/postgonglvshoucang",{
    //         method:'POST',
    //         headers:{"Content-Type":"application/json;charset=utf-8"},
    //         body:send
    //     }).then(res=>res.json())
    //     .then(
    //         (res)=>{console.log(res)}
    //     )
    // }

    render() {
        if(this.state.CollegeRaiders && this.state.CollegeRaiders[0].rImg){
            let raiders = this.state.CollegeRaiders;
        return (
            <Router>
                <div>
                    <div style={{ width: '100%', height: '14.2vw' }} className='feng_search'>
                        <div className='feng_setPosition'>
                            <img src='https://s2.ax1x.com/2019/12/03/QMAu0f.png' />
                            <p>{this.state.city}</p>
                        </div>
                        <div style={{position:'relative'}}>
                            <input type='text' placeholder="请输入大学名称" onChange={this.change} onKeyDown={this.keydown}/>
                            <img src={'https://s2.ax1x.com/2019/12/11/QsNxFx.png'} onClick={this.click} className='feng_jiantou'/>
                        </div>
                    </div>
                    <div className='feng_cover' >
                        <img src={raiders[0].rImg} className='feng_cover_img' />
                        <div className='feng_title' onClick={this.showDetail}>
                            <p>{raiders[0].rTag}</p>
                            <p>《{raiders[0].rTitleP}</p>
                            <p className='feng_title2'>{raiders[0].rTitleSpan}</p><span>》</span>
                        </div>
                        <div className='feng_icon'>
                            <img src='https://s2.ax1x.com/2019/12/04/QQszZ9.png' className='feng_cover_icon' />
                        </div>
                    </div>
                    <div className='feng_cover' >
                        <img src={raiders[1].rImg} className='feng_cover_img' />
                        <div className='feng_title' onClick={this.showDetail}>
                            <p>{raiders[1].rTag}</p>
                            <p>《{raiders[1].rTitleP}</p>
                            <p className='feng_title2'>{raiders[1].rTitleSpan}</p><span>》</span>
                        </div>
                        <div className='feng_icon'>
                            <img src='https://s2.ax1x.com/2019/12/04/QQszZ9.png' className='feng_cover_icon' />
                        </div>
                    </div>
                    <div className='feng_cover' >
                        <img src={raiders[2].rImg} className='feng_cover_img' />
                        <div className='feng_title' onClick={this.showDetail}>
                            <p>{raiders[2].rTag}</p>
                            <p>《{raiders[2].rTitleP}</p>
                            <p className='feng_title2'>{raiders[2].rTitleSpan}</p><span>》</span>
                        </div>
                        <div className='feng_icon'>
                            <img src='https://s2.ax1x.com/2019/12/04/QQszZ9.png' className='feng_cover_icon' />
                        </div>
                    </div> 
                </div>
            </Router>
        )
    }else{
        return(
            <div></div>
        )
    }
}
}
