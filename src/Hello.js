import React, { Component, Fragment } from 'react'
import styles from './scss.scss'
console.log(styles, 'styles')

function H(props) {
    let { msg } = props
    return <h1 className="hi">{msg}</h1>
}

export default class Hello extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Fragment>
                <H msg={'hello, babel...'}/>
                <div className={styles.pack}>hello...webpack</div>
                <i className="iconfont icon-lvyou"/>
            </Fragment>
        )
    }
}
