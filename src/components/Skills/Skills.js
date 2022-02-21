import React from "react";
import "./Skills.css";

function Skills(props) {
  const myProfileDetails = props.details;

  return (
    <section id="skills">
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <div className="row" style={{ marginTop: "30px" }}>
          {myProfileDetails.skills.map((skill) => {
            return (
              <div
                key={skill.skillid}
                className="col-12 col-md-3 skill-tile text-center"
              >
                <img src={skill.image} alt="Skill" width="30%" height="20%" />
                <p>{skill.name}</p>
                <p>{skill.rating}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
