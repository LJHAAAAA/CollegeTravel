import React from 'react';
import { TabBar } from 'antd-mobile';
// import Home from '../container/home/Home';
// import RaiderDetail from '../container/radiers/RaiderDetail';
// import AppRaiders from '../container/radiers/AppRaiders';
// import Quanzi from '../container/community/Quanzi';
import Mine from './Mine'
import Xietie from '../community/tabs/Xietie'

import { createBrowserHistory } from 'history'
const his = createBrowserHistory();

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'greenTab',
    };
  }
  componentDidMount(){
    console.log(this.props);
    fetch("http://localhost:8080/getusername"+this.props.location.search,{method:'GET'})
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3F51B5"
          barTintColor="white"
        >
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-shouye'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-shouye'></i>
              }
              title="首页"
              key="home"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
                his.push('/home');
                window.location.reload();
              }}
            >
              {/* <Home/> */}
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-bag'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-bag'></i>
              }
              title="攻略"
              key="idea"
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
                his.push('/RaidersTab');
                window.location.reload();
              }}
            >
              {/* <AppRaiders/> */}

          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px', color:'#4dc7f9' }} className='iconfont icon-tianjia3'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px', color:'#4dc7f9' }} className='iconfont icon-tianjia3'></i>
              }
              key="add"
              selected={this.state.selectedTab === 'orangeTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'orangeTab',
                });

              }}
            >
              <Xietie/>

          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-linggan'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-linggan'></i>
              }
              title="圈子"
              key="Message"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
                his.push('/communityTab');
                window.location.reload();
              }}
            >
              {/* <Quanzi/> */}
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-wode'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-wode'></i>
              }
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
               
              }}
            >
              <Mine/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}