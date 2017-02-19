import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link ,hashHistory} from 'react-router'
import {ipcRenderer} from 'electron'

export default class AddPurchase extends Component {
componentWillMount () {
    this.setState({
        name: '',
        total: '',
        date: '',
        quantity: '',
        rate:''
    })
}
sendData(){
    if(this.state.name === '' || this.state.total === '' || this.state.date==='' || this.state.quantity ===''){
        alert("Please Fill All the Details")
    }
    else{
    let obj = {
        name: this.state.name,
        date: this.state.date,
        quantity: this.state.quantity,
        rate: this.state.rate,
        total: this.state.total
    }
    console.log(ipcRenderer.sendSync('addcourse', obj)) 
 hashHistory.push('/viewstudent/123')
    }
}

render(){
    return (<div className="container">
         <button className="buttons" onClick={() => hashHistory.push('/')}>Home</button>
    <h1>Add Purchase</h1>
    <div className="addPurchaseForm">
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

