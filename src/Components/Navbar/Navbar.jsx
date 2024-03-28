import { IoMenu } from "react-icons/io5";
import Links from "./Links";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar px-5 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu />
          </div>
          <Links myClasses="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" />
        </div>
        <Link to="/" className="btn btn-ghost font-bold text-3xl">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Links myClasses="menu menu-horizontal px-1 gap-3" />
      </div>
      <div className="navbar-end space-x-3 ">
        <button className="text-white btn btn-success">Sign In</button>
        <button className="text-white btn btn-info">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
