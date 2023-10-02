import { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchAllBlogs } from "../services/blogs";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetchAllBlogs();
      setBlogs(data);
    };

    fetchBlogs();
  }, [blogs]);

  if (blogs.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-column align-items-center">
      <div>Home</div>
      <div className="flex flex-row flex-wrap justify-content-center">
        {blogs.map((blog, index) => (
          <Card key={index} CardObj={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
