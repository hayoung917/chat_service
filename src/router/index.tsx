import { Route, Routes } from "react-router-dom";
import ChatPage from "~/pages/Chat";
import MainTemplate from "~/templates";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<MainTemplate />}>
        <Route path="*" element={<ChatPage />} />
      </Route>
    </Routes>
  );
};
