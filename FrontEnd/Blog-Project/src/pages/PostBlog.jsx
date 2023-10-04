import { useState } from "react";
import { postBlog } from "../services/blogs"

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);

  const submitPost = async(e) => {
    e.preventDefault();
    const data = {
      title : title,
      content : content
    }
    await postBlog(data);
    setTitle('');
    setContent('');
  };

  return (
    <>
      <div>PostBlog</div>
      <form className="w-100 h-auto" onSubmit={submitPost}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChangeTitle}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:border-sky-400"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={onChangeContent}
            required
            className="w-full p-2 border border-gray-300 rounded-md h-{500px} p-3 focus:border-sky-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default PostBlog;
