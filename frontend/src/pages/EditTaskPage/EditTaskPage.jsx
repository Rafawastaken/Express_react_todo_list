import PageTitle from "../../components/PageTitle/PageTitle";
import EditTaskForm from "../../components/EditTaskForm/EditTaskForm";

import { Box, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const EditTaskPage = () => {
  const nav = useNavigate();

  const { task_id } = useParams();

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} mx={"1em"}>
        <Box alignSelf={"end"}>
          <PageTitle title={`Edit Task - ${task_id}`} />
        </Box>
        <Button onClick={() => nav("/")}>Go Back</Button>
      </Flex>
      <EditTaskForm taskID={task_id} />
    </>
  );
};

export default EditTaskPage;
