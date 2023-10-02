import { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchAllBlogs } from "../services/blogs";


const Home = () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(()=>{
    const fetchBlogs = async() => {
      const data = await fetchAllBlogs();
      setBlogs(data);
    }

    fetchBlogs();
  },[blogs])


  if(blogs.length === 0){
    return <div>Loading...</div>
  }

  return (
    <>
      <div>Home</div>
      {
        blogs.map((blog, index)=> <Card key={index} CardObj={blog}/>)
      }
    </>
  );
};

export default Home;
