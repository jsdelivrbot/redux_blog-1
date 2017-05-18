import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      	Parent route (app.js)
      	{this.props.children} (Nested/children routes)
      </div>

    );
  }
}
