import {
  Box,
  Button,
  Heading,
  Popover,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      gap={'16px'}
      height={'56px'}
      padding={'12px 32px'}
      borderBottom={`1px solid #DEE3E9`}
      style={{
        background: '#FFFFFF',
      }}
    >
      <Heading>{'SAY TALK'}</Heading>
      <Box flex={1} />
      <Popover>
        <PopoverTrigger>
          <Button borderRadius={20}>U</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent width={'auto'}>
            <Button>LOGOUT</Button>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
};

export default Header;
