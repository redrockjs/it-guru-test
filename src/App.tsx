import './App.css'
import {Route, Routes} from "react-router";
import {Login, Goods} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/goods" element={<Goods/>}/>
    </Routes>
  )
}

export default App
