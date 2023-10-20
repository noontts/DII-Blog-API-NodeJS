import { useEffect, useState,useContext } from "react";
import CardEdit from "../components/CardEdit";
import { fetchUserBlogs } from "../services/blogs";
import { AuthContext } from "../App";


const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { userAuth } = useContext(AuthContext);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetchUserBlogs(userAuth.id);
      setBlogs(data);
    };

    fetchBlogs();
  }, [userAuth.id]);

  if (blogs.length === 0) {
    return <div>Not Found Post!</div>
  }

  return (
    <div className="flex flex-col items-center">
      <div className="my-4 text-2xl font-bold text-center">
       My Blogs
      </div>
      
      {console.log(blogs)}
     
      <div className="flex flex-row flex-wrap justify-center">
        {blogs.map((blog, index) => (
          <CardEdit key={index} CardObj={blog} />
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
