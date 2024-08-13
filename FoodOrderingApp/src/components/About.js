import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"Pranay functional"} location={"Hayward, CA functional"} />
      <UserClass name={"Pranay Class"} location={"Hayward, CA Class"} />
    </div>
  );
};

export default About;
