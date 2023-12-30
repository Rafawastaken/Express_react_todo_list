import { Flex, Button, Box } from "@chakra-ui/react";

import { getAllTasks } from "../../api/api";

import TaskList from "../../components/TaskList/TaskList";
import PageTitle from "../../components/PageTitle/PageTitle";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const UncompletedPage = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const taskData = await getAllTasks();
        const incompleteData = taskData.filter((task) => !task.completed);
        setTasks(incompleteData);
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
          <PageTitle title={"Uncompleted"} />
        </Box>
        <Button onClick={() => nav("/new-task")}>Add New</Button>
      </Flex>
      {loading ? (
        <Box>Loading tasks...</Box>
      ) : tasks.length > 0 ? (
        <Box>
          <TaskList tasks={tasks} />
        </Box>
      ) : (
        <Box fontSize={"md"}>No uncompleted tasks</Box>
      )}
    </>
  );
};

export default UncompletedPage;
