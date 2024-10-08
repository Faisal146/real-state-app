import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../assets/user.png";
import { AuthContext } from "../../Providers/authProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/update-profile">Update Profile</NavLink>
          </li>
          <li>
            <NavLink to="/profile">User Profile</NavLink>
          </li> 
        </>
      )}
    </>
  );

  return (
    <div className=" bg-blue-300 ">
      <div className="navbar max-w-6xl mx-auto py-2 justify-between ">
        <div className="navbar-start  md:w-1/2 w-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden" style={{zIndex: 100}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="logo">
            <h1 className="text-2xl font-bold md:block hidden">
              <Link to='/'>Sweet Home</Link>
            </h1>
            <h1 className="md:text-md  md:hidden block text-sm font-bold ">
              <Link to='/'>Sweet <br/>Home</Link>
            </h1>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end md:w-1/2 w-auto">
          {user ? (
            <>
              {" "}
              {/* <div>{user.displayName}</div> */}
              <div className="tooltip tooltip-left tooltip-info" data-tip={user.displayName}>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
                 </div>
            
              <Link>
                <button className="btn btn-sm" onClick={logOut}>
                  Log Out
                </button>
              </Link>{" "}
            </>
          ) : (
            <ul className="menu menu-horizontal px-1 ">
              <li>
                
                <NavLink to="/login" className="  btn-primary">
                  Log In
                </NavLink>
              </li>
              <li>
                
                <NavLink to="/register" className=" ml-1 btn-secondary ">
                  Register
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
