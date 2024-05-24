import React from "react";
import "./TeamList.css";
import MemberCard from "../MemberCard/MemberCard";

const TeamList = () => {
  let teamName;
  let name, ongoing, done, rol, photo;
  return (
    <div id="TeamList">
      <div id="team_settings">
        <h1>{teamName ? teamName : "No Name"}</h1>
        <button>...</button>
      </div>
      <div id="memberList">
        <MemberCard
            photo={photo}
            name={name}
            rol={rol}
            ongoing={ongoing}
            done={done}
        />
      </div>
    </div>
  );
};

export default TeamList;
