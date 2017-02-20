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

render(){
    console.log(this.state)
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
        return (
            <tr key={crs.courseID} onClick={()=> hashHistory.push(`/dashboard/${crs.courseID}`)}>
                <td>{crs.name}</td>
                <td>{crs.startDate}</td>
                <td>{crs.endDate}</td>
                <td>{crs.duration}</td>
                <td>{crs.description}</td>
                </tr>)

})}
    </tbody>
    </table>
    </div>
    </div>)
}
}