import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link,hashHistory } from 'react-router'
import {ipcRenderer} from 'electron'

export default class Home extends Component {
componentWillMount(){
const students = ipcRenderer.sendSync('getstudents',this.props.params.id) 
this.setState({students})
console.log(students)
}

render(){
    const that = this
    return (<div className="container">
     <button className="buttons" onClick={() => hashHistory.push('/')}>Home</button>
       <h1>Dashboard</h1>
        <div className="tablelist">
    <table style={{width:'100%'}}>
    <thead>
    <tr>
    <th>Name</th>
    <th>Room No.</th>
     <th>Deposit</th>
    </tr>
    </thead>
    <tbody>

    {this.state.students.map(function(stdnt){
        return (
            <tr key={stdnt.studentID} onClick={()=> hashHistory.push(`/viewstudent/${stdnt.studentID}/${that.props.params.id}`)}>
                <td>{stdnt.name}</td>
                <td>{stdnt.roomNo}</td>
                <td>{stdnt.deposit}</td>
                </tr>)

})}

    </tbody>
    </table>
    </div>
    <br/>
     <button className="buttons" onClick={() => hashHistory.push(`/addstudent/${this.props.params.id}`)}>Add Student</button>
    </div>)
}
}