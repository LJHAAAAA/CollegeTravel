import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Topfix from './Init/Topfix';
import AppTab from './Init/AppTab';
import Reserve from './container/home/homeContainer/reserve/Reserve';
import ReserveTis from './container/home/homeContainer/reserve/ReserveTis';
import ReservePek from './container/home/homeContainer/reserve/ReservePek';
import ReserveXia from './container/home/homeContainer/reserve/ReserveXia';
import ReserveWu from './container/home/homeContainer/reserve/ReserveWu';
import ReserveElse from './container/home/homeContainer/reserve/ReserveElse';
import Help from './container/home/homeContainer/Help';
import Rank from './container/home/homeContainer/Rank';
import MyMap from './container/home/homeContainer/MyMap';
import Seek from './container/home/homeContainer/Seek';
import RaiderDetail from './container/radiers/RaiderDetail';
import AppRaiders from './container/radiers/AppRaiders';
import Shoucang from './container/community/tabs/Shoucang';
import Quanzi from './container/community/Quanzi'
import Mine from './container/mine/Mine';
import CollegeDetails from './container/home/homeContainer/CollegeDetails';
import Nothing from './container/Nothing';


export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* 初始登录注册 */}
                    <Route path="/" exact component={Topfix} />
                    {/* AppTab首页 */}
                    <Route path="/home" component={AppTab} />  
                    {/* 名校预约 */}
                    <Route path="/reserve" component={Reserve} />
                    <Route path="/Tsinghua" component={ReserveTis} />
                    <Route path="/Peking" component={ReservePek} />
                    <Route path="/Xia" component={ReserveXia} />
                    <Route path="/Wu" component={ReserveWu} />
                    <Route path="/Else" component={ReserveElse} />
                    <Route path='/Help' component={Help}/>
                    <Route path='/Rank' component={Rank}/>
                    <Route path='/MyMap' component={ MyMap } />
                    <Route path='/Seek' component={ Seek } />
                    <Route path='/RaiderDetail' component={ RaiderDetail}/>
                    <Route path='/shoucang' component={Shoucang}/>
                    <Route path='/fanhui' component={AppTab}/>
                    <Route path='/Mine' component={Mine}/>
                    <Route path='/collegeDetails/Nothing' component={Nothing}/>
                    <Route path='/collegeDetails/:name' component={CollegeDetails} />
                </Switch>
            </Router>
        )
    }
}
