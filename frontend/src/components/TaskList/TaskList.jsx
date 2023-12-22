const TaskList = ({ tasklist }) => {
  console.log(tasklist);
  return (
    <div>
      <ul>
        {tasklist.map((task) => (
          <li key={task._id}>
            <input type="checkbox" checked={task.completed} readOnly />
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
