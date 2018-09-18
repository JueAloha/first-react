import React, { Component } from "react";

class Subtitle extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
  
    render() {
      return <h2>{this.props.text}</h2>
    
    }
  }
  
  export default Subtitle; 