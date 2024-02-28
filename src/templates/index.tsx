import { Box } from '@chakra-ui/react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainTemplate = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      overflow={'hidden'}
      width={'100%'}
      height={'100%'}
    >
      <Box
        display={'flex'}
        overflow={'hidden'}
        flex={1}
        flexDirection={'column'}
        width={'100%'}
        height={'100%'}
      >
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainTemplate;
