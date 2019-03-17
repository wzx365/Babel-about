class EventEmitter {
    constructor(){
        this.listeners = {}
    }
    on(type, fn) {
        if (!this.listeners[type]) {
            this.listeners[type] = []
        }
        this.listeners[type].push(fn)
    }
    emit(type, ...params) {
        if (this.listeners[type]) {
            this.listeners[type].forEach(fn => {
                fn(...params)
            })
        }
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
    }
}