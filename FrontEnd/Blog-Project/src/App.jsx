import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostBlog from "./pages/PostBlog";
import BlogDetail from "./pages/BlogDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import { createContext, useState } from "react";
import EditPost from "./pages/EditPost";
import MyBlog from "./pages/MyBlog";

export const AuthContext = createContext(null);

function App() {
  const [userAuth, setUserAuth] = useState(null);

  return (
    <>
      <AuthContext.Provider value={{ userAuth, setUserAuth }}>
        <Navbar />
        <div className="flex p-5 flex-wrap justify-center">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/post" element={<PostBlog />}></Route>
            <Route path="/postEdit" element={<EditPost />}></Route>
            <Route path="/blogs/:id" element={<BlogDetail />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/edit" element={<EditProfile />}></Route>
            <Route path="/my-blogs" element={<MyBlog />}></Route>
          </Routes>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
