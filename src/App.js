import React, { useContext } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './login/Login';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';

function App() {
  const {darkMode} = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  // const currentUser = true;
  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/login_page" />;
  }
  console.log(currentUser);
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<RequireAuth><Home /></RequireAuth>} />
              <Route path="login_page" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
