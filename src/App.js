
import React, { Component } from 'react';
export default class App extends Component {
  componentDidMount(){
    this.props.getData();

  }
  render(){
    console.log("props values : ",this.props.fetched_data);
    console.log("error values:",this.props.error_values);
    return<div>
     <h2 >{this.props.fetched_data.map(u=>
     (
<p>{u.id}.{u.title}</p>
))}
</h2>
      {/* <p>{this.props.error_values}</p> */}
    
    </div>
  }

  }
  