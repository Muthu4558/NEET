import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import TestStart from "./pages/TestStart";
import AdminCreateTest from "./pages/AdminCreateTest";
import PhysicsNotes from "./pages/PhysicsNotes";
import ChemistryNotes from "./pages/ChemistryNotes";
import BiologyNotes from "./pages/BiologyNotes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  const location = useLocation();
  return isAuthenticated ? children : <Navigate to={`/login?redirect=${location.pathname}`} replace />;
};

const App = () => {
  return (
    <Router>
      <ToastContainer position="bottom-left" autoClose={3000} hideProgressBar closeOnClick />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/physics" element={<PhysicsNotes />} />
        <Route path="/notes/chemistry" element={<ChemistryNotes />} />
        <Route path="/notes/biology" element={<BiologyNotes />} />
        <Route path="/admin/create-test" element={<AdminCreateTest />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/test/start/:id"
          element={
            <PrivateRoute>
              <TestStart />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;