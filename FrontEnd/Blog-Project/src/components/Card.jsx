import { Link } from 'react-router-dom';

const Card = ({ CardObj }) => {
  return (
    <>
      <div className="w-96 rounded-2 m-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt=""
          className="rounded-2 object-cover"
        />
        <div className="font-bold py-2">
          <Link to={`/blogs/${CardObj.blog_id}`}>
            {CardObj.title}
          </Link>
        </div>
        <div className="flex align-items-center justify-content-center py-4 text-gray-400">
            {CardObj.date}
        </div>
        <p className="line-clamp-5">
          {CardObj.content}
        </p>
      </div>
    </>
  );
};

export default Card;
