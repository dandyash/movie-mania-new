import React from "react";
import useHeaderController from "./HeaderController";
import { Link, NavLink } from "react-router-dom";
import HeaderMenu from "../Menu";
import { MoonIcon, SunIcon, MagnifyingGlassCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const {
    theme,
    toggleTheme,
    requestToken,
    userData,
    profileBg,
    collapseMenuItems,
    isSearchBarViisible,
    toggleSearchBarVisibility,
    onSearchSubmit,
    searchVal,
    setSearchVal
  } = useHeaderController();
  return (
    <header
      className={`fixed inset-x-0 dark:bg-black/50 bg-white/50 backdrop-blur-3xl shadow-md z-40`}
    >
      <div className="container mx-auto flex items-center justify-between p-3">
        <Link to="/" className="flex items-center text-3xl uppercase">
          <p className="text-red-500 font-black">movie</p>
          <p className="font-light">mania</p>
        </Link>
        <div className="flex items-center gap-10 top-nav relative">
          <NavLink className='home-nav' to={`/`}>Home</NavLink>
          <NavLink className='movies-nav' to={`/movie`}>Movies</NavLink>
          <NavLink className='tv-nav' to={`/tv`}>TV Shows</NavLink>
          <span className="bg-red-500 absolute -inset-y-1 rounded-lg transition-all duration-300"></span>
        </div>
        <div className="flex items-center gap-5">
          <form className="flex items-center relative" onSubmit={onSearchSubmit}>
            <input type="text" name="searchBar" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} title="Press Enter to Search" placeholder="Search..." id="searchBar" className={`${isSearchBarViisible ? "w-80 px-3 py-1" : "w-0 px-0 py-0"} transition-all text-lg bg-red-500 outline-none placeholder:text-white/75 rounded-full`} />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center" onClick={() => { isSearchBarViisible ? toggleSearchBarVisibility(false) : toggleSearchBarVisibility(true) }}>{isSearchBarViisible ? <XCircleIcon height={40} /> : <MagnifyingGlassCircleIcon height={40} />}</button>
          </form>
          {userData ? (
            <HeaderMenu
              menuItems={collapseMenuItems}
              menuOpenerElement={
                <div
                  className={`group text-2xl uppercase w-9 font-medium text-white rounded-full aspect-square flex items-center justify-center`}
                  style={{ backgroundColor: profileBg }}
                >
                  {userData.username[0]}
                </div>
              }
            />
          ) : (
            <a
              href={`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location}`}
              className="bg-red-500 px-5 py-[6px] text-white font-medium rounded-md"
            >
              Login
            </a>
          )}
          <button
            onClick={toggleTheme}
            className="rounded-full p-1 flex items-center justify-center "
            title="Toggle Theme"
          >
            {theme !== "light" ? <MoonIcon height={30} /> : <SunIcon height={30} color="#EF4444" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
