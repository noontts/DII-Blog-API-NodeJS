import { useState } from "react";
import { postBlog, uploadImage } from "../services/blogs";
import { Navigate, useNavigate } from "react-router-dom"

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);

  const submitPost = async (e) => {
    e.preventDefault();
    let data = {
      title: title,
      content: content,
      image: "",
    };
    if (file) {
      const imageData = new FormData();
      const fileName = Date.now();
      imageData.append("name", fileName);
      imageData.append("file", file);
      data.image = fileName;

      try {
        await uploadImage(imageData);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await postBlog(data);
    } catch (error) {
      console.log(error);
    }
    navigate('/');

    setFile(null);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div>PostBlog</div>
      <form className="w-100 h-auto" onSubmit={submitPost}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
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
