import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link,hashHistory } from 'react-router'
import {ipcRenderer} from 'electron'

export default class ViewStudent extends Component {
componentWillMount(){
    let obj = {
        courseID : this.props.params.cid,
        studentID : this.props.params.sid
    }
    const purchases = ipcRenderer.sendSync('getpurchases',obj) 
    console.log(purchases)
    this.setState({purchases})

}
render(){
    return (<div className="container">
    <button className="buttons" onClick={() => hashHistory.push('/')}>Home</button>
    <div className="tablelist">
    <table style={{width:'100%'}}>
    <thead>
    <tr>
    <th>Name</th>
    <th>Date</th>
    <th>Quantity</th>
    <th>Amount</th>
    <th>Total</th>
    </tr>
    </thead>
    <tbody>
    {this.state.purchases ? this.state.purchases.map(txn => (
        <tr key={txn.txnID}>
            <td>{txn.name}</td>
            <td>{txn.date}</td>
            <td>{txn.count}</td>
            <td>{txn.rate}</td>
            <td>{txn.total}</td>
            </tr>
        )) : null}
    </tbody>
    </table>
    </div>
    <br/>
    <button className="buttons" onClick={() => hashHistory.push(`/addpurchase/${this.props.params.cid}/${this.props.params.sid}`)}>Add Purchase</button>
    </div>)
}
}