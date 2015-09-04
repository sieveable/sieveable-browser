import React from "react";

export default class DrawerMenu extends React.Component {

  render() {
    return (
      <div className="android-drawer mdl-layout__drawer">
        <span className="mdl-layout-title">
          Sieveable-Browser
        </span>
        <nav className="mdl-navigation">
          <span className="mdl-navigation__link" href="">My Sieveable</span>
          <a className="mdl-navigation__link" href="">Saved queries</a>
          <a className="mdl-navigation__link" href="">Server configuration</a>
          <a className="mdl-navigation__link" href="">Dataset information</a>
          <div className="android-drawer-separator"></div>

          <span className="mdl-navigation__link" href="">Documentation</span>
          <a className="mdl-navigation__link" href="">Examples</a>
          <a className="mdl-navigation__link" href="">Reference</a>
          <a className="mdl-navigation__link" href="">Guides</a>
          <div className="android-drawer-separator"></div>

          <span className="mdl-navigation__link" href="">Sieveable</span>
          <a className="mdl-navigation__link" href="">About Sieveable</a>
          <a className="mdl-navigation__link" href="">Create an issue</a>
        </nav>
      </div>
    );
  }
}
