import React from 'react';
import blackFirdayImg from '../assets/bf.png'
import bfOfertImg from '../assets/bfOfert.png'

const Banner = () => {
  return (
    <div>
      <p className="flex justify-center mt-10 uppercase font-bold text-6xl">
        Shop estore
      </p>
      <div className='flex justify-around'>
        <img src={blackFirdayImg} alt="blackFriday" className="w-[600px]" />
        <img src={bfOfertImg} alt="blackFriday" className="w-[500px]" />
      </div>
    </div>
  );
};

export default Banner;
