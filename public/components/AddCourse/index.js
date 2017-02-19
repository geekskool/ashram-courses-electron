import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link ,hashHistory} from 'react-router'
import {ipcRenderer} from 'electron'

export default class AddCourse extends Component {
componentWillMount () {
    this.setState({
        coursename: '',
        courseduration: '',
        coursestartdate: '',
        description: ''
    })
}
sendData(){
    if(this.state.coursename === '' || this.state.courseduration === '' || this.state.coursestartdate===''){
        alert("Please Fill All the Details")
    }
    else{
    let obj = {
        name: this.state.coursename,
        startDate: this.state.coursestartdate,
        duration: this.state.courseduration,
        description: this.state.description
    }
    const courseID = ipcRenderer.sendSync('addcourse', obj) 
    console.log(courseID)
    hashHistory.push(`/dashboard/${courseID}`)
    }
}

render(){
    return (<div className="container">
     <button className="buttons" onClick={() => hashHistory.push('/')}>Home</button>
    <h1>Add Course</h1>
    <div className="addCourseForm">
        <input type="text" className="inputText" placeholder="Course Name" name="coursename" onChange={e => this.setState({coursename : e.target.value})} />
        <br/>
        <input type="number" className="inputText" min="1" max="15" placeholder="Duration" name="courseduration" onChange={e => this.setState({courseduration : e.target.value})} />
        <br/>
        <input type="date" className="inputText" placeholder="Start Date" name="coursestartdate" onChange={e => this.setState({coursestartdate : e.target.value})}/>
        <br/>
        <input type="text" className="inputText" placeholder="Description" name="description" onChange={e => this.setState({description : e.target.value})}/>
        <br/>   
        <button className="buttons" onClick={this.sendData.bind(this)}>Submit</button>    
    </div>
    </div>)
}
}

