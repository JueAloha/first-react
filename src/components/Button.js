import React, { Component } from "react";
import "../App.css";

class Button extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
  
    render() {
      return <button className={this.props.theme}>{this.props.text}</button>;
    }
  }
  
  export default Button; 