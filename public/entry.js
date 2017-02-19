import React from 'react'
import {render} from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import Home from './components/Home/'
import AddCourse from './components/AddCourse/'
import Dashboard from './components/Dashboard/'
import ViewCourses from './components/ViewCourses/'
import AddStudent from './components/AddStudent/'
import ViewStudent from './components/ViewStudent/'
import AddPurchase from './components/AddPurchase/'

require('style!css!AppStyle')

render(<Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/addcourse' component={AddCourse} />
    <Route path='/viewcourses' component={ViewCourses} />
    <Route path='/dashboard/:id' component={Dashboard} />
    <Route path='/addstudent/:id' component={AddStudent} />
    <Route path='/viewstudent/:id' component={ViewStudent} />
    <Route path='/addpurchase' component={AddPurchase} />
    </Router>
    ,
document.getElementById('app'))