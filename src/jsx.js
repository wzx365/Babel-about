import React from 'react'

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
            <H msg={'hello @babel/preset-react'}/>
        )
    }
}
