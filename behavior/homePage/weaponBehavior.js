export default Behavior({
    behaviors: [],
    properties: {
        myBehaviorProperties:{
            type: String,
            value: '我是behavior的properties',
        }
    },
    data: {
        myBehaviorData: '我是behavior的data'
    },
    attached () {
        console.log('我是behavior的attached')
    },
    methods: {
        myBehaviorMethod () {
            console.log('我是behavior的function')
        }
    }

})
