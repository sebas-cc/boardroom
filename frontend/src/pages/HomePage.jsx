import Navbar from "../components/Navbar/Navbar.jsx";
import TeamList from "../components/TeamList/TeamList.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <TeamList name="test1" />
      <TeamList name="test2" />
    </>
  );
};

export default HomePage;
