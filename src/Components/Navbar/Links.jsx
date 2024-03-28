import { NavLink } from "react-router-dom";
const Links = ({ myClasses }) => {
  return (
    <ul className={myClasses}>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-outline btn-success"
              : isPending
              ? "pending"
              : "py-3 font-semibold"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-outline btn-success"
              : isPending
              ? "pending"
              : "py-3 font-semibold"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-outline btn-success"
              : isPending
              ? "pending"
              : "py-3 font-semibold"
          }
        >
          Pages to read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-outline btn-success"
              : isPending
              ? "pending"
              : "py-3 font-semibold"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-outline btn-success"
              : isPending
              ? "pending"
              : "py-3 font-semibold"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
