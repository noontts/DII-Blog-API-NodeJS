const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
 
];

const CategoryList = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition duration-300"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
