import React, { Component, Fragment } from 'react';
import { Tabs } from 'antd-mobile';
import { Map } from 'react-amap';
import '../index.css';
import GetLocation from './GetLocation.js';

// 114.517366,37.994022
// 河北师范大学
export default class MyMap extends Component {
    constructor() {
        super();
        this.state = {
            center: { longitude: 114.517366, latitude: 37.994022 },
            school: ''
        }
    }
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    change = (e) => {
        this.setState({
            school: this.autoFocusInst.value
        })
    }
    keydown = (e) => {
        if (e.target.value && e.keyCode === 13) {
            this.click()
        }
    }
    click = (e) => {
        let address = this.state.school;
        fetch('https://restapi.amap.com/v3/geocode/geo?key=bfac02e9509fdd41a723a3f26d363663&address=' + address)
            .then((res) => {
                if (res.ok) {
                    res.json().then(data => {
                        if (data.status == 1) {
                            data = data.geocodes[0].location.split(',');
                            console.log(data);
                            this.setState({
                                center: {
                                    longitude: Number(data[0]),
                                    latitude: Number(data[1]),
                                }
                            })
                        }
                    })
                }
            });
    }
    render() {
        const plugins = [
            'MapType',
            'Scale',
            'OverView',
            'ControlBar', // v1.1.0 新增
            {
                name: 'ToolBar',
                options: {
                    visible: true,  // 不设置该属性默认就是 true
                    onCreated(ins) {
                        console.log(ins);
                    },
                },
            }
        ]
        return (
            <Fragment>
                {/* 上半部分搜索学校 */}
                <div className='qin_back'>
                    <div className='iconfont icon-fanhui' id='qin_fanhui'></div>
                    <input placeholder='&nbsp;河北师范大学' ref={ref => this.autoFocusInst = ref} onChange={this.change} onKeyDown={this.keydown} />
                    <div className='iconfont icon-sousuo' id='qin_MapSearch' onClick={this.click}></div>
                </div>

                {/* 下半部分地图 */}
                <div>
                    <Tabs tabs={[{ title: '我的位置' }, { title: '校内精确地点' }]} initialPage={0} animated={false} useOnPan={false}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vw', backgroundColor: '#fff' }}>
                            <GetLocation />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vw', backgroundColor: '#fff' }}>
                            <Map
                                scrollWheel={true}
                                plugins={plugins}
                                zoom={17}
                                scrollWheel={true}
                                mapStyle={'normal'}
                                center={this.state.center}
                                viewMode={'3D'}
                                amapkey={'bfac02e9509fdd41a723a3f26d363663'}
                            />
                        </div>
                    </Tabs>
                </div>
            </Fragment>
        )
    }
}
