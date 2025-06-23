import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TestStart from "./pages/TestStart";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children, redirectPath }) => {
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  return isAuthenticated ? children : <Navigate to={`/login?redirect=${redirectPath}`} replace />;
};

const App = () => {
  return (
    <Router>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar closeOnClick />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notes" element={<Notes />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute redirectPath="/profile">
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/test/start"
          element={
            <PrivateRoute redirectPath="/test/start">
              <TestStart />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;