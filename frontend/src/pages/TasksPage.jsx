import Navbar from "../components/Navbar/Navbar";
import ToDoList from "../components/ToDoList/ToDoList";
import "./TasksPage.css";

const TasksPage = (props) => {
  return (
    <>
      <Navbar />
      <h1 id="member_name">{props.name ? props.name : "No Name"}</h1>
      <ToDoList type="Ongoing" />
      <ToDoList type="Done" />
    </>
  );
};

export default TasksPage;
