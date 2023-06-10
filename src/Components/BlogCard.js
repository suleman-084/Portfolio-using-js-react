import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ Heading, Date, Deploylink }) => {
  return (
    <>
      <div className="blog1 pb-[20px]  bg-[#cccccc] px-[30px] py-[20px] mt-[25px] border-[2px] border-solid border-[#A19DE7] hover:shadow-2xl lg:w-[40%] ">
        <h1 className="font-bold text-[35px]">{Heading}</h1>
        <p className="text-[20px] font-[600] px-[6px]">{Date}</p>
        <Link to={Deploylink} target="_blank">
          <button className="bg-[#837EEB] px-[30px] py-[10px] rounded-[10px] hover:bg-[#4e49d8] mt-[30px] hover:text-[20px] hover:font-[700]">
            Read Blog
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
