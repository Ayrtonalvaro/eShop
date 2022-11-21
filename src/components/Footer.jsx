import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white flex justify-around p-3 mt-5">
      <p className="uppercase text-6xl">eshopstore</p>
      <div className="flex">
        <ul className="text-xl text-slate-300">
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="my-auto">
        <ul className="flex flex-row gap-5 text-yellow-400 text-4xl">
          <li>
            <button>
              <i class="fa-brands fa-facebook"></i>
            </button>
          </li>
          <li>
            <button>
              <i class="fa-brands fa-square-instagram "></i>
            </button>
          </li>
          <li>
            <button>
              <i class="fa-brands fa-square-twitter"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
