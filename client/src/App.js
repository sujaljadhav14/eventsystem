import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserRoute from "./Routes/UserRoute";

import AdminRoute from "./Routes/AdminRoute";
import UserDashboard from "./User/UserDashboard";
import AdminDashboard from "./Admin/AdminDashboard";
import ForgotPassword from "./Pages/ForgotPassword";
function App() {
  return (
    <>
      {/* <HomePage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<UserRoute />}>
            <Route path="user" element={<UserDashboard />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
