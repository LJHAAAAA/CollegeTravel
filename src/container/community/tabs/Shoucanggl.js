import React, { Component } from 'react';
import '../../../index.css';
import { createBrowserHistory } from 'history';
import { WingBlank } from 'antd-mobile';
const his = createBrowserHistory();
// import { directive } from '@babel/types';

export default class Shoucanggl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    fanhui = () => {
        his.push('/MineTab');
        window.location.reload();
    }
    componentDidMount() {
        fetch("http://localhost:8080/getshoucanggl").then(res => res.json()).then(date => {
            console.log(date);
            this.setState({
                data: date
            })
            console.log(this.state.data)
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
            <div className='mu_shoucang'>
                {/* <div className='mu_shoucangtop'>
                    <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhui}></span>
                    <span className='mu_sc'>帖子收藏</span>
                </div> */}
                <div className='mu_lankuai' style={{height:'7vh',marginBottom:'1vh'}}>
                    <span className='iconfont icon-fanhui mu_fanhui' onClick={this.fanhui}></span>
                    <span className='iconfont icon-shequ2 mu_neirong' style={{marginTop:'2vh'}}>共{this.state.data.length}条内容</span>
                </div>

                {
                    this.state.data.map((item, idx) =>
                        // <div className='mu_remen' key={idx}>
                        //     <h4>{item.schoolName}</h4>

                        //     <div className='mu_user'>
                        //         {/* <img src={require('../images/m-2.png')} className='mu_usertou' alt='用户头像'></img> */}
                        //         <span className='mu_userming'>黄金鸡</span>
                        //     </div>
                        //     <div>{item.rTag}</div>
                        // </div>

                        <div className='feng_cover' >
                            <img style={{ width: '100vw' }} src={item.rImg} className='feng_cover_img' />
                            <div className='feng_title' onClick={this.showDetail}>
                                <p>{item.rTag}</p>
                                <p>《{item.rTitleP}</p>
                                <p className='feng_title2'>{item.rTitleSpan}</p><span>》</span>
                            </div>
                            <i onClick={() => { this.shoucang(idx) }} style={{ color: item.collection == 0 ? "white" : "#ffe700" }} className='feng_icon iconfont icon-collection'></i>
                        </div>
                    )

                }
            </div>
        )
    }
}