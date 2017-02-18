import React from 'react'
import {render} from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import Home from './components/Home/'
import AddCourse from './components/AddCourse/'
import Dashboard from './components/Dashboard/'
require('style!css!AppStyle')

render(<Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/addcourse' component={AddCourse} />
    <Route path='/dashboard/:id' component={Dashboard} />
    </Router>
    ,
document.getElementById('app'))