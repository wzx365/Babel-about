import React from 'react'
import { render } from 'react-dom'
import App from './Hello'
import SelectCitys from './SelectCitys'
import './static/iconfont/iconfont.css'

render(<SelectCitys />, document.querySelector('#app'))
console.log('index')
require('./index.css')
require('./scss.scss')
require('./less.less')
import('./compose')

if (module.hot) {
    module.hot.accept()
}
