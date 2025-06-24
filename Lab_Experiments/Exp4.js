import React, { Component } from 'react';

export default class Exp extends Component {
  state = {
    Exp: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({
          Exp: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        {this.state.Exp.map(item => (
          <div key={item.id}>
            {item.name}
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
