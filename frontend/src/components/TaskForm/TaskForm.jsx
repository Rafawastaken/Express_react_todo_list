import { Box, FormControl, Input, Flex } from "@chakra-ui/react";

import { useState } from "react";
import { createTask } from "../../api/api";
import { useNavigate } from "react-router";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");

  const nav = useNavigate();

  const handleSubmit = () => {
    createTask(taskName);
    nav("/tasks");
  };

  return (
    <Box mt={"0.2em"} borderRadius={"5px"}>
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
                placeholder="Add new task"
                onChange={(e) => setTaskName(e.target.value)}
              />
            </Box>
            <Input
              w={"auto"}
              justifySelf={"flex-start"}
              type="submit"
              value={"Add"}
            />
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default TaskForm;
