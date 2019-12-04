import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import {createBrowserHistory} from 'history'
const his = createBrowserHistory();

export default class ReserveXia extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    inputHandle=(e)=>{
        if(e.keyCode === 13){
            let s = e.target.value.length;
            if(s === 0){
                alert("请输入要搜索的大学的名称");
            }
            else if(s > 0 && s < 4){
                alert("请输入正确的大学名称");
            }
            else{
                if(e.target.value === "清华大学"){
                    his.push("/Tsinghua");
                    window.location.reload();
                }
                else if(e.target.value === "北京大学"){
                    his.push("/Peking");
                    window.location.reload();
                }
                else if(e.target.value === "厦门大学"){
                    his.push("/Xia");
                    window.location.reload();
                }
                else if(e.target.value === "武汉大学"){
                    his.push("/Wu");
                    window.location.reload();
                }
                else{
                    his.push("/Else");
                    window.location.reload();
                }
            }
        }
    }
    render() {
        return (
            <Fragment>
                {/* 上半部分搜索学校 */}
                <div className='qin_back' id='qin_reserve'>
                    <div className="liu_cover">
                        <Link to="/home"><div className='iconfont icon-fanhui' id='liu_fanhui'></div></Link>
                        <input onKeyDown = {this.inputHandle} placeholder='&nbsp;&nbsp;&nbsp;&nbsp;请输入想预约的高校' ref={ref => this.autoFocusInst = ref} className="liu_search"/>
                    </div>
                </div>
                <div className="wu_Pek_box">
                    <div className="wu_Pek_box1">
                        <img style={{width:'11vw',marginTop:'2em',marginLeft:'1em',float:'left'}} src={'https://s2.ax1x.com/2019/12/03/QMcHt1.png'} alt="" />
                        <p className="wu_Pek_p">厦门大学</p>
                        <div className="wu_Pek_line"></div>
                        <p className="wu_Pek_p1">此高校需要预约，并仅限于非工作日<br/>
                        参观。您可以使用微信扫描下方二维<br/>码,关注"U厦大"微信公众号进行预约</p>
                       
                        <img style={{width:'40vw',float:'left',marginLeft:'7.5em',marginTop:'3em'}} src={'https://s2.ax1x.com/2019/12/04/QldbpF.jpg'} alt=""/>
                        <img style={{width:'50vw',float:'right'}} src={'https://s2.ax1x.com/2019/12/03/QMIzB6.png'} alt=""/>
                    </div>
                </div> 
            </Fragment>
        )
    }
}
