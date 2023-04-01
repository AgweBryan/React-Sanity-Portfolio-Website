import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex  items-center">
          <NavLink
            to="/React-Sanity-Portfolio-Website/"
            exact
            className={({ isActive }) =>
              `inline-flex items-center py-6 px-3 mr-4  hover:text-green-800 text-3xl font-bold font-amatic tracking-widest uppercase  ${
                !isActive && "text-red-100"
              } ${isActive && "text-white"}`
            }
          >
            Agwemedia
          </NavLink>

          <NavLink
            to="/React-Sanity-Portfolio-Website/posts"
            className={({ isActive }) =>
              `inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800 font-bold font-amatic tracking-widest ${
                !isActive && "text-red-200"
              } ${isActive && "text-red-100 bg-red-700"}`
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/React-Sanity-Portfolio-Website/projects"
            className={({ isActive }) =>
              `inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800 font-bold font-amatic tracking-widest ${
                !isActive && "text-red-200"
              } ${isActive && "text-red-100 bg-red-700"}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/React-Sanity-Portfolio-Website/about"
            className={({ isActive }) =>
              `inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800 font-bold font-amatic tracking-widest ${
                !isActive && "text-red-200"
              } ${isActive && "text-red-100 bg-red-700"}`
            }
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <Link to="#" className="mr-4 " target="_blank">
            <span className="fab fa-twitter  fa-2xl text-blue-400"></span>
          </Link>
          <Link to="#" className="mr-4 " target="_blank">
            <span className="fab fa-youtube  fa-2xl"></span>
          </Link>
          <Link to="#" className="mr-4 " target="_blank">
            <span className="fab fa-linkedin  fa-2xl text-blue-600 "></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
