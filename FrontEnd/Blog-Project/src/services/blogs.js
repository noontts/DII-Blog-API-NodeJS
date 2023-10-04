import axios from "axios";

export const fetchAllBlogs = async() =>{
    const data = await axios.get('http://localhost:3000/api/v1/blogs');
    return data.data;
};

export const fetchBlog = async( id )=>{
    const data = await axios.get(`http://localhost:3000/api/v1/blogs/${id}`);
    return data.data;
}