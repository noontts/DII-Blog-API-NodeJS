import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { postComment } from "../services/blogs";

const NewComment = ({ commentData, setComment, blogID }) => {
  const { userAuth } = useContext(AuthContext);
  const [content, setContent] = useState("");

  const onChangeContent = (e) => setContent(e.target.value);


  const submitComment = async (e) => {
    e.preventDefault();
    let data = {
        author_id : userAuth.user_id,
        comment_content : content,
        date : "2023-10-20",
    };
    try {
      await postComment(blogID,data);
    } catch (error) {
      console.log(error);
    }
    setComment([data,...commentData]);
    setContent("");
  }
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-black">
          Discussion ({commentData.length})
        </h2>
      </div>
      <form className="mb-6" onSubmit={submitComment}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border-2 border-gray-200 dark:bg-white dark:border-gray-700">
          <label className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            className="px-0 w-full h-{500px} resize-none text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-black dark:placeholder-gray-400 dark:bg-white"
            placeholder="Write a comment..."
            required
            value={content}
            onChange={onChangeContent}
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-green-600"
        >
          Post comment
        </button>
      </form>
    </>
  );
};

export default NewComment;
