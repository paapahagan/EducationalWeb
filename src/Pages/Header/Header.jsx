import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function Header() {
  return (
    <div>
      <div className=" container mx-auto flex justify-center items-center gap-4 py-2 bg-orange-400 text-white">
        <h1>Free courses Sales End Soon. Get It Now</h1>
        <GoArrowRight />
      </div>
      <div className=" container mx-auto flex justify-between py-4  ">
        <div className="">
          <img src="public/Logo.svg" />
        </div>
        <div className="flex items-center gap-x-5 ">
          <Link to="/">SIGN UP</Link>
          <Link to="/login" className="px-4 py-2 bg-orange-400 rounded-lg">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
