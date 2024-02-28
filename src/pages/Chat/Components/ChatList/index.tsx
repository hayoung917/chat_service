import { Box, Divider, Heading, IconButton } from '@chakra-ui/react';
import { IoIosAdd } from 'react-icons/io';

const ChatList = () => {
  return (
    <Box>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        padding={'8px'}
        height={'48px'}
      >
        <Heading size={'sm'}>CHAT</Heading>
        <Box flex={1} />
        <IconButton aria-label={'add'} icon={<IoIosAdd />} />
      </Box>

      <Box>{'채팅 리스트'}</Box>
    </Box>
  );
};

export default ChatList;
