import { Box, Button, Heading, Textarea } from '@chakra-ui/react';

const ChatView = () => {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        padding={'8px'}
        gap={'8px'}
        height={'48px'}
      >
        <Button borderRadius={20}>U</Button>
        <Heading size={'sm'}>Someone</Heading>
      </Box>
      <Box display={'flex'} height={'calc(100% - 160px)'}>
        {'현재 대화영역'}
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row'}
        padding={'8px'}
        height={'140px'}
        alignItems={'center'}
      >
        <Textarea placeholder="Type here..." size="lg" resize={'none'} />
        <Box flex={1} />
      </Box>
    </>
  );
};

export default ChatView;
