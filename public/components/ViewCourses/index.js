import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link,hashHistory } from 'react-router'
import {ipcRenderer} from 'electron'

export default class ViewCourses extends Component {
componentWillMount(){
    const courses = ipcRenderer.sendSync('getcourses') 
    this.setState({courses})
}

handleClick(e){
    hashHistory.push('/dashboard/'+e)
}
showCourses(){
    console.log(this.state.courses)
    const that = this
    
}
render(){
    return (<div className="container">
     <button className="buttons" onClick={() => hashHistory.push('/')}>Home</button>
    <div className="tablelist">
    <table style={{width:'100%'}}>
    <thead>
    <tr>
    <th>Course Name</th>
    <th>Start Date</th>
    <th>End Date</th>
    <th>Duration</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    {this.state.courses.map(function(crs){
        return (<h1 onClick={()=> hashHistory.push(`/dashboard/${crs.courseID}`)}>{crs.courseID}</h1>)

})}
    </tbody>
    </table>
    </div>
    </div>)
}
}