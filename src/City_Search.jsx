import React from "react";
import { Container, Form } from "react-bootstrap";

class City_Search extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Control type="text" placeholder="Enter city . . . " />
          </Form>
        </Container>
      </>
    );
  }
}

export default City_Search;
