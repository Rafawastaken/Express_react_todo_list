import { Route, Routes } from "react-router";

import AddTaskPage from "./pages/AddTaskPage/AddTaskPage";
import HomePage from "./pages/HomePage/HomePage";
import EditTaskPage from "./pages/EditTaskPage/EditTaskPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import UncompletedPage from "./pages/UncompletedPage/UncompletedPage";

import Layout from "./layout/layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/new-task" element={<AddTaskPage />} />
        <Route path="/edit-task" element={<EditTaskPage />} />
        <Route path="/uncompleted" element={<UncompletedPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
