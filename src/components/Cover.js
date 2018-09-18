import React, { Component } from "react";

class Cover extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }

    render() {
        return <img id="cover" src={this.props.url}/>;
      }
    }

    export default Cover;