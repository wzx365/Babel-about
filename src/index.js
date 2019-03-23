import React from 'react'
import { render } from 'react-dom'
import App from './Hello'
import './static/iconfont/iconfont.css'

render(<App />, document.querySelector('#app'))
console.log('index')
require('./index.css')
require('./scss.scss')
require('./less.less')

if (module.hot) {
    module.hot.accept()
}
