import { Flex, Button, Box } from "@chakra-ui/react";

import { getAllTasks } from "../../api/api";

import TaskList from "../../components/TaskList/TaskList";
import PageTitle from "../../components/PageTitle/PageTitle";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const TasksPage = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        // Delay de um segundo por request
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const taskData = await getAllTasks();
        setTasks(taskData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  });

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} mx={"1em"}>
        <Box alignSelf={"end"}>
          <PageTitle title={"To do List"} />
        </Box>
        <Button onClick={() => nav("/new-task")}>Add New</Button>
      </Flex>
      {loading ? (
        <Box>Loading tasks...</Box>
      ) : (
        <Box>
          <TaskList tasks={tasks} />
        </Box>
      )}
    </>
  );
};

export default TasksPage;
