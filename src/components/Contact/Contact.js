import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

const uri = "http://localhost:5000/send_mail";

function Contact(props) {
  const myProfileDetails = props.details;
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  // For reseting to initial form
  const resetContactForm = (e) => {
    setFullname("");
    setEmail("");
    setSubject("");
    setMessage("");

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    let contactData = { fullname, email, subject, message };

    try {
      await axios.post(`${uri}`, contactData);
      setSent(true);
    } catch (error) {
      console.log("Mail not sent");
    }
    resetContactForm();
  };
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center">Contact</h2>
        <Form onSubmit={handleSendMail}>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-4">
              <div>
                <img
                  src="/assets/images/mail.svg"
                  style={{ width: "80px", height: "50px" }}
                  alt="contact"
                />
                <h2>Contact Me</h2>
                <hr />
                <h5>Email Address:</h5>
                <h6>{myProfileDetails.profile_links.email.link}</h6>
                <hr />
                <h5>LinkedIn:</h5>
                <h6>{myProfileDetails.profile_links.linkedin.link}</h6>
                <hr />
                <h5>Location:</h5>
                <h6>{myProfileDetails.location}</h6>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <FormGroup row>
                  <Label for="fullname" sm={2}>
                    Fullname
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="fullname"
                      name="fullname"
                      placeholder="Enter Fullname"
                      type="text"
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="emailaddress" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="emailaddress"
                      name="emailaddress"
                      placeholder="Enter Email Address"
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="subject" sm={2}>
                    Subject
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Enter Subject"
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="message" sm={2}>
                    Message
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="message"
                      name="message"
                      type="textarea"
                      rows="5"
                      placeholder="Enter your message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={2}></Col>
                  <Col sm={10}>
                    {!sent ? (
                      <div className="col-sm-offset-2 col-sm-10">
                        <Button
                          type="submit"
                          className="btn btn-default"
                          color="primary"
                        >
                          Send Mail
                        </Button>
                      </div>
                    ) : (
                      <h3 style={{ color: "Yellow" }}>
                        Mail Sent Successfully
                      </h3>
                    )}
                  </Col>
                </FormGroup>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default Contact;
