import { Route, Routes } from 'react-router-dom';
import ChatPage from '~/pages/Chat';
import MainTemplate from '~/templates';
import { RootRouterGuard } from './guards';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootRouterGuard />}>
        <Route element={<MainTemplate />} >

          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
