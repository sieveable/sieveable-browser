import React from "react";

export default class ResultList extends React.Component {

  constructor(props) {
    super(props);
    this.renderResult = this.renderResult.bind(this);
  }

  render() {
    return this.renderResult();
  }
  renderResult() {
    if (this.props.result === null) {
      console.log("no results to render");
      return null;
    } else {
      let resultRows = this.props.result.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.app.packageName}</td>
            <td>{item.app.version}</td>
            <td>
              <span className="glyphicon glyphicon-expand"
              onClick={this.props.expand.bind(null, item.app.id)}/>
            </td>
          </tr>
        );
      });
      if (resultRows.length == 0) {
        return (
          <div className="panel panel-danger">
            <div className="panel-heading">
              {this.renderHeadingToolbar()}
              <p>{this.props.getExecutedQuery()}</p>
            </div>
            <div className="panel-body">
              <p>No results found.</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="panel panel-success">
            <div className="panel-heading">
              {this.props.getExecutedQuery()}
              {this.renderHeadingToolbar()}
            </div>
            <div className="panel-body">
              <table className="table">
                <tbody>
                  <tr key={-1}>
                    <th>Package</th>
                    <th>Version</th>
                    <th>Details</th>
                  </tr>
                  {resultRows}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
    }
  }

  renderHeadingToolbar(){
    console.log("in renderHeadingToolbar");
    return (
      <div className="well-lg">
      <div className="btn-toolbar pull-right" role="toolbar" aria-label="exportptions">
        <div className="btn-group" role="group" aria-label="Save">
          <button type="button" className="btn btn-default">Save</button>
        </div>
        <div className="btn-group" role="group" aria-label="Export results">
          <button type="button" className="btn btn-default">Export</button>
        </div>
        <div className="btn-group" role="group" aria-label="Re-run">
          <button type="button" className="btn btn-default">Re-run</button>
        </div>
      </div>
    </div>
    );
  }
}
