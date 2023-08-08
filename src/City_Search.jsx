import React from "react";
import { Button, Container, Form } from "react-bootstrap";

class City_Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_content: false,
    };
  }

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Control type="text" placeholder="Enter city . . . " />
            <Button onClick={() => this.setState({ display_content: true })}>
              Explore!
            </Button>
          </Form>

        </Container>
      </>
    );
  }
}

export default City_Search;
