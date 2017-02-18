import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link } from 'react-router'

export default class Home extends Component {

render(){
    return (<div className="container">
    <Link to='/' activeClassName='active'>
        Home
    </Link>
    {this.props.params.id}
    </div>)
}
}