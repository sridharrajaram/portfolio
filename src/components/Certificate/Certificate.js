import React from "react";
import "./Certificate.css";
import { Card, CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { CardLink } from "reactstrap";

function Certificate(props) {
  const myProfileDetails = props.details;
  return (
    <section id="certificate">
      <div className="container">
        <h2 className="text-center">Certification</h2>
        <div className="row" style={{ marginTop: "30px" }}>
          {myProfileDetails.certifications.map((certificate) => {
            return (
              <div
                key={certificate.certid}
                className="col-12 col-md-6 certificate-tile"
                style={{ marginTop: "20px" }}
              >
                <Card
                  className="card-style"
                  variant="outlined"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "rgb(46, 47, 52)",
                  }}
                >
                  <CardHeader
                    className="text-center"
                    title={certificate.coursename}
                  />
                  <img
                    src={certificate.image}
                    alt="course"
                    style={{
                      height: "300px",
                      width: "400px",
                    }}
                  />
                  <CardContent>
                    <p>
                      <b>Certified By: </b>
                      {certificate.certifiedby}
                    </p>
                    <p>
                      <b>User Id : </b>
                      {certificate.userid}
                    </p>
                    <p>
                      <b>Verify Url : </b>
                      <CardLink
                        href={certificate.verifyurl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GUVI
                      </CardLink>
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
