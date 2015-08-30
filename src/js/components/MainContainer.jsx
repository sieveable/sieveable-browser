import React from "react";
import SlideOutMenu from "./SlideOutMenu";
import QueryEditor from "./QueryEditor";
import ResultList from "./ResultList";
import sieveableStore from "../stores/sieveableStore";
import sieveableActions from "../actions/sieveableActions";

export default class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: sieveableStore.getResult(),
      executedQuery: ""
    };
    this._onChange = this._onChange.bind(this);
    this.onSelectMenu = this.onSelectMenu.bind(this);
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this);
    this.getExecutedQuery = this.getExecutedQuery.bind(this);
  }

// add the store event listner by passing the store a callback method.
  componentDidMount() {
    sieveableStore.addChangeListener(this._onChange);
  }
// remove the store event listner by passing the store a callback method..
  componentWillUnmount() {
    sieveableStore.removeChangeListener(this._onChange);
  }
  handleSubmitQuery(query) {
    sieveableActions.submitQuery(query);
    this.setState({
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
    this.setState({
      result: sieveableStore.getResult()
    });
  }

  handleExpandResult(id) {
    console.log("In handleExpandResult id=" + id);
  }

  render() {
    return (
      <div>
        <SlideOutMenu/>
        <main className="panel" id="main">
          <QueryEditor submit={this.handleSubmitQuery}/>
          <ResultList
            expand={this.handleExpandResult}
            getExecutedQuery={this.getExecutedQuery}
            result={this.state.result}/>
          <div>
            {this.content()}
          </div>
        </main>
      </div>
    );
  }

  content() {
    if (this.props.children) {
      return this.props.children;
    }
  }
}
