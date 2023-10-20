import { useSearchParams } from "react-router-dom";
import { fetchSearchBlogs,fetchAllBlogs } from "../services/blogs";

const SearchBar = ({setData}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('search') || '';

  const handleSearch = (async(e)=>{
    const category = new URLSearchParams(window.location.search).get('category');
    const search = e.target.value;

    if(search){
      setSearchParams({ search, category });
    }else{
      setSearchParams({ category });
      const res = await fetchAllBlogs(); // Fetch all data when search term is empty
      setData(res);
    }
  })

  const onSubmit = (async(e)=>{
    e.preventDefault();
    
    if (searchTerm) {
      const res = await fetchSearchBlogs(searchTerm);
      setData(res);
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          style={{ width: "1000px" }}
          placeholder="Search Title..."
          name="search"
          value={searchTerm} onChange={handleSearch}       
          required
        />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-600">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
