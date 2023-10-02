import axios from "axios";

export const fetchAllBlogs = async() =>{
    const data = await axios.get('http://localhost:3000/api/v1/blogs');
    return data.data;
};