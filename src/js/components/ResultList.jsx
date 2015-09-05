import React from "react";
import Result from "./Result";

export default class ResultList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var list = this.props.results.map((result, index) => {
      return <Result executedQuery={result.executedQuery}
        expandListing={result.expandListing}
        expandManifest={result.expandManifest}
        expandUI={result.expandUI}
        key={index}
        result={result.result}/>;
    });
    return (
      <ul>
        {list}
      </ul>
    );
  }
}
