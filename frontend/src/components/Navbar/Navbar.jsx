import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      height={"3em"}
      borderBottom={"2px solid #383e73"}
      px={"1em"}
      py={"2em"}
      backgroundColor={"#1f2240"}
    >
      <Box>
        <Link
          fontSize={"2xl"}
          fontWeight={"medium"}
          _hover={{
            textStyle: "none",
            color: "#fff",
            transition: "all 0.3s ease-in-out",
          }}
        >
          To-do List
        </Link>
      </Box>
      <Box>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"1em"}
        >
          <Link
            fontSize={"1em"}
            _hover={{
              textStyle: "none",
              color: "#fff",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Add Tasks
          </Link>
          <Link
            as={RouterLink}
            to={"/uncompleted"}
            fontSize={"1em"}
            _hover={{
              textStyle: "none",
              color: "#fff",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Uncompleted
          </Link>
          <Link
            as={RouterLink}
            to={"/tasks"}
            fontSize={"1em"}
            _hover={{
              textStyle: "none",
              color: "#fff",
              transition: "all 0.3s ease-in-out",
            }}
          >
            All Tasks
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
