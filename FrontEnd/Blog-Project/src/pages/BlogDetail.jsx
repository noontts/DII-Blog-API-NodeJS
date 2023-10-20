import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog, fetchComment } from "../services/blogs";
import CommentBox from "../components/CommentBox";
import NewComment from "../components/NewComment";

const BlogDetail = () => {
  const id = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  const [comment, setComment] = useState([]);

  const fetchDetail = async () => {
    try {
      const data = await fetchBlog(id.id);
      setBlogDetail(data);
    } catch (error) {
      console.error("Error fetching blog detail:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const commentData = await fetchComment(id.id);
      setComment(commentData);
      console.log(commentData);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
    fetchDetail();
  }, [id.id]);

  return (
    <>
      {blogDetail && (
        <>
          <div className="flex flex-col justify-center items-center p-3">
            <div className="text-4xl font-medium p-3">{blogDetail.title}</div>
            <div className="flex justify-start w-full p-3">
              <div>{blogDetail.author}</div>
              <div className="font-thin mx-3 text-gray-500">|</div>
              <div>{new Date(blogDetail.date).toDateString()}</div>
            </div>
            <img
              className="w-full h-[400px] object-cover"
              src={`http://localhost:3000/api/v1/blogs/images/${blogDetail.imageURL}`}
              loading="lazy"
            ></img>

            <div className="p-3 text-2xl mt-10">
              <p className="first-letter">{blogDetail.content}</p>
            </div>
          </div>

          <div className="mt-10 bg-white py-8 lg:py-16 antialiased">
            <div className="w-2xl mx-auto px-4">
              <NewComment
                commentData={comment}
                setComment={setComment}
                blogID={id.id}
              />
              {comment.map((comment, index) => (
                <CommentBox commentObj={comment} key={index} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetail;
