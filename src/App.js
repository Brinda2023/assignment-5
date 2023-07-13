import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/login"
import SignUp from "./components/signup"

function App() {
  return (
    <>
    <BrowserRouter>
    <SignUp/>
    </BrowserRouter>
    </>
  );
}

export default App;
