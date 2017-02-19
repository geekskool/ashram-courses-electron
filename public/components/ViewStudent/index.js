import React, {Component} from 'react'
import {render} from 'react-dom'
import { IndexLink, Link,hashHistory } from 'react-router'
import { ProgressCircle ,Button} from 'react-desktop/windows';

export default class ViewStudent extends Component {

render(){
    return (<div className="container">
    <Button push color='#3498db' onClick={() => hashHistory.push('/')}>
    Home
    </Button>    
    <Button push color='#3498db' onClick={() => hashHistory.push('/dashboard/123')}>
    Back
    </Button>
{/*<ProgressCircle
        color={'#cc7f29'}
        size={100}
      />   */}
    <div className="tablelist">
    <table style={{width:'100%'}}>
    <thead>
    <tr>
    <th>Name</th>
    <th>Date</th>
    <th>Quantity</th>
    <th>Amount</th>
    <th>Total</th>
    </tr>
    </thead>
    <tbody>

    <tr>
    <td>Soap</td>
    <td>12-34-5678</td>
    <td>5</td>
    <td>20</td>
    <td>100</td>
    </tr>
   
    <tr>
    <td>Laundry</td>
    <td>15-34-5678</td>
    <td>5</td>
    <td>10</td>
    <td>50</td>
    </tr>
    <tr>
    <td>Toothpaste</td>
    <td>30-34-5678</td>
    <td>1</td>
    <td>50</td>
    <td>50</td>
    </tr>
    </tbody>
    </table>
    </div>
    <br/>
    <Button push color='#3498db' onClick={() => hashHistory.push('/addpurchase')}>
    Add Purchase
    </Button> 
    </div>)
}
}