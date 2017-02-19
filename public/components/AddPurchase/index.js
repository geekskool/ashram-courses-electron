import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link ,hashHistory} from 'react-router'
import {ipcRenderer} from 'electron'

export default class AddPurchase extends Component {
componentWillMount () {
    this.setState({
        type:'purchase',
        name: '',
        total: '',
        date: '',
        quantity: '',
        rate:''
    })
}
sendData(){

    let obj = {
        type:this.state.type,
        name: this.state.name,
        date: this.state.date,
        count: this.state.quantity,
        rate: this.state.rate,
        total: this.state.total,
        studentID: this.props.params.sid,
        courseID : this.props.params.cid
    }
    const txnID= ipcRenderer.sendSync('addtransaction', obj)
    console.log(txnID)
 hashHistory.push(`/viewstudent/${this.props.params.sid}/${this.props.params.cid}`)
    }


render(){
    return (<div className="container">
         <button className="buttons" onClick={() => hashHistory.push('/')}>Home</button>
    <h1>Add Purchase</h1>
    <div className="addPurchaseForm">
         <select className="selectField" onChange={e => this.setState({type:e.target.value})}>
            <option value="purchase" > Purchase </option>
            <option value="laundry" > Laundry </option>
        </select>
        <br/>
        <input type="text" className="inputText" placeholder="Name" name="coursename" onChange={e => this.setState({name : e.target.value})} />
        <br/>
        <input type="date" className="inputText" placeholder="Date" name="coursestartdate" onChange={e => this.setState({date : e.target.value})}/>
        <br/>
        <input type="number" className="inputText" min="1" placeholder="Quantity" name="courseduration" onChange={e => this.setState({quantity : e.target.value})} />
        <br/>
        <input type="number" className="inputText" min="1" placeholder="Rate" name="courseduration" onChange={e => this.setState({rate : e.target.value})} />
        <br/>
        <input type="text" className="inputText" placeholder="Total" name="description" onChange={e => this.setState({total : e.target.value})}/>
        <br/>
    <button className="buttons" onClick={this.sendData.bind(this)}>Submit</button>     
    </div>
    </div>)
}
}

