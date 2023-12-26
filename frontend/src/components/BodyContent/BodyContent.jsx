import { Box, Flex } from "@chakra-ui/react";

const BodyContent = ({ title, children }) => {
  return (
    <Box height={"72vh"} width={"full"}>
      <Flex
        height={"100%"}
        alignItems={"start"}
        justifyContent={"center"}
        mt={"1em"}
      >
        <Box
          backgroundColor={"#1f2240"}
          width={"80%"}
          height={"auto"}
          pt={"0.5em"}
          pb={"1em"}
          borderRadius={"0.5em"}
          overflow={"hidden"}
          textAlign={"center"}
          border={"1px solid #383e73"}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default BodyContent;
