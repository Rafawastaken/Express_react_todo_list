import { Box, Flex } from "@chakra-ui/react";

const PageTitle = ({ title }) => {
  return (
    <Flex
      justifyContent={"center"}
      flexDirection={"column"}
      gap={"0.5em"}
      pb={"0.5em"}
    >
      <Box as="h2" fontSize={"xl"}>
        {title}
      </Box>
    </Flex>
  );
};

export default PageTitle;
