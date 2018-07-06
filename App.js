import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';

Modal.setAppElement('#root');

class TimeSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      editSlot: false //modal is open
    }
  }

    handleEdit () { //openModal
      this.setState({ editSlot: true });
    }
    handleUpdate () { //closeModal
      this.setState({ editSlot: false });
    }

  render() {
    return (
      <div style= {
        this.state.name || this.state.phone ?
        { backgroundColor: "#c69eef"} :
        null
      } onClick={() => this.handleEdit()}>
      <h1>{this.props.time}</h1>
      <label>Name: </label>
      <input type="text"
        value={this.state.name}
        onChange= {
          (e) => {
            this.setState({name: e.target.value
            })
          }
        }/>
        <label>Phone Number: </label>
        <input type="text"
          value={this.state.phone}
          onChange= {
            (e) => {
              this.setState({phone: e.target.value
              })
            }
          }/>
        </div>
      )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      phone: ''
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Scheduler</h1>
          </header>
        </div>
        <div>
          <TimeSlot time={"9am"}/>
          <TimeSlot time={"10am"}/>
          <TimeSlot time={"11am"}/>
          <TimeSlot time={"12pm"}/>
          <TimeSlot time={"1pm"}/>
          <TimeSlot time={"2pm"}/>
          <TimeSlot time="3pm"/>
          <TimeSlot time="4pm"/>
        </div>
      </div>

    );
  }
}

export default App;
