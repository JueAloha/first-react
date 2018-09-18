import React, { Component } from "react";

class Logo extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
  
    render() {
      return <img id="logo" src={this.props.url}/>;
    }
  }
  
  export default Logo; 