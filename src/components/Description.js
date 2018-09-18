import React, { Component } from "react";

class Description extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
  
    render() {
      return <p>{this.props.text}</p>
    
    }
  }
  
  export default Description; 