import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            Sieveable-Browser
          </span>
        </div>
      </div>
    );
  }
}
