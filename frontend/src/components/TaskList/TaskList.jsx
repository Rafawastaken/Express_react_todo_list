import { Table, Th, Thead, Tr, Tbody, Td, Button, Box } from "@chakra-ui/react";
import { toggleTask } from "../../api/api";

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
              <Td>{task.completed ? "Uncompleted" : "Completed"}</Td>
              <Td>
                <Button>Edit</Button>
              </Td>
              <Td>
                <Button
                  onClick={() => {
                    toggleTask(task._id, task.completed);
                    window.location.reload();
                  }}
                >
                  {task.completed ? "Finish" : "Undone"}
                </Button>
              </Td>
              <Td>
                <Button>Remove</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TaskList;
