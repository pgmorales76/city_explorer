import React from "react";
import { Alert } from "react-bootstrap";

class Errors extends React.Component {
  render() {
    return (
      <Alert variant="warning" onClose={this.props.show}>
        <Alert.Heading>Enter a valid location!</Alert.Heading>
      </Alert>
    );
  }
}

export default Errors;
