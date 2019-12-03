import React, { Component } from 'react';
import { Map } from 'react-amap';

export default class GetLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: { longitude: 114.522920, latitude: 37.997690 },
        }
    }
    componentDidMount = () => {
        this.getLocation()
    }
    getLocation = () => {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        var success = (pos) => {
            var crd = pos.coords;
            this.setState({
                center: {
                    longitude: crd.longitude,
                    latitude: crd.latitude
                }
            })
            console.log(crd.longitude, crd.latitude)
        };
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };
        window.navigator.geolocation.getCurrentPosition(success, error, options);
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
            <div style={{ width: '100%', height: '90vw' }}>
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
        )
    }
}