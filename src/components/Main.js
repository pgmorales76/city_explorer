import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Map from "./Map";
import Restaurants from "./Restaurants";
import Weather from "./Weather";
import axios from "axios";


class Main extends React.Component {

    // importing props
    constructor(props) {
        super(props);

        // setting state
        this.state = {
            display_info: false,
            city: '',
            city_data: {},
            restaurant_data: [],
            location_data: [],
            weather_data: []

        }
    }

    // search input data and sets the city
    handle_search_input = e => {
        let city_name = e.target.value;
        this.setState({
            city: city_name
        },
            () => console.log(this.state.city)
        )

    }

    // displaying city data
    handle_display_search = async (e) => {
        e.preventDefault();

        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`

        // waits for the response from the url and gives a response
        let response = await axios.get(url);

        console.log(response.data[0]);

        // updated set state
        this.setState({
            display_info: true,
            city_data: response.data[0]
        })
    }

    render() {
        return (
            <>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter City</Form.Label>
                            <Form.Control type="text" onInput={this.handle_search_input} />
                        </Form.Group>
                        <Button onClick={this.handle_display_search}>Explore!</Button>
                    </Form>
                </Container>

                {this.state.display_info &&
                    <>
                        <h2>{this.state.city_data.display_name}</h2>
                        <p>Latitude:{this.state.city_data.lat} Longitude: {this.state.city_data.lon}</p>
                    </>
                }

            </>
        )
    }
}

export default Main;