import React from "react";

export default class DrawerMenu extends React.Component {

  render() {
    return (
      <div className="android-drawer mdl-layout__drawer">
        <span className="mdl-layout-title">
          <img className="sieveable-logo" src="http://sieveable.io/images/sieveable.png" alt="Sieveable"/>
        </span>
        <nav className="mdl-navigation">
          <span className="mdl-navigation__link" href="">Documentation</span>
          <a className="mdl-navigation__link"
            href="https://github.com/sikuli/sieveable/wiki/100--Examples"
            target="_blank">
            Examples
          </a>
          <a className="mdl-navigation__link"
            href="https://github.com/sikuli/sieveable/wiki"
            target="_blank">
            Reference
          </a>

          <div className="android-drawer-separator"></div>

          <span className="mdl-navigation__link" href="">Sieveable</span>
          <a className="mdl-navigation__link"
            href="http://sieveable.io/about"
            target="_blank">
            About Sieveable
          </a>
          <a className="mdl-navigation__link"
            href="https://github.com/sikuli/sieveable/issues"
            target="_blank">
            Create an issue
          </a>
        </nav>
      </div>
    );
  }
}
