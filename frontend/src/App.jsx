import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import TeamList from "./components/TeamList/TeamList.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <TeamList name="test1" />
      <TeamList name="test2" />
    </>
  );
};

export default App;
