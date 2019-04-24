class EventEmitter {
    constructor(){
        this.listeners = {}
    }
    on(type, fn) {
        if (!this.listeners[type]) {
            this.listeners[type] = []
        }
        this.listeners[type].push(fn)
        return this
    }
    emit(type, ...params) {
        if (this.listeners[type]) {
            this.listeners[type].forEach(fn => {
                fn(...params)
            })
        }
        return this
    }
    off(type, fn) {
        let args = arguments
        if (args.length === 0) {
            this.listeners = {}
        } else if (args.length === 1) {
            this.listeners[type] = []
        } else if (args.length === 2) {
            if (this.listeners[type]) {
                this.listeners[type] = this.listeners[type].filter(callback => callback !== fn)
            }
        }
        return this
    }
    once(type, fn) {
        let _this = this
        function foo(){
            fn.apply(_this, arguments)
            _this.off(type, foo)
        }
        foo.fn = fn
        this.on(type, foo)
        return this
    }
}

const ee = new EventEmitter()

ee.once('receiveResume', msg => {
    console.log('receiveResume', msg)
    console.log('receiveResume-this', this)
})

ee.emit('receiveResume', '这是小明的简历')

setTimeout(() => {
    ee.emit('receiveResume', '这是小明的简历2')
}, 1000)

ee.on('evaluate', res => {
    console.log('evaluate', res)
})

setTimeout(() => {
    ee.emit('evaluate', 'ok')
}, 2000)

export default ee