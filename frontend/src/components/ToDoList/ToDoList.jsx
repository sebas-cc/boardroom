import React, { useState } from "react";
import "./ToDoList.css";
import ToDoCard from "../ToDoCard/ToDoCard";

const ToDoList = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  const hideList = () => {
    const memberList = document.getElementById(`list_${props.type}`);
    const viewButton = document.getElementById(`view_${props.type}`);

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
    <div className="toDoList" id={props.name}>
      <div id="task_settings">
        <h2>{props.type ? props.type : "Null"}</h2>
        <div id="options">
          <button id={`view_${props.type}`} onClick={hideList}>
            v
          </button>
        </div>
      </div>
      <div className="taskList" id={`list_${props.type}`}>
        <ToDoCard type={props.type} />
        <ToDoCard type={props.type} />
        <ToDoCard type={props.type} />
      </div>
    </div>
  );
};

export default ToDoList;
