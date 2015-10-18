import React from "react";

export default class Result extends React.Component {

  constructor(props) {
    super(props);
    this.renderExecutedQuery = this.renderExecutedQuery.bind(this);
    this.renderResultTable = this.renderResultTable.bind(this);
    this.renderExecutionSummary = this.renderExecutionSummary.bind(this);
    this.renderCardOptions = this.renderCardOptions.bind(this);
  }

  render() {
    if (this.props.result){
      return this.renderResultTable();
    }
    else{
      return (<p>Please wait...</p>);
    }
  }


  renderResultTable() {
    return (
      <div className="mdl-grid">
        <div className="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
          <div className="mdl-card mdl-shadow--2dp result-mdl-card full-width">
            {this.renderExecutedQuery()}
            <div className="result-table-container">
              <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width">
                <thead>
                  <tr>
                    <th className="mdl-data-table__cell--non-numeric"></th>
                    <th className="mdl-data-table__cell--non-numeric">Package</th>
                    <th className="mdl-data-table__cell--non-numeric">Version</th>
                    <th className="mdl-data-table__cell--non-numeric"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.getTableRows()}
                </tbody>
              </table>
            </div>
            {this.renderExecutionSummary()}
          </div>
        </div>
      </div>
    );
  }

  renderCardOptions(){
    return(
      <div className="mdl-card__menu">
        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
          <i className="material-icons">more_vert</i>
        </button>
        <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn1">
          <li className="mdl-menu__item" disabled>Save</li>
          <li className="mdl-menu__item" disabled>Export</li>
          <li className="mdl-menu__item" disabled>Re-run</li>
        </ul>
      </div>
    );
  }

  renderExecutedQuery() {
    return (
      <div className="mdl-card__title result-card-title">
        <p>{this.props.executedQuery}</p>
      </div>
    );
  }

  getTableRows() {
    return this.props.result.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td className="mdl-data-table__cell--non-numeric">{item.app.packageName}</td>
          <td className="mdl-data-table__cell--non-numeric">{item.app.version}</td>
            <td className="mdl-data-table__cell--non-numeric">
              <div className="btn-group">
                <button aria-expanded="false" aria-haspopup="true"
                  className="btn btn-xs btn-link"
                  data-toggle="dropdown" type="button">
                  Details<span className="caret" style={{marginLeft:"30px"}}></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                      <a href={"https://play.google.com/store/apps/details?id=" +item.app.packageName} target="_blank"><span className="glyphicon glyphicon-eye-open"> GooglePlay</span></a>
                  </li>
                  <li className="disabled">
                      <a href="#"><span className="glyphicon glyphicon-eye-open"> UI</span></a>
                  </li>
                  <li className="disabled">
                      <a href="#"><span className="glyphicon glyphicon-eye-open"> Manifest</span></a>
                  </li>
                  <li className="disabled">
                    <a href="#"><span className="glyphicon glyphicon-eye-open"> Listing</span></a>
                  </li>
                  <li className="divider" role="separator"></li>
                  <li className="disabled">
                      <a href="#"><span className="glyphicon glyphicon-download-alt"> APK</span></a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>
      );
    });
  }
  renderExecutionSummary() {
    return (
      <div className="text-right card-foot">
        <span>Matched Apps:
          {this.props.result.length}</span>
      </div>
    );
  }
}
