import React from "react";
import SlideOut from "slideout";
import {Link} from "react-router";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    // manually bind this
    this.handleItemClick = this.handleItemClick.bind(this);
    // Operations usually carried out in componentWillMount go here
  }
  handleItemClick() {
    this.props.onSelectMenu();
  }
  render() {
    return (
      <nav className="menu" id="menu">
        <header className="menu-header">
          <span className="menu-header-title sieveable-title-font">
            Sieveable-Browser
          </span>
        </header>

        <section className="menu-section">
          <h3 className="menu-section-title">My Sieveable</h3>
          <ul className="menu-section-list">
            <li>
              <a href="#" target="_blank">Saved queries</a>
            </li>
            <li>
              <a href="#" target="_blank">Server configuration</a>
            </li>
            <li>
              <a href="#" target="_blank">Dataset information</a>
            </li>
          </ul>
        </section>
        <section className="menu-section">
          <h3 className="menu-section-title">Documentation</h3>
          <ul className="menu-section-list">
            <li>
              <a href="#" target="_blank">Examples</a>
            </li>
            <li>
              <a href="#" target="_blank">Reference</a>
            </li>
            <li>
              <a href="#" target="_blank">Guides</a>
            </li>
          </ul>
        </section>
        <section className="menu-section">
          <h3 className="menu-section-title">Sieveable</h3>
          <ul className="menu-section-list">
            <li>
              <Link onClick={this.handleItemClick} to="page1">
                About Sieveable
              </Link>
            </li>
            <li>
              <a href="#" target="_blank">Create an issue</a>
            </li>
            <li>
              <a href="#" target="_blank">Give us a star</a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}
export default class SlideOutMenu extends React.Component {
  constructor(props) {
    super(props);
    this.slideoutToggle = this.slideoutToggle.bind(this);
  }
  componentDidMount() {
    this.slideout = new SlideOut({
      panel: document.getElementById("main"),
      menu: document.getElementById("menu"),
      padding: 256,
      tolerance: 70
    });
    this.slideout.on("beforeopen", function() {
      document.querySelector(".fixed").classList.add("fixed-open");
    });
    this.slideout.on("beforeclose", function() {
      document.querySelector(".fixed").classList.remove("fixed-open");
    });
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Menu onSelectMenu={this.slideoutToggle}/>
          <header className="header-hamburger fixed">
            <button className="btn-hamburger js-slideout-toggle"
              onClick={this.slideoutToggle}>
              <span className="glyphicon glyphicon-align-justify shake"
                    aria-hidden="true">
              </span>
            </button>
            <Link className="header-root-link" to="/">Sieveable</Link>
          </header>
        </div>
      </nav>
    );
  }
  slideoutToggle() {
    this.slideout.toggle();
  }
}
