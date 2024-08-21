import { useContext } from "react";
import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);
  return (
    <div>
      <h1>About - {loggedInUser} </h1>
      <User name={"Pranay functional"} location={"Hayward, CA functional"} />
      <UserClass name={"Pranay Class"} location={"Hayward, CA Class"} />
    </div>
  );
};

export default About;
