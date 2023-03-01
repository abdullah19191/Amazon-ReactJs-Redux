import React from "react";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

function Navbar() {
  return (
    <header className="bg-[#131921] w-[100%] h-[60px] fixed z-10 shadow">
      <nav className="m-auto flex justify-around items-center ">
        <div className="Left flex justify-around items-center lg:gap-60">
          <div className="navlogo mt-2 cursor-pointer container flex flex-wrap items-center justify-between">
            <img src="./img/amazon_PNG25.png" alt="" width="120px" />
          </div>
          <div className="nav_searchbar items-center justify-center hidden lg:flex " id="navbar-dropdown">
            <input type="search" className="w-full md:w-[400px] h-[40px] relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#febd29] focus:outline-none" placeholder="Search Your Products" aria-label="Search" aria-describedby="button-addon2" />
            <div className="search_icon">
              <button class="btn  px-4 py-3 bg-[#febd69] text-black font-medium text-xs leading-tight uppercase  shadow-md  hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
        <div className="Right flex justify-center items-center">
          <div className="nav_btn">
            <a href="#lll" className="text-[#fff] font-medium mr-2 border-2 border-[#131921] p-[8px] hover:border-white hover:border-current rounded-sm" >Sign in</a>
          </div>
          <div className="cart_btn flex ml-5 mt-[2px] mr-[4px] items-center p-2 hover:text-lg justify-between border-transparent hover:border-white  border-2">
            <Badge badgeContent={4} color="primary">
              < ShoppingCartIcon className="text-[#fff] " />
            </Badge>
            <p className="text-[#fff] font-medium mr-2">Cart</p>
          </div>
          <Avatar/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
