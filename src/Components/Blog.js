import React from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Blog = ({ isFromHomes }) => {
  const Blogs = [
    {
      Heading: "Information Of CSS Position",
      Date: "july 2022",
      Deploylink: "https://mohammedsuleman.hashnode.dev/css-selector",
    },
    {
      Heading: "CSS box model",
      Date: "Aug 2022",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/css-box-model-understanding-the-building-blocks-of-web-layouts",
    },
    {
      Heading: "The Power of Flexbox: Streamlining CSS Layouts",
      Date: "Aug 2022",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/title-the-power-of-flexbox-streamlining-css-layouts",
    },
    {
      Heading: "HTML Elements: A Beginner's GuideS",
      Date: "sep 2022",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/title-mastering-the-html-input-element-a-comprehensive-guide-with-examples",
    },
    {
      Heading: "Mastering CSS Grid: A Powerful Layout System for Web Design",
      Date: "sep 2022",
      Heading: "Positions in CSS",
      Date: "Aug 2022",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/title-mastering-css-grid-a-powerful-layout-system-for-web-design",
    },
    {
      Heading:
        " Responsive Web Design with Media Queries: Creating Adaptive User Experiences",
      Date: "oct 2022",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/title-responsive-web-design-with-media-queries-creating-adaptive-user-experiences",
    },
    {
      Heading:
        " Mastering JavaScript Arrays: Unlocking Powerful Data Manipulation",
      Date: "jan 2022",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/title-mastering-javascript-arrays-unlocking-powerful-data-manipulation",
    },
    {
      Heading:
        " Exploring JavaScript Objects: Harnessing the Power of Data Organization",
      Date: "feb 2023",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/title-exploring-javascript-objects-harnessing-the-power-of-data-organization",
    },
    {
      Heading: " Flow of code execution in javascript",
      Date: "may 2023",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/flow-of-code-execution-in-javascript",
    },
    {
      Heading:
        " Mastering JavaScript Functions: A Comprehensive Guide with Examples",
      Date: "june 2023",
      Deploylink:
        "https://mohammedsuleman.hashnode.dev/mastering-javascript-functions-a-comprehensive-guide-with-examples",
    },
  ];
  return (
    <>
      <h2 className="text-center text-[#2F2E41] text-[50px] font-[700] pb-[10px] mt-[20px]">
        Blogs
      </h2>
      {!isFromHomes && (
        <div className="flex justify-center">
          <img
            className="h-[25rem] mt-[20px] "
            src="./images/blog23.svg"
            alt="blog"
          ></img>
        </div>
      )}

      <div className="blog flex flex-col  px-[15%] flex-wrap lg:flex  lg:flex-row lg:justify-center lg:px-[0%] lg:gap-x-[60px] lg:gap-y-[30px] mb-[50px]">
        {Blogs?.slice(0, isFromHomes ? 4 : Blogs.length)?.map((obj) => {
          return (
            <BlogCard
              key={obj.Date}
              Heading={obj.Heading}
              Date={obj.Date}
              Deploylink={obj.Deploylink}
            />
          );
        })}
      </div>
      {isFromHomes && (
        <div className="flex justify-center mt-[20px] pb-[20px]  text-bold ">
          <Link
            to="/Blog"
            className="see-more-btn bg-[#837EEB] px-[30px] py-[10px] rounded-[10px] hover:bg-[#4e49d8]  hover:text-[20px] hover:font-[700]"
          >
            See More
          </Link>
        </div>
      )}
      {!isFromHomes && <Contact />}
    </>
  );
};

export default Blog;
