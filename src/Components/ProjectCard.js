import React from "react";

const ProjectCard = ({ imageSrc, deployLink, sourceCode, tag }) => {
  return (
    <>
      <div className="project-card mb-[50px] flex flex-col items-center bg-[#CAD5E2] px-[30px] pt-[40px] pb-[30px] hover:shadow-2xl  lg:pb-[20px]">
        <div>
          <h1 className="text-[40px] font-[800] pb-[20px]">{tag}</h1>
        </div>
        <div>
          <img
            src={imageSrc}
            className="street h-[20rem] w-[35rem] "
            alt="project-1"
          />
        </div>

        <div className="links flex justify-between w-[85%] pt-[30px] text-[20px] font-[700] text-[#000] ">
          <a
            className="source hover:text-[#2F2E41] hover:underline"
            href={sourceCode}
            target="_blank"
          >
            Source Code
          </a>

          <a
            className="deployed hover:text-[#2F2E41] hover:underline"
            href={deployLink}
            target="_blank"
          >
            Deployed Link
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
