import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostBlog from "./pages/PostBlog"

function App() {
  return (
    <>
    <Navbar/>
      <div className="flex p-5 flex-wrap justify-content-center">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/post" element={<PostBlog/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
