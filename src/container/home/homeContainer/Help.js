import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../../../index.css';
import { createBrowserHistory } from 'history'
const his = createBrowserHistory();

export default class Help extends Component {
    render() {
        return (
            <div>
                <NavBar
      mode="light"
      icon={<Icon type="left"  />}
      onLeftClick={() => {
          console.log('onLeftClick');
          his.push('/home');
          window.location.reload()
      }}
    >使用帮助</NavBar>
    <div>
        <p className="wu_ziti01">Q:什么是名校预约❔</p>
        <p className="wu_ziti02">A:部分高校需要提前申请预约，预约成功后才能去该院校参观游玩，我们能够为您解决这一需求。</p>
        <p className="wu_ziti01">Q:什么是攻略❔</p>
        <p className="wu_ziti02">A:攻略就是游客想去玩什么地方，包括景点、交通、
        饮食、住宿等各方面的充分资讯攻略，为了可以体
        验的更好，完善自己的出游计划</p>
        <p className="wu_ziti01">Q:什么是热点排行❔</p>
        <p className="wu_ziti02">A:热点排行里收集了全国各个大学风景热度的排行，
        排行由用户决定，受用户欢迎度高的大学将排在热
        点排行的前列。</p>
        <p className="wu_ziti01">Q:圈子的作用是什么❔</p>
        <p className="wu_ziti02">A:在圈子里你可以与不同地区、不同高校的小伙伴们
        讨论各种各样的热点话题。</p>
        <p className="wu_ziti01">Q:精确地图的作用是什么❔</p>
        <p className="wu_ziti02">A:精确地图可以定位到你当前的精确位置，并且能够
        查看景点所在的位置。</p>
    </div>
            </div>
        )
    }
}
