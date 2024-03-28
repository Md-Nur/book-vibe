import { IoMenu } from "react-icons/io5";
import Links from "./Links";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 px-5 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu />
          </div>
          <Links myClasses="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" />
        </div>
        <a className="btn btn-ghost font-bold text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Links myClasses="menu menu-horizontal px-1 gap-3" />
      </div>
      <div className="navbar-end space-x-3 ">
        <a className="text-white btn btn-success">Sign In</a>
        <a className="text-white btn btn-info">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
