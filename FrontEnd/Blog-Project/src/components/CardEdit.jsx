import { Link, useNavigate } from "react-router-dom";
import { deleteBlog } from "../services/blogs";
import { useState,useEffect } from "react";

const CardEdit = ({ CardObj }) => {

  const navigate = useNavigate();

  const onDelete = async(postId)=>{
    await deleteBlog(postId);
    navigate('/');
  }

  const onEdit = async(postId)=>{
    navigate(`/my-blogs/${postId}`, {replace:true, state:{CardObj}});
  }

  return (
    <>
      <div className="relative flex flex-col items-center justify-evenly w-96 rounded-2 m-4 border-solid border-1 p-4 shadow-md hover:shadow-lg">
        <button onClick={() => onDelete(CardObj.id)} className="absolute top-2 right-2 inline-flex items-center py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>

        <button onClick={() => onEdit(CardObj.id)}className="absolute top-2 right-12 inline-flex items-center py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 ml-2" fill="none" viewBox="0 0 46 46" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M38.657 18.536l2.44-2.44c2.534-2.534 2.534-6.658 0-9.193-1.227-1.226-2.858-1.9-4.597-1.9s-3.371.675-4.597 1.901l-2.439 2.439L38.657 18.536zM27.343 11.464L9.274 29.533c-.385.385-.678.86-.848 1.375L5.076 41.029c-.179.538-.038 1.131.363 1.532C5.726 42.847 6.108 43 6.5 43c.158 0 .317-.025.472-.076l10.118-3.351c.517-.17.993-.463 1.378-.849l18.068-18.068L27.343 11.464z"></path>
          </svg>
        </button>
        

        <img
          src={`http://localhost:3000/api/v1/blogs/images/${CardObj.imageURL}`}
          alt=""
          className="rounded-2 object-cover"
          loading="lazy"
        />

        <div className="font-bold py-2">
          <Link to={`/blogs/${CardObj.id}`}>{CardObj.title}</Link>
        </div>
        <div className="flex align-items-center justify-content-center py-4 text-gray-400">
          {CardObj.date}
        </div>
        <p className="line-clamp-5">{CardObj.content}</p>
      </div>
    </>
  );
};

export default CardEdit;
