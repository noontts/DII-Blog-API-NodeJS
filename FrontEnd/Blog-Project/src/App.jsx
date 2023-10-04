import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostBlog from "./pages/PostBlog";
import BlogDetail from "./pages/BlogDetail";


function App() {
  return (
    <>
    <Navbar/>
      <div className="flex p-5 flex-wrap justify-center">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/post" element={<PostBlog/>}></Route>
          <Route path="/blogs/:id" element={<BlogDetail/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
