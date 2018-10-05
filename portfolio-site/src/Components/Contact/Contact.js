import React, { Component } from "react";
import { Container, Form } from "semantic-ui-react";
import Map from "../GoogleMap/GoogleMap";
import "./Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      city: "",
      subject: "",
      message: ""
    };
  }

  handleFormInput = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = () => {
    window.alert("This form is currently under construction.");
    this.setState({ name: "", email: "", city: "", subject: "", message: "" });
  };

  componentWillMount = () => {
    this.props.updateMenu("contact");
  };

  render() {
    return (
      <div>
        <Container>
          <div className="Contact__Form">
            <p className="Form__Title">
              If you have any questions or employment/business opportunities,
              feel free to send me an email at <b>S.Stewart0220@Gmail.com</b>
            </p>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleFormInput}
                  fluid
                />
                <Form.Input
                  placeholder="Email address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleFormInput}
                  fluid
                />
                <Form.Input
                  placeholder="City"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleFormInput}
                  fluid
                />
              </Form.Group>
              <Form.Input
                placeholder="Subject"
                name="subject"
                value={this.state.subject}
                onChange={this.handleFormInput}
                fluid
              />
              <Form.TextArea
                placeholder="Message"
                name="message"
                value={this.state.message}
                onChange={this.handleFormInput}
                rows="6"
                autoHeight
              />
              <Form.Button
                content="Send Message"
                color="teal"
                onClick={this.handleFormSubmit}
              />
            </Form>
          </div>
        </Container>
        <Map />
      </div>
    );
  }
}
