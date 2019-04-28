import React, { Component, Fragment } from 'react'
import { Modal, Input, Button, Tooltip } from 'antd'
import QRCode from './static/qrcode.min.js'
const confirm = Modal.confirm;
import styles from './scss.scss'
// import ee from './EventEmitter'
// require('./Observer')
// console.log(ee)
console.log(styles, 'styles')

console.log(QRCode)

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
        this.canvasWrap = null
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
        })
        .finally(res => {
            console.log('finally' + res)
            console.timeEnd('abc')
        })
    }
    getCanvasWrap = wrap => {
        console.log(1, wrap)
        this.canvasWrap = wrap
    }
    getCanvasWrap2 = wrap => {
        console.log(2, wrap)
        this.canvasWrap2 = wrap
    }
    handleQRcode = () => {
        console.log(this.canvasWrap)
        this.setState({
            visible: true
        }, () => {
            setTimeout(() => {
                console.log(this.canvasWrap)
                console.log(this.canvasWrap2)
                if (!this.canvasWrap2) {
                    console.log('不存在')
                    return false
                }
                this.qrcode = new QRCode(this.canvasWrap2, {
                    width: 200,
                    height: 200
                })
                this.qrcode.makeCode('https://baidu.com')
            })
        })
    }
    render() {
        let { visible, confirmLoading, qrUrl } = this.state 
        return (
            <Fragment>
                <H msg={'hello, babel...'}/>
                <div className={styles.pack}>hello...webpack</div>
                <p><i className="iconfont icon-lvyou"/><br/></p>
                <Tooltip title="prompt text">
                    <span>Tooltip will show on mouse enter.</span>
                </Tooltip>
                <br/>
                <Button type="primary" onClick={this.toggleModal}>切换弹窗</Button>&nbsp;
                <Button type="primary" onClick={this.showConfirm}>confirm</Button>&nbsp;
                <Button type="brand" onClick={this.showConfirm}>confirm</Button>&nbsp;
                <Button type="brand" onClick={this.doPromise}>Promise</Button>&nbsp;
                <Button type="brand" onClick={this.handleQRcode}>getQRcode</Button>&nbsp;
                <div ref={this.getCanvasWrap}></div>
                {
                    visible
                    &&
                    <Modal 
                        visible={visible}
                        title="对话框"
                        onCancel={this.toggleModal}
                        onOk={this.onOk}
                        confirmLoading={confirmLoading}
                    >
                        <div>
                            <p>abc</p>
                            <p>def</p>
                            <div className="abcdef" ref={this.getCanvasWrap2}></div>
                        </div>
                    </Modal>
                }
            </Fragment>
        )
    }
}
