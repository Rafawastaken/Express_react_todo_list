import { Box } from "@chakra-ui/react";
import PageTitle from "../../components/PageTitle/PageTitle";

const HomePage = () => {
  return (
    <Box>
      <Box>
        <PageTitle title={"To-Do List"} />
      </Box>
      <Box>Simple Menu goes here</Box>
    </Box>
  );
};

export default HomePage;
