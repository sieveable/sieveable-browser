import React from "react";
import Header from "./Header";
import DrawerMenu from "./DrawerMenu";
import Footer from "./Footer";
import QueryEditor from "./QueryEditor";
import ProgressBar from "./ProgressBar";
import ResultList from "./ResultList";
import sieveableStore from "../stores/sieveableStore";
import sieveableActions from "../actions/sieveableActions";

export default class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultCards: [],
      result: sieveableStore.getResult(),
      executedQuery: "",
      isRunning: false
    };
    this._onChange = this._onChange.bind(this);
    this.onSelectMenu = this.onSelectMenu.bind(this);
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this);
    this.getExecutedQuery = this.getExecutedQuery.bind(this);
  }

// add the store event listner by passing the store a callback method.
  componentDidMount() {
    sieveableStore.addChangeListener(this._onChange);
    // Upgrades all upgradable mdl components (i.e. with 'mdl-js-*' class)
    componentHandler.upgradeDom();
  }

  // remove the store event listner by passing the store a callback method..
  componentWillUnmount() {
    sieveableStore.removeChangeListener(this._onChange);
  }

  handleSubmitQuery(query) {
    sieveableActions.submitQuery(query);
    this.setState({
      isRunning: true,
      executedQuery: query
    });
  }

  onSelectMenu() {
    this.props.onSelectMenu();
  }

  getExecutedQuery() {
    return this.state.executedQuery;
  }

  _onChange() {
    var results = this.state.resultCards;
    results.unshift({expandListing: this.handleExpandListing,
      expandUI: this.handleExpandUI,
      expandManifest:this.handleExpandManifest,
      result: sieveableStore.getResult(),
      executedQuery: this.state.executedQuery});

    this.setState({
      isRunning: false,
      result: sieveableStore.getResult(),
      resultCards: results
    });
  }

  handleExpandListing(id) {
    console.log("In handleExpandListing id=" + id);
  }

  handleExpandManifest(id) {
    console.log("In handleExpandManifest id=" + id);
  }

  handleExpandUI(id) {
    console.log("In handleExpandUI id=" + id);
  }

  render() {
    return (
      <div id="layout" className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header/>
        <DrawerMenu/>
        <div className="mdl-layout__content mdl-color--grey-100">
          <QueryEditor submit={this.handleSubmitQuery}/>
          {this.state.isRunning? <ProgressBar/>: <hr/>}
          <ResultList results={this.state.resultCards}/>
          <div>
            {this.content()}
          </div>
          <Footer/>
        </div>
      </div>
    );
  }

  content() {
    if (this.props.children) {
      return this.props.children;
    }
  }
}
