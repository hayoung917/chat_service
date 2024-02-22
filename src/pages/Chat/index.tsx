import { Box } from "@chakra-ui/react";

const ChatPage = () => {
  return (
    <Box display={"flex"} width={"100%"} height={"100%"} overflow={"hidden"}>
      <Box width={"400px"}>
        <>{"chat list"}</>
      </Box>

      <Box width={"100%"} borderLeft={`1px solid #DEE3E9`}>
        <>{"current chat"}</>
      </Box>
    </Box>
  );
};

export default ChatPage;
