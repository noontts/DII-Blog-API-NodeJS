import { useEffect, useState } from "react";
import CardEdit from "../components/CardEdit";
import { fetchAllBlogs } from "../services/blogs";



const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetchAllBlogs();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  if (blogs.length === 0) {
    return <div> Loading</div>
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