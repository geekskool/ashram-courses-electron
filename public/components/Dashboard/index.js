import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link,hashHistory } from 'react-router'

export default class Home extends Component {
componentWillMount(){
console.log(this.props.params.id)
}
handleClick(e){
    hashHistory.push('/viewstudent/'+e)
}
render(){
    return (<div className="container">
     <button className="buttons" onClick={() => hashHistory.push('/')}>Home</button>
       <h1>Dashboard</h1>
        <div className="tablelist">
    <table style={{width:'100%'}}>
    <thead>
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Room No.</th>
    <th>Purchases/Laundry</th>
    </tr>
    </thead>
    <tbody>

    <tr onClick={this.handleClick.bind(this,"123")}>
    <td>John Snow</td>
    <td>22</td>
    <td>Male</td>
    <td>B23</td>
    <td>Link</td>
    </tr>
    <tr onClick={this.handleClick.bind(this,"456")}>
     <td>Hodor</td>
    <td>Hodor</td>
    <td>Hodor</td>
    <td>Hodor</td>
    <td>Hodor</td>
    </tr>
    <tr onClick={this.handleClick.bind(this,"789")}>
    <td>I am Groot</td>
    <td>I am Groot</td>
    <td>I am Groot</td>
    <td>I am Groot</td>
    <td>I am Groot</td>
    </tr>
    </tbody>
    </table>
    </div>
    <br/>
     <button className="buttons" onClick={() => hashHistory.push('/addstudent')}>Add Student</button>
    </div>)
}
}