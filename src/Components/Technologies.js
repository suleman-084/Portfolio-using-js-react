import React from "react";
import TechnologiesCard from "./TechnologiesCard";

const Technologies = () => {
  const Technology = [
    {
      imgSrc: "./images/javascript-1.svg",
      tag: "JavaScript",
    },
    {
      imgSrc: "./images/React-icon.svg.png",
      tag: "React",
    },
    {
      imgSrc: "./images/html1.svg",
      tag: "HTML",
    },
    {
      imgSrc: "./images/css3.png",
      tag: "CSS",
    },
    {
      imgSrc: "./images/git1.svg",
      tag: "Git",
    },
    {
      imgSrc: "./images/github1.svg",
      tag: "Git-Hub",
    },
    {
      imgSrc: "./images/node.png",
      tag: "Nodejs",
    },
    {
      imgSrc: "./images/bootstrap.png",
      tag: "Bootstrap",
    },
    {
      imgSrc: "./images/tailwind.png",
      tag: "Tailwind-CSS",
    },
  ];
  return (
    <>
      <div id="techy">
        <div className="text text-center mt-[30px]">
          <h1 className="font-[700] text-[60px]">Technologies</h1>
          {/* <p className="text-[25px] font-[500]">I'm familiar with</p> */}
        </div>
        <div className="flex justify-center flex-wrap gap-[40px]">
          {Technology?.map((obj) => {
            return (
              <TechnologiesCard
                key={obj.tag}
                imgSrc={obj.imgSrc}
                tag={obj.tag}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Technologies;
