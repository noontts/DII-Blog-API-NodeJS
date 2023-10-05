import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-20'>
        <div className='px-5 w-72'>
          Blog
        </div>

        <ul className="flex justify-center grow">
            <li className="px-4"><Link to={'/'} className="text-base">Home</Link></li>
            <li className="px-4"><Link to={'/post'} className="text-base">Post</Link></li>
            <li className="px-4"><Link href="#" className="text-base">Information</Link></li>
            <li className="px-4"><Link href="#" className="text-base">Blogs</Link></li>
        </ul>

        <div className="flex justify-center px-5 w-72">
          <Link className='mx-2 p-2 px-3' to={'/register'}>Sign up</Link>
          <Link className='border-solid border-2 p-2 px-3 rounded shadow-sm' to={'/login'}>Login</Link>
        </div>
    </nav>
  );
};

export default Navbar;
