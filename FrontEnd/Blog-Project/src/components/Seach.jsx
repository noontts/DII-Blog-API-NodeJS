const SearchBar = () => {
  return (
   
      <div className="max-w-full">

  <div className="flex space-x-4 w-full">
    <div className="flex rounded-md overflow-hidden w-full">
      <input type="text" className="w-full rounded-md rounded-r-none" />
      <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md ">Search</button>
    </div>

    <button className="border-solid border-2 p-2 px-3 rounded shadow-sm px-6 text-lg font-semibold py-4 rounded-md">+</button>
  </div>

</div>

  );
};

export default SearchBar;
