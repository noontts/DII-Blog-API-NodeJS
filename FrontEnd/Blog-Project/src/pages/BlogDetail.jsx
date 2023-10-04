import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../services/blogs";

const BlogDetail = () => {
  const id = useParams();
  const [blogDetail, setBlogDetail] = useState({});

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await fetchBlog(id.id);
      setBlogDetail(data);
      console.log(data);
    };

    fetchDetail();
  }, [id.id]);

  return (
    <div className="flex flex-column justify-content-center align-items-center p-3">
      <div className="text-4xl font-medium p-3">{blogDetail.title}</div>
      <div className="flex justify-start w-full p-3">
        <div>{blogDetail.author}</div>
        <div className="font-thin mx-3 text-gray-500">|</div>
        <div>{blogDetail.date}</div>
      </div>
      <img className="w-50" src={`http://localhost:3000/api/v1/blogs/images/7`} loading="lazy"></img>
      <div className="p-3">{blogDetail.content}</div>
    </div>
  );
};

export default BlogDetail;
