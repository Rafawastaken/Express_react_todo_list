import TaskForm from "../../components/TaskForm/TaskForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Box, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const AddTaskPage = () => {
  const nav = useNavigate();

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} mx={"1em"}>
        <Box alignSelf={"end"}>
          <PageTitle title={"Add new Task"} />
        </Box>
        <Button onClick={() => nav("/")}>Go Back</Button>
      </Flex>
      <TaskForm />
    </>
  );
};

export default AddTaskPage;
