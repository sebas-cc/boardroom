import React, { useState } from "react";
import "./TeamList.css";
import MemberCard from "../MemberCard/MemberCard";

const TeamList = (props) => {
  let teamName;
  let name, ongoing, done, rol, photo;
  const [isHidden, setIsHidden] = useState(true);

  const hideList = () => {
    const memberList = document.getElementById(`list_${props.name}`);
    const viewButton = document.getElementById(`view_${props.name}`);

    if (isHidden) {
      memberList.style.animation = "slide-up 170ms forwards";
      viewButton.style.rotate = "0deg";
      setIsHidden(false);
    } else {
      memberList.style.animation = "slide-down 400ms forwards";
      viewButton.style.rotate = "180deg";
      setIsHidden(true);
    }
  };

  return (
    <div className="TeamList" id={props.name}>
      <div id="team_settings">
        <h1>{teamName ? teamName : "No Name"}</h1>
        <div id="options">
          <button id="settings">...</button>
          <button id={`view_${props.name}`} onClick={hideList}>
            v
          </button>
        </div>
      </div>
      <div className="memberList" id={`list_${props.name}`}>
        <MemberCard
          photo={photo}
          name={name}
          rol={rol}
          ongoing={ongoing}
          done={done}
        />
        <MemberCard
          photo={photo}
          name={name}
          rol={rol}
          ongoing={ongoing}
          done={done}
        />
        <MemberCard
          photo={photo}
          name={name}
          rol={rol}
          ongoing={ongoing}
          done={done}
        />
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
