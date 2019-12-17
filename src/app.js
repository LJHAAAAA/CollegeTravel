import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**登录、注册 */
import Topfix from './Init/Topfix';

/**************************************首页 ******************************/
import AppTab from './Init/AppTab'
import Help from './container/home/homeContainer/Help';
import Seek from './container/home/homeContainer/Seek';
/**大学详情 */
import CollegeDetails from './container/home/homeContainer/CollegeDetails';
import NothingCollege from './container/NothingCollege';
/**名校预约 */
import Reserve from './container/home/homeContainer/reserve/Reserve';
import ReserveTis from './container/home/homeContainer/reserve/ReserveTis';
import ReservePek from './container/home/homeContainer/reserve/ReservePek';
import ReserveXia from './container/home/homeContainer/reserve/ReserveXia';
import ReserveWu from './container/home/homeContainer/reserve/ReserveWu';
import ReserveElse from './container/home/homeContainer/reserve/ReserveElse';
/**精确地图 */
import MyMap from './container/home/homeContainer/MyMap';
/**热点排行 */
import Rank from './container/home/homeContainer/Rank';

/*************************************攻略 *************************************/
import RaidersTab from './container/radiers/RaidersTab'
import RaiderDetail from './container/radiers/RaiderDetail';
import NothingRaider from './container/NothingRaider';

/*************************************圈子 *************************************/
import communityTab from './container/community/CommunityTab'
import Quanzi from './container/community/Quanzi'

/*************************************我的 *************************************/
import MineTab from './container/mine/MineTab'
import Mine from './container/mine/Mine';
import Shoucang from './container/community/tabs/Shoucang';
import Shoucanggl from './container/community/tabs/Shoucanggl';
import Xiangqing from './container/community/tabs/Xiangqing'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* 初始登录注册 */}
                    <Route path="/" exact component={Topfix} />
                    {/******************************** AppTab首页 *******************************/}
                    <Route path="/home" exact component={AppTab} />
                    {/* 使用帮助 */}
                    <Route path='/home/help' component={Help} />
                    {/* 名校搜索  */}
                    <Route path='/home/seek' exact component={Seek} />
                    <Route path='/home/seek/nothingCollege' component={NothingCollege} />
                    <Route path='/home/seek/:name' component={CollegeDetails} />
                    {/* 名校预约 */}
                    <Route path="/home/reserve" component={Reserve} />
                    <Route path="/Tsinghua" component={ReserveTis} />
                    <Route path="/Peking" component={ReservePek} />
                    <Route path="/Xia" component={ReserveXia} />
                    <Route path="/Wu" component={ReserveWu} />
                    <Route path="/Else" component={ReserveElse} />                   
                    {/* 精确地图 */}
                    <Route path='/home/mymap' component={MyMap} />
                    {/* 热点排行 */}
                    <Route path='/home/rank' component={Rank} />

                    {/************************************** 攻略 ********************************/}
                    <Route path="/RaidersTab" exact component={RaidersTab} />
                    <Route path='/RaidersTab/RaiderDetail' component={RaiderDetail} />
                    <Route path='/RaidersTab/NothingRaider' component={NothingRaider} />

                    {/************************************** 圈子 *********************************/}
                    <Route path="/communityTab" component={communityTab} />
                    
                    {/************************************** 我的 *********************************/}
                    <Route path="/MineTab" component={MineTab} />
                    <Route path='/Mine' component={Mine} />
                    <Route path='/tiezi/shoucang' component={Shoucang} />
                    <Route path='/gonglue/shoucang' component={Shoucanggl} />
                    <Route path='/fanhui' component={AppTab} />
                    

                    {/* <Route path="/xietie" component={Xietie}/> */}
                    <Route path="/tiezi/xiangqing" component={Xiangqing} />
                    <Route path="/fanhuiQ" component={Quanzi} />
                    <Route path="/fanhuiW" component={AppTab} />



                </Switch>
            </Router>
        )
    }
}
