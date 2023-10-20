import { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchAllBlogs,fetchBlogsByCategory } from "../services/blogs";
import SearchBar from "../components/Seach";
import CategoryList from "../components/Category";
import { useLocation } from 'react-router-dom';



const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  useEffect(() => {
    const fetchBlogs = async () => {
      if (category && category !== 'all') {
        const data = await fetchBlogsByCategory(category);
        setBlogs(data);
      } else {
        const data = await fetchAllBlogs();
        setBlogs(data);
      }
    };

    fetchBlogs();
  }, [category]);

  if (blogs.length === 0) {
    return <div> Loading</div>
  }

  return (
    <div className="flex flex-col items-center">
      <div className="my-4 text-2xl font-bold text-center">
       Blogs
      </div>
      
      <SearchBar setData={setBlogs}/>
      <CategoryList />
      
      {console.log(blogs)}
     
      <div className="flex flex-row flex-wrap justify-center">
        {blogs.map((blog, index) => (
          <Card key={index} CardObj={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
