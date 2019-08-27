import React from "react";

class Summary extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getGoal(this.props.token);
  }
  render() {
    return (
      <div>
        <h1>Listado de tus metas</h1>
      </div>
    );
  }
}

export default Summary;
