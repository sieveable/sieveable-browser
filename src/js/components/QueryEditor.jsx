import React from "react";
import QueryEditorToolbar from "./QueryEditorToolbar";
import AceEditor from "react-ace";
import "brace";
import "brace/theme/tomorrow";
import "brace/mode/xml";

export default class QueryEditor extends React.Component {

  constructor(props) {
    super(props);
    this.handleClearQuery = this.handleClearQuery.bind(this);
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this);
    this.handleSaveQuery = this.handleSaveQuery.bind(this);
    this.state = {
      hasQuery: false,
      queryText: "MATCH app\nWHERE\n\t<Button/>\nRETURN app"
    };
  }
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
          <AceEditor
            editorProps={{$blockScrolling: true}}
            fontSize={20}
            height="120px"
            name="query-editor"
            onChange={e => this.onChange(e)}
            theme="tomorrow"
            useWorker={false}
            mode="xml"
            value={this.state.queryText}
            width="100%"/>
          <QueryEditorToolbar
            hasQuery={this.state.hasQuery}
            queryText={this.state.queryText}
            submitQuery={this.handleSubmitQuery}
            clearQuery={this.handleClearQuery}
            saveQuery={this.handleSaveQuery} />
        </div>
      </div>
    );
  }

  handleSubmitQuery(e) {
    this.props.submit(this.state.queryText);
  }

  handleSaveQuery(e) {
    console.log("I will save your query later...");
  }

  handleClearQuery() {
    this.setState({queryText: ""});
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
