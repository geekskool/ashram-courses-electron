import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link ,hashHistory} from 'react-router'
import {ipcRenderer} from 'electron'

export default class AddCourse extends Component {
componentWillMount () {
    this.setState({
        studentname: '',
        gender: '',
        age: '',
        roomno: '',
        email: '',
        deposit: '',
    })
}
sendData(){
    let obj = {
        name: this.state.studentname,
        deposit: this.state.deposit,
        roomNo: this.state.roomno,
        courseID: this.props.params.id
    }
    console.log(obj)
    const studentID = ipcRenderer.sendSync('addstudent', obj) 
        hashHistory.push(`/dashboard/${this.props.params.id}`)
}

render(){
    return (<div className="container">
    <button className="buttons" onClick={() => hashHistory.push('/')}>Home</button>
    <h1>Add Student</h1>
    <div className="addCourseForm">
        <input type="text" className="inputText" placeholder="Student Name" onChange={e => this.setState({studentname : e.target.value})} />
        <br/>
        <select className="selectField" onChange={e => console.log(e.target.value)}>
            <option value="select" > Select Gender </option>
            <option value="male" > Male </option>
            <option value="female" > Female </option>
            <option value="others" > Others </option>
        </select>
        <br/>
        <input type="number" className="inputText" min="1" max="100" placeholder="Age" onChange={e => this.setState({age : e.target.value})}/>
        <br/>
        <input type="email" className="inputText" placeholder="Email" onChange={e => this.setState({email : e.target.value})} />
        <br/>
        <input type="text" className="inputText" placeholder="Room no." name="coursestartdate" onChange={e => this.setState({roomno : e.target.value})}/>
        <br/> 
        <input type="number" className="inputText" min="0" placeholder="Deposit" onChange={e => this.setState({deposit : e.target.value})}/>
        <br/>
        <button className="buttons selectField" onClick={this.sendData.bind(this)}>Add Student</button>    
    </div>
    </div>)
}
}

