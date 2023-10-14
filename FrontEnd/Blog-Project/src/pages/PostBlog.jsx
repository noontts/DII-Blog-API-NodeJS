import { useContext, useState } from "react";
import { postBlog, uploadImage } from "../services/blogs";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App";

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const { userAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);

  const submitPost = async (e) => {
    e.preventDefault();
    let data = {
      title: title,
      content: content,
      author : userAuth.username,
      author_id : userAuth.user_id,
      image: "",
    };
    if (file) {
      const imageData = new FormData();
      const fileName = Date.now() + file.name;
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

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
      <form className="w-100 h-auto" onSubmit={submitPost}>
        <input type="file" className="mt-10 block w-full text-sm text-white
          file:text-white
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-green-500 file:text-violet-700
          hover:file:bg-green-600
          mb-10" 
          onChange={(e) => setFile(e.target.files[0])}></input>
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
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-4xl sm:leading-6"
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
            style={{ height: '300px' }}
            className="block w-full resize-none rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-3xl"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-10 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
        >
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

export default PostBlog;
