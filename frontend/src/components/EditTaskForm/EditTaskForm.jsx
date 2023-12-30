import { Flex, Box, Input, FormControl } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { getSingleTask, updateTasks } from "../../api/api";

const EditTaskForm = (taskID) => {
  const nav = useNavigate();

  const [taskname, setTaskname] = useState("");
  const [taskEdit, setTaskEdit] = useState({});
  const [loading, setLoading] = useState(true);
  const [taskStatus, setTaskStatus] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const taskData = await getSingleTask(taskID);
        setTaskEdit(taskData);
        setLoading(false);
        setTaskStatus(taskData.task.completed);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskStatus);
    updateTasks(taskID, taskname, taskStatus);
    nav("/tasks");
  };

  return (
    <Box mt={"0.2em"} borderRadius={"5px"}>
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl p={"1em"}>
            <Flex
              width={"100%"}
              height={"auto"}
              alignItems={"center"}
              gap={"1em"}
              justifyContent={"space-between"}
            >
              <Box width={"100%"}>
                <Input
                  placeholder={taskEdit.task.name}
                  onChange={(e) => {
                    setTaskname(e.target.value);
                  }}
                />
              </Box>
              <Input w={"auto"} type="submit" value={"Edit"} />
            </Flex>
          </FormControl>
        </form>
      )}
    </Box>
  );
};

export default EditTaskForm;
