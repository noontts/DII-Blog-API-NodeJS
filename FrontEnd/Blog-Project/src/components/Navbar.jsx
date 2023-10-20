import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

const Navbar = () => {
  const { userAuth, setUserAuth } = useContext(AuthContext);
  return (
    <nav className="flex justify-center items-center h-20">
      <div className="px-5 w-72">Blog</div>
      {console.log(userAuth)}
      <ul className="flex justify-center grow">
        <li className="px-4">
          <Link to={"/"} className="text-base">
            Home
          </Link>
        </li>
        {userAuth ? (
          <>
            <li className="px-4">
              <Link to={"/post"} className="text-base">
                Post
              </Link>
            </li>
            <li className="px-4">
              <Link to={"/my-blogs"} className="text-base">
                Blogs
              </Link>
            </li>
          </>
        ) : null}
      </ul>
      <div className="flex justify-center px-5 w-72">
        {userAuth ? (
          <div className="flex flex-row items-center">
            <div className="flex flex-col px-5 items-end">
              {userAuth.username}
              <Link onClick={() => setUserAuth(null)}>Logout</Link>
            </div>
            <Link>
              <img
                className="w-12 h-12 rounded-full"
                src={`http://localhost:3000/api/v1/blogs/images/${userAuth.profile_imgURL}`}
              ></img>
            </Link>
          </div>
        ) : (
          <>
            <Link className="mx-2 p-2 px-3" to={"/register"}>
              Sign up
            </Link>
            <Link
              className="border-solid border-2 p-2 px-3 rounded shadow-sm"
              to={"/login"}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
