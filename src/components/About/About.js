import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { Card, CardContent } from "@material-ui/core";

function About(props) {
  const myProfileDetails = props.details;

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6" style={{ padding: "20px" }}>
            <figure className="imgeffect">
              <motion.img
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
                src={myProfileDetails.profilephoto}
                alt="Profile"
                width="70%"
                height="80%"
                style={{ borderRadius: "50%" }}
              />
            </figure>
          </div>
          <motion.div
            className="col-12 col-sm-6"
            style={{
              padding: "25px",
            }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.8, stiffness: 40 }}
          >
            <h2>About</h2>
            <br />
            <h5>{myProfileDetails.about_me.para1}</h5>
            <p>{myProfileDetails.about_me.para2}</p>
            <p>{myProfileDetails.about_me.para3}</p>
            <p>{myProfileDetails.about_me.para4}</p>
            <p>{myProfileDetails.about_me.para5}</p>
          </motion.div>
        </div>
      </div>
      <div className="container">
        <div
          className="row"
          style={{
            marginTop: "40px",
          }}
        >
          <motion.div
            className="col-12 col-md-4"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            style={{ marginTop: "20px" }}
          >
            <Card
              className="about-card-style"
              variant="outlined"
              style={{
                backgroundColor: "#27292d",
              }}
            >
              <CardContent>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <b style={{ fontSize: "26px" }}>
                    Best Outgoing Student Award
                  </b>
                  <br />
                  📌Received Best Outgoing Student Award 2008 of ECE Department
                  from my college chairman
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="col-12 col-md-4"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            style={{ marginTop: "20px" }}
          >
            <Card
              className="about-card-style"
              variant="outlined"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#27292d",
              }}
            >
              <CardContent>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <b style={{ fontSize: "30px" }}>Star Trophy</b>
                  <br />
                  📌Received Extra Mile Award and Star Trophy for Outstanding
                  Achievement.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="col-12 col-md-4"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            style={{ marginTop: "20px" }}
          >
            <Card
              className="about-card-style"
              variant="outlined"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#27292d",
              }}
            >
              <CardContent>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <b style={{ fontSize: "30px" }}>Excellence Award</b>
                  <br />
                  📌Got Excellence Award 3 times and also received cash award of
                  10k for timely project submission
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
