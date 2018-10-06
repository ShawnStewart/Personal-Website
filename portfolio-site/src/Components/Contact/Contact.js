import React, { Component } from "react";
import { Container, Form } from "semantic-ui-react";
import Header from "../Header/Header";
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
      <div className="ContactInfo">
        <Header main={"Contact Info"} />
        <Container>
          <div className="Contact__Form">
            <p className="Form__Title" style={{ textAlign: "center" }}>
              If you have any feedback, questions or employment/business
              opportunities, fill out this form or feel free to send me an email
              directly at <b>shawn@shawnstewart.me</b>.
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
