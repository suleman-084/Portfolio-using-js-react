import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function Project({ isFromHome }) {
  const projects = [
    {
      tag: "Shopify Clone",
      imageSrc1: "./images/shopify.png",
      deployLink1: "https://name-conversion-program.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Shopify-Clone",
    },
    {
      tag: "Name Conversion",
      imageSrc1: "./images/conversion.png",
      deployLink1: "https://street-style-landing-page01.netlify.app/",
      sourceCode1:
        "https://github.com/suleman-084/javascript-assignments/tree/main/02nameconversion",
    },
    {
      tag: "RGB Conversion",
      imageSrc1: "./images/rgb.png",
      deployLink1: "https://rgb-conversion-program.netlify.app/#rgbThexGO",
      sourceCode1:
        "https://github.com/suleman-084/javascript-assignments/tree/main/08shade",
    },
    {
      tag: "QR Generator",
      imageSrc1: "./images/qr.png",
      deployLink1: "https://qr-generator-program.netlify.app/",
      sourceCode1:
        "https://github.com/suleman-084/javascript-assignments/tree/main/07codegeneratorapi",
    },
    {
      tag: "Rode Clone",
      imageSrc1: "./images/rode.png",
      deployLink1: "https://rode-clone-tailwindcss01.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/RODE-CLONE",
    },
    {
      tag: "Landing page",
      imageSrc1: "./images/p15.jpeg",
      deployLink1: "https://product-design14.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Product-design-Landingpage",
    },
    {
      tag: "Landing page",
      imageSrc1: "./images/p14.jpeg",
      deployLink1: "https://dance-homepage14.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Dance-Homepage",
    },
    {
      tag: "Landing page",
      imageSrc1: "./images/p13.jpeg",
      deployLink1: "hhttps://saas-page13.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/saas-landingpage13",
    },
    {
      tag: "Paytm Clone",
      imageSrc1: "./images/paytm.png",
      deployLink1: "https://paytmclone-01.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/paytm-clone",
    },
    {
      tag: "Todo App",
      imageSrc1: "./images/todo.png",
      deployLink1: "https://street-style-landing-page01.netlify.app/",
      sourceCode1: "https://todo-app-react-javascript.netlify.app/",
    },
    {
      tag: "Counter App",
      imageSrc1: "./images/counter.png",
      deployLink1: "https://calculator-application-calculation.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Basic-calculator",
    },
    {
      tag: "Basic Calculator",
      imageSrc1: "./images/calci1.png",
      deployLink1: "https://street-style-landing-page01.netlify.app/",
      sourceCode1: "https://food-restaurant-home-page02.netlify.app/",
    },
    {
      tag: "Stopwatch",
      imageSrc1: "./images/stopwatch.png",
      deployLink1: "https://stopwatch-using-js-html-css.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Stopwatch",
    },
    {
      tag: "Typing Game",
      imageSrc1: "./images/typing.png",
      deployLink1: "https://typing-game-program.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Typing-game",
    },
    {
      tag: "Color Game",
      imageSrc1: "./images/color.png",
      deployLink1: "https://color-game-using-js-html.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Color-Game",
    },
    {
      tag: "Palindrome Checker",
      imageSrc1: "./images/pali.png",
      deployLink1: "https://palindrome-checker-ujs-html.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/palindrome-checker",
    },
    {
      tag: "Word Count",
      imageSrc1: "./images/word.png",
      deployLink1: "https://word-count-usin-js-html.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Word-Count",
    },
    {
      tag: "Form Validation",
      imageSrc1: "./images/form.png",
      deployLink1: "https://form-validation-js-html.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Word-Count",
    },
    {
      tag: "Theme Changer",
      imageSrc1: "./images/theme.png",
      deployLink1: "https://dark-theme-js-react.netlify.app/",
      sourceCode1: "https://github.com/suleman-084/Theme-changer",
    },
  ];
  return (
    <>
      <div className="projects pt-[50px] " id="project-section">
        <h2 className="text-center text-[#2F2E41] text-[50px] font-[700] pb-[20px]">
          Projects
        </h2>

        <div className="flex flex-col  justify-center px-[30px] lg:flex lg:flex-row lg:gap-[50px] lg:flex-wrap">
          {projects?.slice(0, isFromHome ? 4 : projects.length)?.map((obj) => {
            return (
              <ProjectCard
                key={obj.imageSrc1}
                tag={obj.tag}
                imageSrc={obj.imageSrc1}
                deployLink={obj.deployLink1}
                sourceCode={obj.sourceCode1}
              />
            );
          })}
        </div>

        {isFromHome && (
          <div className="flex justify-center mt-[20px] pb-[20px]  text-bold ">
            <Link
              to="/Project"
              className="see-more-btn bg-[#837EEB] px-[30px] py-[10px] rounded-[10px] hover:bg-[#4e49d8]  hover:text-[20px] hover:font-[700]"
            >
              See More
            </Link>
          </div>
        )}
      </div>
      {!isFromHome && <Contact />}
    </>
  );
}

export default Project;
