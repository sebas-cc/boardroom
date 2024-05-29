import "./ToDoCard.css";

const ToDoCard = (props) => {
  return (
    <div className="toDoCard" id={`toDoCard_${props.type}`}>
      <h3>{props.due ? props.due : "DD/MM/YYYY"}</h3>
      <h2>{props.name ? props.name : "No Name"}</h2>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
      {props.type === "Ongoing" && (
        <>
          <button>View</button>
          <button>Remove</button>
        </>
      )}
      {props.type === "Done" && <button>{props.completed ? props.completed : "DD/MM/YYYY"}</button>}
    </div>
  );
};

export default ToDoCard;
