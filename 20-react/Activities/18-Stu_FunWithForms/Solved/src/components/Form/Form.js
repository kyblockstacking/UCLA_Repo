import React, { Component } from "react";
import "./Form.css";

// style we'll add to any empty input box
const styles = {
  border: "1px solid red",
  outline: "1px solid red"
};

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // disable submit button if any value on state is empty
    let disableBtn = (this.state.firstName === "" || this.state.lastName === "" || this.state.password === "");

    // set red border for each individual, empty input
    let firstNameStyle = this.state.firstName === "" ? styles : {};
    let lastNameStyle = this.state.lastName === "" ? styles : {};
    let passwordStyle = this.state.password === "" ? styles : {};

    // define strength of password and change according to string length
    let strength = "weak";

    if (this.state.password.length > 10) {
      strength = "strong";
    }
    else if (this.state.password.length > 5) {
      strength = "okay";
    }
    
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
          <br/>
          Password is {strength}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
            style={firstNameStyle}
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
            style={lastNameStyle}
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
            style={passwordStyle}
          />
          <button onClick={this.handleFormSubmit} disabled={disableBtn}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
