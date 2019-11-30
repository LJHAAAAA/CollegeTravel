import React from 'react';
import { TabBar } from 'antd-mobile';
import Mine from './Mine';


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'yellowTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="green"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:'22px'}} className='iconfont icon-Home'></i>
            }
            selectedIcon={<i style={{fontSize:'22px'}} className='iconfont icon-Home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            {/* {this.renderContent('Life')} */}
            bbbcc
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:'22px'}} className='iconfont icon-linggan'></i>
            }
            selectedIcon={<i style={{fontSize:'22px'}} className='iconfont icon-linggan'></i>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('Koubei')} */}
            aaa
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:'22px'}} className='iconfont icon-shangcheng'></i>
            }
            selectedIcon={<i style={{fontSize:'22px'}} className='iconfont icon-shangcheng'></i>
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* {this.renderContent('Friend')} */}
            cc
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:'22px'}} className='iconfont icon-wode'></i>
        }
        selectedIcon={<i style={{fontSize:'22px'}} className='iconfont icon-wode'></i>
        }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
            <Mine/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}