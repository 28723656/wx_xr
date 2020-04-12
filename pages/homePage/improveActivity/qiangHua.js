// pages/homePage/improveActivity/qiangHua.js

import { getRandomNumberFromTo } from '../../../utils/mathUtil'
import { PERCENT_QH } from '../../../utils/constant/dnf/percent_const'
import myBehavior from '../../../behavior/homePage/weaponBehavior'

/*
字段的覆盖和组合规则
组件和它引用的 behavior 中可以包含同名的字段，对这些字段的处理方法如下：

1.如果有同名的属性或方法，组件本身的属性或方法会覆盖 behavior 中的属性或方法，如果引用了多个 behavior ，在定义段中靠后 behavior 中的属性或方法会覆盖靠前的属性或方法；
2.如果有同名的数据字段，如果数据是对象类型，会进行对象合并，如果是非对象类型则会进行相互覆盖；
3.生命周期函数不会相互覆盖，而是在对应触发时机被逐个调用。如果同一个 behavior 被一个组件多次引用，它定义的生命周期函数只会被执行一次。

 */

Component({
    /**
     * 组件的初始数据
     */
    data: {
        value: 0,  // 强化的数值

        topValue: 0,// 最高强化记录
        _money:0,  // 累计消耗金币数量 ,测试纯数据字段
    },
    behaviors: [myBehavior],
    options: {
        multipleSlots: true, // 在组件定义时的选项中启用多slot支持
        pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
    },
    // 用监控器
    observers: {
        'value' (value) {
            // 可以看出，value是变化之后的值
            console.log('value', value)
            const { topValue } = this.data
            this.setData({ topValue: this._getTopValue(value) })
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        student: {
            type: Object,
        },
        myBehaviorProperties: {
            type: String,
            value: '我是组件内部的properties',
        }
    },

    /**
     * 组件的方法列表
     */
    lifetimes: {
        created () {
            console.log('component-created')
        },
        attached () {
            console.log('component-attached')
        },
        ready () {
            console.log('component-ready')
        },
        moved () {
            console.log('component-moved')
        },
        detached () {
            console.log('component-detached')
        },
        error () {
            console.log('component-error')
        },
    },

    pageLifetimes: {
        show: function () {
            // 页面被展示
            console.log('component-page-show')
        },
        hide: function () {
            // 页面被隐藏
            console.log('component-page-hide')
        },
        resize: function (size) {
            // 页面尺寸变化
            console.log('component-page-resize')
        }
    },

    methods: {
        // 强化武器
        qhWeapon () {
            const { student } = this.properties
            const randomNumber = getRandomNumberFromTo(1, 10000)
            const { value,_money } = this.data
            this.setData({ _money: _money + value + 1 })
            // 如果这个数小于成功的数，代表成功了，value+1
            if (randomNumber <= PERCENT_QH[value + 1]) {
                this.setData({ value: value + 1 })
            } else {
                // 失败了
                if (value < 10) {
                    this._showFailToast()
                } else if (value < 12) {
                    this._showFailToast()
                    this.setData({ value: value - 3 })
                    let myEventDetail = {} // detail对象，提供给事件监听函数
                    let myEventOption = {} // 触发事件的选项
                    this.triggerEvent('qxWeapon', myEventDetail, myEventOption)
                } else {
                    this._showFailToast()
                    this.setData({ value: 0 })
                }
            }

        },

        _showFailToast () {
            wx.showToast({
                title: '强化失败！',
                icon: 'none',
                mask: 'true',
            })
        },

        _getTopValue (value) {
            const { topValue } = this.data
            return topValue > value ? topValue : value
        }

    },

})
