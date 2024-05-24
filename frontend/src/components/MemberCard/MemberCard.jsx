import React from "react";
import "./MemberCard.css";
import imageNotFound from "../../assets/imageNotFound.png";

const MemberCard = (props) => {
  return (
    <div id="card">
      <h2>Projects</h2>
      <p>Ongoing: {props.ongoing ? props.ongoing : "NONE"}</p>
      <p>Done: {props.done ? props.done : "NONE"}</p>
      <div id="member">
        <img src={props.photo ? props.photo : imageNotFound} alt="member_photo"></img>
        <div id="information">
          <h4>{props.Name ? props.Name : "NULL"}</h4>
          <p>{props.rol ? props.rol : "NULL"}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
