import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import city_map from "./assets/map.png";

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
            <Button onClick={() => this.setState({display_content: true})}>Explore!</Button>
          </Form>

          {this.state.display_content ? <p>Hello, World!</p> : null }
          {this.state.display_content && <p>Hello, World 2.0!</p>}
          {this.state.display_content && <img src={city_map} alt="map of Seattle" width={500}/>}

        </Container>
      </>
    );
  }
}

export default City_Search;
