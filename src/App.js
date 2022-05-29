import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
}

export default App;
