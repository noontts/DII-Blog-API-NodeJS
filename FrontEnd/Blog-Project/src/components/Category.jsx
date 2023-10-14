

const CategoryList = () => {
      const categories = ['sports', 'technology', 'food', 'fashion' , 'travel' ,'arts']; 

  return (
    <div className="w-full p-3 j">
      <ul className="flex flex-wrap justify-center px-8">
        {categories.map((category, index) => (
          <li
            key={index}
            className=" rounded-md shadow-md p-4 m-2 cursor-pointer hover:shadow-lg transition duration-300"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
