import React, { Component, Fragment } from 'react'
import { Modal, Input, Button } from 'antd'
const confirm = Modal.confirm;
import styles from './scss.scss'
// import ee from './EventEmitter'
// require('./Observer')
// console.log(ee)
console.log(styles, 'styles')

function H(props) {
    let { msg } = props
    return <h1 className="hi">{msg}</h1>
}

export default class Hello extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            confirmLoading: false
        }
    }
    toggleModal = () => {
        let { visible } = this.state 
        this.setState({
            visible: !visible
        })
    }
    showConfirm = () => {
        confirm({
            title: 'Do you want to delete these items?',
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {}
        });
    }
    onOk = () => {
        console.log('okok')
        this.setState({
            confirmLoading: true
        })
        setTimeout(() => {
            this.setState({
                confirmLoading: false,
                visible: false
            })
        }, 1000);
    }
    doPromise = () => {
        console.time('abc')

        let a = ''
        let p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < .2) {
                    reject('p1-400')
                }
                resolve('p1-200')
            }, 1500);
        })
        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < .2) {
                    reject('p2-400')
                }
                resolve('p2-200')
            }, 500);
        })
        let p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < .2) {
                    reject('p3-400')
                }
                resolve('p3-200')
            }, 5000);
        })
        p1
        .then(r => {
            a = r 
            return p2
        })
        .then(m => {
            console.log('m', m)
            // return a + m
            return p3
        })
        .then((r) => {
            console.log('r', r)
            return r 
        })
        .catch(err => {
            console.log('err', err)
            return err
        }).finally(res => {
            console.log('finally' + res)
            console.timeEnd('abc')
        })
    }
    render() {
        let { visible, confirmLoading } = this.state 
        return (
            <Fragment>
                <H msg={'hello, babel...'}/>
                <div className={styles.pack}>hello...webpack</div>
                <i className="iconfont icon-lvyou"/>
                <Button type="primary" onClick={this.toggleModal}>切换弹窗</Button>&nbsp;
                <Button type="primary" onClick={this.showConfirm}>confirm</Button>&nbsp;
                <Button type="brand" onClick={this.showConfirm}>confirm</Button>&nbsp;
                <Button type="brand" onClick={this.doPromise}>Promise</Button>&nbsp;
                <Modal visible={visible}
                    title="对话框"
                    onCancel={this.toggleModal}
                    onOk={this.onOk}
                    confirmLoading={confirmLoading}
                >
                    <div>
                        <p>abc</p>
                        <p>def</p>
                    </div>
                </Modal>
            </Fragment>
        )
    }
}
