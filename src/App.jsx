import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
