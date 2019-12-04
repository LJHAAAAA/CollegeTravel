import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from '../container/home/Home';
import RaiderDetail from '../container/radiers/RaiderDetail';
import AppRaiders from '../container/radiers/AppRaiders';
import Quanzi from '../container/community/Quanzi';
import Mine from '../container/mine/Mine'


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
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
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-home'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-home'></i>
              }
              title="首页"
              key="home"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              <Home/>
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
              }}
            >
              <AppRaiders/>

          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-1801xiaoxi'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-1801xiaoxi'></i>
              }
              title="圈子"
              key="Message"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
            >
              <Quanzi/>
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-my'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-my'></i>
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