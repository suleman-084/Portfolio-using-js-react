import React from "react";

function Herosection() {
  return (
    <>
      <div class="head1 bg-[#cac8eb] flex flex-col-reverse text-center pt-[40px] lg:flex lg:flex-col lg:pt-[0.75rem]  ">
        <div className="img1 pt-[30px] flex justify-center ">
          <img
            className="h-[18rem] lg:h-[20rem]"
            src="./images/main1.svg"
            alt="code"
          />
        </div>
        <div className="context">
          <h1 className="font-[1000] text-[50px] pt-[8px]">Mohammed Suleman</h1>
          <h1
            className="font-[800]  text-[28px] 
          "
          >
            Designer, Front-end Developer
          </h1>
          <p className="paragraph pt-[15px] px-[5rem] text-[18px] lg:px-[18rem] lg:pb-[28px]">
            I specialize in crafting beautifully simple designs and translating
            them into elegant code. With a deep passion for my work, I find joy
            in creating seamless and visually appealing digital experiences.
          </p>
        </div>
      </div>
    </>
  );
}

export default Herosection;
