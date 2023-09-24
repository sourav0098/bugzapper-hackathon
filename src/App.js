import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./Profile";
import { Login } from "./Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
