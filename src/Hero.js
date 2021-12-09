import React from "react";
import HeroImg from "../src/hero.jpg";
import PlayArrowIcon from "../node_modules/@mui/icons-material/PlayArrow";
function Hero() {
  return (
    <div className="flex mt-36 ">
      <div className=" w-1/2">
        <h2 className="text-gray-200 font-thin text-8xl text-left leading-none mb-10">
          Collect your <span className="text-yellow-400 ">&#9788;</span> own{" "}
          <span className="font-light">digital art</span>
        </h2>
        <p className="text-2xl text-left text-gray-400 font-light">
          Search among more than 10,000+ unique digital artwork's made by
          professional creators
        </p>
        <div className="flex items-center">
          <button className="mt-16 bg-gray-200 px-10 py-5 text-2xl font-medium text-gray-700">
            Get Started <span className="font-extrabold">&#8599;</span>
          </button>
          <div className="mt-16 ml-10 rounded-full border border-gray-700">
            <PlayArrowIcon className="ArrowPlay"></PlayArrowIcon>
          </div>
        </div>
        
        <hr className="mt-20 border-t-1 border-gray-700" />
        <div className="grid grid-cols-3 mt-8">
            <div className="flex flex-wrap gap-4 items-center">
                <h3 className="text-gray-300 text-4xl font-medium">42K</h3>
                <div className='w-6/12 '>
                    <p className="text-gray-500 leading-none text-xl font-light ">Our Active User</p>
                </div>                
            </div>
            <div className="flex flex-wrap gap-4 items-center">
                <h3 className="text-gray-300 text-4xl font-medium">4K</h3>
                <div className='w-6/12 '>
                    <p className="text-gray-500 leading-none text-xl font-light ">Professional Creators</p>
                </div>                
            </div>
            <div className="flex flex-wrap gap-4 items-center">
                <h3 className="text-gray-300 text-4xl font-medium">13K</h3>
                <div className='w-6/12 '>
                    <p className="text-gray-500 leading-none text-xl font-light ">Beautiful Artworks</p>
                </div>                
            </div>
        </div>

      </div>

      <div className="w-1/2 pl-20">
        <img className="w-full" src={HeroImg} />
      </div>
    </div>
  );
}

export default Hero;
