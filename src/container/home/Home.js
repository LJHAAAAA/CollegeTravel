import React, { Component, Fragment } from 'react'
import { Carousel, Flex, WhiteSpace } from 'antd-mobile';
import GetLocation from './homeContainer/GetLocation';
import {Link} from 'react-router-dom';
import {createBrowserHistory} from 'history'
const his = createBrowserHistory();


export default class Home extends Component {
    // Carousel
    constructor(){
        super();
        this.state= {
            data: ['1', '2'],
            imgHeight: 176,
            display:false,
            cityNow:'',
            city:['石家庄市','北京市','上海市','武汉市','厦门市','西安市','广州市'],
            cityData:[],
        }
    }

    cityClick=()=>{
        this.setState({
            display:!this.state.display
        })
    }

    cityListClick=(e)=>{
        this.setState({
            cityNow:e.target.innerHTML,
            display:!this.state.display
        })
        fetch('http://localhost:8080/getCity?cityNow='+e.target.innerHTML)
        .then(res=>res.json())
        .then(
            data=>{
                this.setState({
                    cityData:data
                })
            }
        )
    }
    
    detailClick = (e) => {
        let text = e.target.innerHTML;
        let schoolName = text.split('大学')[0] + "大学";
        console.log(schoolName);
        his.push('/collegeDetails/' + schoolName);
        window.location.reload();
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['Qugp0s', 'Qug97n'],
            });
        }, 100);

        fetch('http://restapi.amap.com/v3/ip?key=bfac02e9509fdd41a723a3f26d363663')
        .then((res) => (res.json()))
        .then((res) => {
            this.setState({
                cityNow:res.city
            })
        })

        fetch('http://localhost:8080/getCity?cityNow=石家庄市')
        .then(res=>res.json())
        .then(
            data=>{
                this.setState({
                    cityData:data
                })
                console.log(this.state.cityData);
            }
        )
    }

    render() {
        const divStyle = {
            display:this.state.display?'block':'none'
        };
        return (
            <Fragment>
                {/* 顶部搜索栏 */}
                <div style={{ width: '100%', height: '11vw', backgroundColor: 'rgb(93,108,193)',position:'fixed',zIndex:'999'}}>
                    <img src='https://s2.ax1x.com/2019/12/11/Qsiou9.png' id='qin_dingwei' alt="" style={{width:'6vw',height:'6vw'}}/>
                    <p className='qin_city' onClick={this.cityClick} style={{fontSize:'3vw'}}>[{this.state.cityNow}]</p>
                    <Link to='/Help'>
                    <img src='https://s2.ax1x.com/2019/12/02/QusPzQ.png' style={{backgroundColor:'rgba(0,0,0,0)', float:'right', height:'14vw', marginRight:'3vw',width:'10vw',height:'10vw'}} alt=""/>
                    </Link>
                    
                </div>
                {/* 空div */}
                <div style={{ width: '100%', height: '10vw'}}></div>
                {/* 左上角定位下拉框 */}
                <div className="Liu_city" style={divStyle}>
                    <ul>
                        {
                            this.state.city.map((item,idx) => (
                                <li key={idx} className="Liu_li" >
                                    <p onClick={this.cityListClick}>{item}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Carousel */}
                <div style={{ border: '0.2vw rgba(0,0,0,0) solid',backgroundColor:'#fff',height:'70vw',position:'relative'}}>
                    <Carousel
                        autoplay={true}
                        infinite
                        style={{height:'60vw',width:'95vw',margin:'0 auto',paddingTop:'3vw'}}
                    >   
                        {this.state.data.map(val => (
                            <img src={(`https://s2.ax1x.com/2019/12/02/${val}.jpg`)}
                                alt=""
                                style={{ width: '100%', height: '60vw', verticalAlign: 'top', clear:'both'}}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }} 
                            />
                            
                        ))}
                    </Carousel>
                    <div className='feng_lunbo'>热门大学一览<p>List of popular universities</p></div>
                </div>
                <div style={{backgroundColor:'red',borderTopLeftRadius:'4vw',borderTopRightRadius:'4vw'}}>
                    {/* 中间四个入口 */}
                <div className='qin_rukou'>
                    <Flex>
                        <Flex.Item>
                            <div className='feng_rukou'>
                                <img src={'https://s2.ax1x.com/2019/12/11/QrLAOS.png'} alt="" style={{width:'12vw',height:'12vw'}}/>
                                <p className='feng_rukou1'>名校搜索</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className='feng_rukou'>
                                <Link to="/reserve/reason"><img src={'https://s2.ax1x.com/2019/12/11/QrLNk9.png'} alt="" style={{width:'14vw',height:'14vw'}}/></Link>
                                <p className='feng_rukou2'>名校预约</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div  className='feng_rukou'>
                                <Link to='/MyMap'><img src={'https://s2.ax1x.com/2019/12/11/QrX4eS.png'} alt="" style={{width:'13vw',height:'13vw'}}/></Link>
                                 <p className='feng_rukou3'>精准地图</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div  className='feng_rukou'>
                                <Link to="/Rank"><img src={'https://s2.ax1x.com/2019/12/11/QrjJ0S.png'} alt="" style={{width:'12vw',height:'12vw'}}/></Link>
                                <p className='feng_rukou4' style={{color:'#000'}}>热点排行</p>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>

                {/* 地图 */}
                <div className='qin_map'>
                    <GetLocation />
                </div>

                {/* 周边热门高校 */}
                <div className='qin_hot'>
                    <p className='qin_title' style={{fontFamily:'微软雅黑'}}>周 边 热 门 高 校 🚩</p>
                    {
                        this.state.cityData.map((item,idx)=>(
                            <div className="Liu_hot" onClick={this.getDetails}>
                                <img src={item.collegePic} alt="" className="Liu_hot4"/>
                                <p className="Liu_hot1" onClick={this.detailClick1}>{item.collegeName}</p>
                                <p className="Liu_hot3" onClick={this.detailClick2}>{item.content}</p>                                 
                            </div>
                        ))
                    }
                </div>

                </div>
                
            </Fragment>
        )
    }
}

