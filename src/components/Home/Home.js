import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";

//const Home = (props) => {
const Home = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <p>
        Learnt about sideeffects, useeffect, usereducer, refs, context api,
        hooks and context limitations, forwardref.
      </p>
      <small>Used localStorage for storing the login state</small>
      <br />
      <br />
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
