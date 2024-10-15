import { useState } from "react";
import React from "react";
import Banner from "../Banner/Banner";
import Page1 from "../Page/Page1";
import Page2 from "../Page/Page2";
import Page3 from "../Page/Page3";
import Page4 from "../Page/Page4";
import Page5 from "../Page/Page5";
import Page6 from "../Page/Page6";
import Page7 from "../Page/Page7";
import Page8 from "../Page/Page8";
import Page9 from "../Page/Page9";
import Page10 from "../Page/Page10";
import Page11 from "../Page/Page11";
import Page12 from "../Page/Page12";
import Page13 from "../Page/Page13";
import Page14 from "../Page/Page14";
import Page15 from "../Page/Page15";
import Page16 from "../Page/Page16";

function Home() {
  const [menu, setMenu] = useState(false);
  const [chapter, setChapter] = useState(false);
  const togglechapter = () => {
    setChapter(!chapter);
    setMenu(!menu);
  };
  return (
    <>
      <div className="relative">
        <div
          className={`fixed z-10 flex items-center transition-all duration-500 ease-in-out cursor-pointer gap-7 py-2 px-4 rounded-xl bg-[#ff5f1a] ${
            menu ? "right-[-150px]" : "right-0"
          }  text-white font-semibold top-32
          `}
          onClick={togglechapter}
        >
          <p>खंड</p>
          <svg
            width="34px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#fff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="icomoon-ignore"> </g>{" "}
              <path
                d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"
                fill="#fff"
              >
                {" "}
              </path>{" "}
              <path
                d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"
                fill="#fff"
              >
                {" "}
              </path>{" "}
            </g>
          </svg>
        </div>
        <div
          className={`fixed h-[400px] w-[250px] transition-all duration-500 ease-in-out  ${
            chapter ? "right-0" : "right-[-250px]"
          }  bg-gray-600 text-white  rounded-xl p-4 overflow-auto custom-scrollbar top-32 `}
        >
          <div
            className="p-3 border-b flex items-center justify-between "
            onClick={togglechapter}
          >
            <p className="">खंड</p>
            <svg
              width="44px"
              viewBox="-3 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="icomoon-ignore"> </g>{" "}
                <path
                  d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                  fill="#fff"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                  fill="#fff"
                >
                  {" "}
                </path>{" "}
              </g>
            </svg>
          </div>
          <ul
            className={` list-decimal pl-6 transition-transform duration-500 ease-in-out`}
            onClick={togglechapter}
          >
            <li className="p-3 border-b">
              <a href="#page1">विवेकचूडामणिः</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page2">समसामयिक</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page3">सम्पादकी्यम</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page4">राजधानी-वार्ताः </a>
            </li>
            <li className="p-3 border-b">
              <a href="#page5">कला संस्कृति: </a>
            </li>
            <li className="p-3 border-b">
              <a href="#page6">मंदिर वार्ता:</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page7">एतिहासिक धरोहर:</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page8">वैदिक-ज्ञानम्</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page9">रामराज्य-वार्ता:</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page10">संस्कृत-वार्ताः</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page11">हुतात्मा</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page12">राष्ट्र-निर्माणम्</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page13">साक्षात्कारः श्रीरामकथावाचकः/संत</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page14">रामायणी-व्यक्तित्व-साक्षात्कारः</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page15">विश्वम्</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page16">रामायण अनुसन्धान परिषद् समाचारः</a>
            </li>
          </ul>
        </div>
        <Banner />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8/>
        <Page9/>
        <Page10/>
        <Page11/>
        <Page12/>
        <Page13/>
        <Page14/>
        <Page15/>
        <Page16/>
      </div>
    </>
  );
}

export default Home;
