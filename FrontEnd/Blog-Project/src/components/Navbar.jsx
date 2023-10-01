import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className="flex justify-content-center align-items-center h-20">
            <li className="px-4"><Link to={'/'} className="text-lg">Home</Link></li>
            <li className="px-4"><Link to={'/post'} className="text-lg">Post</Link></li>
            <li className="px-4"><Link href="#" className="text-lg">Information</Link></li>
            <li className="px-4"><Link href="#" className="text-lg">Blogs</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
