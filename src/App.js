import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import Todo from "./components/Todo/Todo.js";
import LoadingModal from './components/Modals/LoadingModal';
import { useState } from "react";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login setUser={setUser} setLoading={setLoading} />} />
        <Route exact path="/signup" element={<SignUp setUser={setUser} setLoading={setLoading} />} />
        <Route exact path="/todo" element={<Todo user={user} setLoading={setLoading} />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
      {loading ? <LoadingModal /> : null}
    </div>
  );
}

export default App;
