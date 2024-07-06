import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  useEffect(() => {
    alert("I will run on every rander");
  }, [color]);

  useEffect(() => {
    alert("This is first rander");
  }, [color]);

  useEffect(() => {
    alert("I will running because color was changed");
  }, [color]);

  return <div>Navbar {color} color.</div>;
};

export default Navbar;
