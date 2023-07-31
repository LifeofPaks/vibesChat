import "./App.css";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="login" element={ <Login />}/>
      </Routes>
    </div>
  );
}

export default App;
