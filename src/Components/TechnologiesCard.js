import React from "react";

const Technologies = ({ imgSrc, tag }) => {
  return (
    <>
      <div className="pt-[20px]">
        <div className="   ">
          <img className="h-[12rem] " src={imgSrc} alt="" />
        </div>
        <h2 className="text-[40px] font-[500] pt-[10px]  text-center">{tag}</h2>
      </div>
    </>
  );
};

export default Technologies;
