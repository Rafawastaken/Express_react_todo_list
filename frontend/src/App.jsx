import { useState, useEffect } from "react";
import { getAllTasks } from "./api/api";

import Loading from "./components/Loading/Loading";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [tasks, setTasks] = useState({});
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    const tasksData = await getAllTasks();
    if (tasksData) {
      setLoading(false);
    }
    setTasks(tasksData);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>{loading ? <Loading /> : <TaskList tasklist={tasks.tasks} />}</div>
  );
};

export default App;
