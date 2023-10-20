import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog, fetchComment } from "../services/blogs";
import CommentBox from "../components/CommentBox";
import NewComment from "../components/NewComment";

const BlogDetail = () => {
  const id = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await fetchBlog(id.id);
      const commentData = await fetchComment(id.id)
      setComment(commentData);
      setBlogDetail(data);
      console.log(data);
      console.log(commentData);
    };

    fetchDetail();
  }, [id.id]);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-3">
        <div className="text-4xl font-medium p-3">{blogDetail.title}</div>
        <div className="flex justify-start w-full p-3">
          <div>{blogDetail.author}</div>
          <div className="font-thin mx-3 text-gray-500">|</div>
          <div>{blogDetail.date}</div>
        </div>
        <img className="w-full h-[400px] object-cover" src={`http://localhost:3000/api/v1/blogs/images/${blogDetail.imageURL}`} loading="lazy"></img>
        <div className="p-3">{blogDetail.content}</div>
      </div>

      <div className="mt-10 bg-white  py-8 lg:py-16 antialiased">
        <div className="w-2xl mx-auto px-4">
            <NewComment commentData={comment} setComment={setComment}/>
            {comment.map((comment, index) => <CommentBox key={index} commentObj={comment}/>)}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
