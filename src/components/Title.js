import React, { Component } from "react";

class Title extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }

    render() {
        return <h1>{this.props.text}</h1>;
      }
    }

    export default Title;