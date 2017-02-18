import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link ,hashHistory} from 'react-router'

export default class Home extends Component {
componentWillMount () {
    this.setState({
        coursename: '',
        courseduration: '',
        coursestartdate: '',
        description: ''
    })
}
sendData(){
    if(this.state.coursename === '' || this.state.courseduration === '' || this.state.coursestartdate==='' || this.state.description===''){
        alert("Please Fill All the Details")
    }
    else{
    console.log(this.state.coursename)
 hashHistory.push('/dashboard/'+this.state.coursename)
    }
}

render(){
    return (<div className="container">
    <Link to='/' activeClassName='active'>
    Cancel
    </Link>
    <h1>Add Course</h1>
    <div className="addCourseForm">
        <input type="text" placeholder="Course Name" required name="coursename" onChange={e => this.setState({coursename : e.target.value})} />
        <br/>
        <input type="number" placeholder="Duration" name="courseduration" onChange={e => this.setState({courseduration : e.target.value})} />
        <br/>
        <input type="date" placeholder="Start Date" name="coursestartdate" onChange={e => this.setState({coursestartdate : e.target.value})}/>
        <br/>
        <input type="text" placeholder="Description" name="description" onChange={e => this.setState({description : e.target.value})}/>
        <br/>        
        <button onClick={this.sendData.bind(this)} > Submit </button>
        <br/> 
    </div>
    </div>)
}
}