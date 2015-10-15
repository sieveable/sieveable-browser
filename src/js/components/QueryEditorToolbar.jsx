import React from "react";
import ReactZeroClipboard from "react-zeroclipboard";

export default class QueryEditorToolbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="editor-btn-group">
        <button className={" mdl-button mdl-js-button mdl-button--fab " +
          (this.props.hasQuery ? "active" : "disabled")}
          id="btn-run"
          onClick={e => this.props.submitQuery(e)}
          type="button">
          <i className="material-icons">play_arrow</i>
        </button>
        <button className={"mdl-button mdl-js-button mdl-button--fab " +
          (this.props.hasQuery ? "active" : "disabled")}
          id="btn-clear"
          onClick={() => this.props.clearQuery()}
          type="button">
          <i className="material-icons">clear</i>
        </button>
        <ReactZeroClipboard text={this.props.queryText}>
          <button className={"mdl-button mdl-js-button mdl-button--fab " +
            (this.props.hasQuery ? "active" : "disabled")}
            id="btn-copy"
            type="button">
            <i className="material-icons">content_copy</i>
          </button>
        </ReactZeroClipboard>
      </div>
    );
  }
}
