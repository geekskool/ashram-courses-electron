import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link,hashHistory } from 'react-router'

export default class Home extends Component {

render(){
    return (<div className="container">
    <div className="welcomeScreen">
    <div className="welcomeText">Project V</div>
    <button className="buttons" onClick={() => hashHistory.push('/addcourse')}>Add Course</button>
    <br/>
    <br/>
    <button className="buttons" onClick={() => hashHistory.push('/viewcourses')}>View Courses</button>
    </div>
    </div>)
}
}