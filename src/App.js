import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { createUser } from './ducks/reducer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    const { email, password } = this.state
    return (
      <div className="App">

        <p>EMAIL</p>
        <input onChange={e => this.setState({ email: e.target.value})}/>
        <p>PASSWORD</p>
        <input onChange={e => this.setState({ password: e.target.value})}/>

        <button onClick={this.props.createUser(email, password)}>CREATE USER</button>
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { createUser })(App)
