import React, { Component } from "react";
import { Container, Form, Message } from "semantic-ui-react";
import Header from "../Header/Header";
import Map from "../GoogleMap/GoogleMap";
import axios from "axios";
import "./Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      location: "",
      subject: "",
      message: "",
      messageSent: false,
      errors: {}
    };
  }

  handleFormInput = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_URL}/api/contact/send-message`, this.state)
      .then(res => {
        this.setState({
          name: "",
          email: "",
          location: "",
          subject: "",
          message: "",
          messageSent: true,
          errors: {}
        });
      })
      .catch(err => {
        let errors = Object.assign({}, this.state.errors);
        errors = { ...err.response.data };
        this.setState({ errors });
      });
  };

  componentWillMount = () => {
    this.props.updateMenu("contact");
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="ContactInfo">
        <Header main={"Contact Info"} />
        <Container>
          <div className="Contact__Form">
            <p className="Form__Title" style={{ textAlign: "center" }}>
              If you have any feedback, questions or employment/business
              opportunities, fill out this form or feel free to send me an email
              directly at <b>Shawn@shawnstewart.me</b>.
            </p>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleFormInput}
                  error={Boolean(errors.name)}
                  fluid
                />
                <Form.Input
                  placeholder="Email address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleFormInput}
                  error={Boolean(errors.email)}
                  fluid
                />
                <Form.Input
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
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
                rows="6"
                placeholder="Message"
                name="message"
                value={this.state.message}
                onChange={this.handleFormInput}
                error={Boolean(errors.message)}
                autoHeight
              />
              <Form.Button
                content="Send Message"
                color="teal"
                onClick={this.handleFormSubmit}
              />
            </Form>
            {this.state.messageSent ? (
              <Message color="teal">
                Thanks! Your message has been sent.
              </Message>
            ) : null}
          </div>
        </Container>
        <Map />
      </div>
    );
  }
}
