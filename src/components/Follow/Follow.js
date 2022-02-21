import React from "react";
import "./Follow.css";

function Follow(props) {
  const myProfileDetails = props.details;

  const openLink = (social) => {
    window.open(social.link, "_blank");
  };

  return (
    <section id="follow">
      <div className="container text-center">
        <h4>Follow me on</h4>
      </div>
      <br />
      <div className="container horizontal-links">
        <img
          style={{
            width: "35px",
            height: "35px",
            margin: "5px",
            cursor: "pointer",
          }}
          src={myProfileDetails.profile_links.github.image}
          alt="GitHub"
          onClick={() => openLink(myProfileDetails.profile_links.github)}
        />
        <img
          style={{
            width: "35px",
            height: "35px",
            margin: "5px",
            cursor: "pointer",
          }}
          src={myProfileDetails.profile_links.linkedin.image}
          alt="LinkedIn"
          onClick={() => openLink(myProfileDetails.profile_links.linkedin)}
        />
      </div>
    </section>
  );
}

export default Follow;
