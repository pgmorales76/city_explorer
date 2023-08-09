import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

class City_Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_content: false,
      search_query: "",
      city: {},
    };
  }

  handle_search = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${
      import.meta.env.VITE_LOCATIONIQ_KEY
    }&q=${this.state.search_query}&format=json`;
    // console.log(url);
    const response = await axios.get(url);
    console.log(response.data);

    this.setState({ city: response.data[0], display_content: true });
  };

  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.handle_search}>
            <Form.Control
              onChange={(e) => this.setState({ search_query: e.target.value })}
              type="text"
              placeholder="Enter city . . . "
            />
            <Button type="submit">Explore!</Button>
          </Form>

          {this.state.display_content && (
            <>
              <p>{this.state.city.display_name}</p>
              <p>
                Latitude: {this.state.city.lat}, Longitude:{this.state.city.lon}
              </p>
            </>
          )}
        </Container>
      </>
    );
  }
}

export default City_Search;
