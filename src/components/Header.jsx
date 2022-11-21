import React from 'react';

const Header = () => {
  return (
    <div className="bg-black">
      <nav className="flex justify-around p-5 text-white">
        <div>
          <p className="uppercase text-3xl">Eshop</p>
        </div>
        <div className="flex gap-5 text-lg ">
          <p>Home</p>
          <p>Contacts</p>
          <p>Products</p>
          <input
            name="search"
            className="h-6 w-150 px-2 bg-yellow-400 border-solid border-2  border-orange-400 rounded-sm focus:bg-yellow-300 text-black placeholder-slate-500 "
            type="text"
            placeholder="Search"
          ></input>
          <button className="h-4">
            <i class="text-xl fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
