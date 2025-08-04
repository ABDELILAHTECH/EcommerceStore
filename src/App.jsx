import Home from "./Pages/Home";
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Kids from "./Pages/Kids"
import Sports from "./Pages/Sports"
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
   
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/men" element={<Men />}/>
            <Route path="/women" element={<Women />}/>
            <Route path="/kids" element={<Kids />}/>
            <Route path="/sports" element={<Sports />}/>
        </Routes>
    </>
  )
}
