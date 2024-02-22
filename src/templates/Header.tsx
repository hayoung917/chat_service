import { Box, Heading, Icon } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

const Header = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"16px"}
      padding={"12px 32px"}
      borderBottom={`1px solid #DEE3E9`}
      style={{
        background: "#FFFFFF",
      }}
    >
      <Heading>{"SAY TALK"}</Heading>
      <Box flex={1} />
      <Icon as={MdStar}></Icon>
    </Box>
  );
};

export default Header;
