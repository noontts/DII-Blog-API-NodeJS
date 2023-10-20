import { Link } from "react-router-dom";

const CardEdit = ({ CardObj }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly w-96 rounded-2 m-4 border-solid border-1 p-4 shadow-md hover:shadow-lg">
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
