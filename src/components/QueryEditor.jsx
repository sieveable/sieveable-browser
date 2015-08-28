import React from "react";
import AceEditor from "react-ace";
import "brace";
import "brace/theme/tomorrow";

export default class QueryEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasQuery: false,
      queryText: "MATCH app\nWHERE\n\t<Button/>\nRETURN app"
    };
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <AceEditor editorProps={
              {$blockScrolling: true}}
              fontSize={20}
              height="120px"
              name="query-editor"
              onChange={e => this.onChange(e)}
              theme="tomorrow"
              useWorker={false}
              value={this.state.queryText}
              width="100%"/>
          <button
            className={"btn btn-primary pull-right "
              + (this.state.hasQuery? "active" : "disabled")}
            onClick={e => this.handleSubmitQuery(e)} type="button">
            Run
          </button>
        </div>
      </div>

    );
  }
  handleSubmitQuery(e) {
    this.props.submit(this.state.queryText);
  }
  onChange(editorText) {
    this.setState({
      queryText: editorText
    });
    if (this.state.queryText.trim().length > 0) {
      this.setState({
        hasQuery: true
      });
    } else {
      this.setState({
        hasQuery: false
      });
    }
  }
}
