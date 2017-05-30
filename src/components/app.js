import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      	Parent route (app.js)
      	"this.props.children": 
      	{this.props.children} 
      	Above line is (Nested/children routes)
      </div>

    );
  }
}
