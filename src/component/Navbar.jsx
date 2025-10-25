import React, { useContext, useState } from "react";
import logo from "../assets/Group 1330.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().catch((err) => console.log(err.message));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/destination?search=${search}`);
      setSearch("");
    }
  };

  return (
    <nav>
      <div className="parent-div w-11/12 mx-auto flex justify-around items-center py-4">
        <div className="left-logo">
          <img className="w-28" src={logo} alt="" />
        </div>

        {/* ✅ Search Bar */}
        <form onSubmit={handleSearch} className="search-bar">
          <label className="input text-black flex items-center gap-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-black bg-transparent outline-none"
              type="search"
              required
              placeholder="Search destination..."
            />
          </label>
        </form>

        {/* Right Side Links */}
        <div className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/destination">Destination</NavLink>
          <NavLink to="/booking">Booking</NavLink>

          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "https://i.postimg.cc/placeholder.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
