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
              <p>{this.props.getExecutedQuery()}</p>
            </div>
            <div className="panel-body">
              <p>No results found</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="panel panel-success">
            <div className="panel-heading">
              <p>{this.props.getExecutedQuery()}</p>
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
}
