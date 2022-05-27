import React from "react";
import useFirebase from "../Authentication/hooks/useFirebase";
import NavBar from "../NavBar/NavBar";

const Signup = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <button onClick={signInUsingGoogle}>Google sign in</button>
      </div>
    </div>
  );
};

export default Signup;
