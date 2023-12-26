import { Table, Th, Thead, Tr, Tbody, Td, Button, Box } from "@chakra-ui/react";

const TaskList = ({ tasks }) => {
  console.log(tasks);

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
                <Button>Finish</Button>
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
