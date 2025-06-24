import React, { Component } from 'react';

export default class Exp8 extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Register at Rai Technology University</h1>
        <div className="form">
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Choose a username" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" />
            </div>

            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
