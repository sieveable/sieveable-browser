import React from "react";
import {Link} from "react-router";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top header">
        <div className="container-fluid">
          <div class="navbar-header">
            <Link className="navbar-brand" to="/">Sieveable</Link>
          </div>
        </div>
      </nav>
    );
  }
}
