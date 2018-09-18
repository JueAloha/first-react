import React, { Component } from "react";
import Logo from "./Logo";

class Header extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }

    render() {
        return <header>
          <Logo url="https://i2.wp.com/www.damdamsworld.com/wp-content/uploads/damdam.typepad.com/_au_fil_de_mes_journes_/images/2008/06/19/496pxallocine_logosvg.png?resize=450%2C121"/>
        </header>;
      }
    }

    export default Header;