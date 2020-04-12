// pages/homePage/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        student: {
            name: '张三',
            age: 12,
        },
        value:'',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('page-onLoad')
        this.setData({word:getApp().globalData2.word})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('page-onReady')

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('page-onShow')

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('page-onHide')

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('page-onUnload')

    },

    // 这是自由数据
    student: {
        name: '李四',
        age: 15,
    },

    // 监听组件的事件
    onQxWeapon(e){
        console.log('e',e)
    }

})
