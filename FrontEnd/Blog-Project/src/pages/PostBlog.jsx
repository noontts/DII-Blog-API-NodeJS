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
      author_id : userAuth.id,
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
      console.log(userAuth.id);
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
        <form className="w-100 h-auto flex flex-col" onSubmit={submitPost}>

          <div className="text-center">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected Image"
                  className="max-w-full mt-2"
                />
              )}
              <input
                type="file"
                className="mt-10 block w-full text-sm text-white file:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-violet-700 hover:file:bg-green-600 mb-10"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          <div className="mb-4" style={{ position: 'relative' }}>
            <label className="block mt-20 text-gray-700 text-sm font-bold mb-2">
              Title:
            </label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="mt-5 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                style={{ position: 'absolute', left: '0', top: '-15px' }} // Adjust the 'left' property as needed
              >
                Category <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>

              <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="Sports" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sports</a>
                  </li>
                </ul>
              </div>

              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={onChangeTitle}
                required
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-4xl sm:leading-6"
              />
            </div>
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

          <div className="text-center">
            <button
              type="submit"
              className="mt-10 mr-5 bg-green-500 text-white px-20 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
              style={{ justifyContent: 'flex-start' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>

  );
};

export default PostBlog;
