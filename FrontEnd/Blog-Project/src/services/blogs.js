import axios from "axios";

export const fetchAllBlogs = async () => {
  const response = await axios.get("http://localhost:3000/api/v1/blogs");
  try {
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchBlog = async (id) => {
  const response = await axios.get(`http://localhost:3000/api/v1/blogs/${id}`);
  try {
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const postBlog = async (blogs) => {
  const postData = {
    title: blogs.title,
    author: "test",
    content: blogs.content,
    type: "test",
    category: "test",
    image: blogs.image
  };

  await axios
    .post(`http://localhost:3000/api/v1/blogs`, postData)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const uploadImage = async(data) =>{
  try {
    await axios.post('http://localhost:3000/api/v1/upload',data);
    console.log('File uploaded!');
  } catch (error) {
    console.log(error);      
  }
}
