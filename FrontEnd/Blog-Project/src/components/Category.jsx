import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const [categories] = useState(['sports', 'technology', 'food', 'fashion', 'travel', 'arts']);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full p-3 j">
      <ul className="flex flex-wrap justify-center px-8">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`rounded-md shadow-md p-4 m-2 cursor-pointer hover:shadow-lg transition duration-300 ${selectedCategory === category ? 'bg-blue-200' : ''}`}
          >
            <Link to={`/?category=${category}`} onClick={() => handleCategoryClick(category)}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  
  );
};

export default CategoryList;
