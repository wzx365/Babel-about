import React, { Component } from 'react'
import { Cascader } from 'antd'
import CITYS from './static/Citys.js'

const SelectCity = function (props) {
    const { onChange, className = '', tip, ...reset } = props
    return (
        <Cascader
            showSearch
            allowClear
            changeOnSelect
            options={CITYS}
            className={className}
            onChange={onChange}
            placeholder="请选择"
            {...reset}
        />
    )
}

export default class SelectCityComp extends Component {
    state = {
        value: [],
        citys: []
    }
    onCityChange = (...args) => {
        console.log(...args)
        this.setState({
            value: args[0],
            citys: args[1]
        })
    }
    render() {
        const { value, citys } = this.state 
        const selectCityOptions = {
            // value,
            onChange: this.onCityChange
        }
        return (
            <SelectCity 
                {...selectCityOptions}
            >
            </SelectCity>
        )
    }
}
