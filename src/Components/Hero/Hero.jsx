import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base-200 m-5 md:m-10 rounded-xl w-auto py-20 lg:mx-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="./BooksPic/book1.png" className="max-w-md" />
        <div>
          <h1 className="text-5xl font-bold playfair max-w-[525px]">
            Books to freshen up your bookshelf
          </h1>

          <Link to="/listed-books" className="btn btn-success my-6 text-white">
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
