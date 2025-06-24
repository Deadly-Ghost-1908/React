import React, { Component } from 'react';

export default class Exp7 extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Welcome to Rai Technology University</h1>
        <div className="form">
          <form>
            <div className="form-group">
              <label>Enter Username</label>
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label>Enter Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <div className="button">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
