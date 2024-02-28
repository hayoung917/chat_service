import { Box } from '@chakra-ui/react';
import ChatList from './Components/ChatList';
import ChatView from './Components/ChatView';

const ChatPage = () => {
  return (
    <Box display={'flex'} width={'100%'} height={'100%'} overflow={'hidden'}>
      <Box width={'400px'}>
        <ChatList />
      </Box>

      <Box width={'100%'} borderLeft={`1px solid #DEE3E9`}>
        <ChatView />
      </Box>
    </Box>
  );
};

export default ChatPage;
