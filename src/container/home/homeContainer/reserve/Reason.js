import React, { Component, Fragment } from 'react'

export default class Reason extends Component {
    render() {
        return (
            <Fragment>
                {/* why */}
                <div className='qin_why'>
                    <span className='qin_w1'>为什么</span>
                    <span className='qin_w2'>需要</span>
                    <span className='qin_w3'>预约</span>
                    <span className='qin_w4'>？</span>
                </div>
                <div className='qin_reason'>
                    <p className='qin_r1'>部分高校是重要的科学教研单位，不应成为广大游客随意游玩之地</p>
                    <p className='qin_r2'>大学的建立旨在培养高素质人才，预约有利于创造一个安静的学习环境</p>
                    <p className='qin_r3'>提前预约，出示证件，杜绝不明身份人员进入校内，从而降低安全隐患</p>
                    <p className='qin_r4'>维护学校正常的教学和秩序</p>
                    <p className='qin_r5'>在学校举办重大活动严禁出入内时，可以使用预约平台提前告知</p>
                </div>
            </Fragment>
        )
    }
}
