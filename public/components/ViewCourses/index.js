import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link,hashHistory } from 'react-router'
import { ProgressCircle ,Button} from 'react-desktop/windows';

export default class ViewCourses extends Component {
handleClick(e){
    hashHistory.push('/dashboard/'+e)
}

render(){
    return (<div className="container">
         <Button push color='#3498db' onClick={() => hashHistory.push('/')}>
    Home
    </Button>
{/*<ProgressCircle
        color={'#cc7f29'}
        size={100}
      />   */}
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

    <tr onClick={this.handleClick.bind(this,"123")}>
    <td>John Snow</td>
    <td>12-34-5678</td>
    <td>21-43-8765</td>
    <td>10</td>
    <td>Tapatap</td>
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
    <Button push color='#3498db' onClick={() => hashHistory.push('/addcourse')}>
    Add Course
    </Button>
    </div>)
}
}