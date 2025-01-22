import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserDetail from "../pages/UserDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
};

export default Router;
