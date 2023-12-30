import {
  Table,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import { toggleTask, deleteTask } from "../../api/api";
import { Link as RouterLink } from "react-router-dom";

const TaskList = ({ tasks }) => {
  return (
    <Box mx={"1em"}>
      <Table
        variant="striped"
        colorScheme="blue"
        mt={"1em"}
        border={"2px solid #383e73"}
      >
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Task</Th>
            <Th>Status</Th>
            <Th>Edit</Th>
            <Th>Finish</Th>
            <Th>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task, index) => (
            <Tr key={task._id}>
              <Td>{index}</Td>
              <Td>{task.name}</Td>
              <Td>{!task.completed ? "Uncompleted" : "Completed"}</Td>
              <Td>
                <Link as={RouterLink} to={`/edit-task/${task._id}`}>
                  Edit
                </Link>
              </Td>
              <Td>
                <Button
                  onClick={() => {
                    toggleTask(task._id, task.completed);
                  }}
                >
                  {console.log(task.completed)}
                  {!task.completed ? "Finish" : "Undone"}
                </Button>
              </Td>
              <Td>
                <Button
                  onClick={() => {
                    deleteTask(task._id);
                  }}
                >
                  Remove
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TaskList;
