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

export const fetchUserBlogs = async (userid) => {
  const response = await axios.get(`http://localhost:3000/api/v1/blogs?userId=${userid}`);
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
    date: '20/10/2023',
    authorID: blogs.author_id,
    title: blogs.title,
    content: blogs.content,
    type: "test",
    imageURL: blogs.image,
    category: "test"
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

export const register = async(data)=>{
  try {
    await axios.post('http://localhost:3000/api/v1/auth/register', data);
  } catch (error) {
    console.log(error)
  }
}

export const login = async(data)=>{
  try {
    return await axios.post('http://localhost:3000/api/v1/auth/login' , data);
  } catch (error) {
    console.log(error);
  }
}

export const fetchComment = async(blogsID)=>{
  const response = await axios.get(`http://localhost:3000/api/v1/blogs/${blogsID}/comments`);
  try {
    console.log("Comment Response:", response.data);
    return response.data
  } catch (error) {
    console.error("Error:", error);
  }
}

export const postComment = async(blogsID, commentsData)=>{
  const commentData = {
    author_id: commentsData.author_id,
    comment_content: commentsData.comment_content,
    date: commentsData.date,
  };
  try {
    await axios.post(`http://localhost:3000/api/v1/blogs/${blogsID}/comments`, commentData);
  } catch (error) {
    console.error("Error:", error);
  }
}