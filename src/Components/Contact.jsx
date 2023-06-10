import React from "react";

const Contact = () => {
  return (
    <>
      <div
        class="footer flex flex-row  mt-[30px] pt-[40px] pb-[40px] bg-[#5D55E1] flex flex-wrap"
        id="contact-section"
      >
        <div class="footer-logo">
          <img className="h-[6rem]" src="./images/logo3.svg" alt="footerlogo" />
        </div>
        <div class="social pl-[12rem] lg:pl-[30rem] pt-[20px]">
          <div class="soc-icons ">
            <a
              className="text-[40px] mr-[30px]"
              href="https://www.linkedin.com/in/mohammed-suleman-5796b1210"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              className="text-[40px] mr-[30px]"
              href="https://github.com/suleman-084"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              className="text-[40px] mr-[30px]"
              href="https://www.findcoder.io/u/suleman"
              target="_blank"
            >
              <ion-icon name="code-slash-outline"></ion-icon>
            </a>
            <a
              className="text-[40px] mr-[30px]"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
          <div class="last text-[20px] font-[800]">
            <h5>Mohammed Suleman</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
