import React, { Component } from "react";


class Item extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }

    render() {
        return <div className="details">
            <span>{this.props.label}</span>
            <span className="infos">{this.props.info}</span>
            </div>;
      }
    }

    export default Item;