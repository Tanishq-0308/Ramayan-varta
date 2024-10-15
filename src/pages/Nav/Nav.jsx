import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function Nav() {
  const [menu, setMenu] = useState(false);
  const [chapter, setChapter] = useState(false);
  const togglebar = () => {
    setMenu(!menu);
    setChapter(false)
  };
  const togglechapter = () => {
    setChapter(!chapter);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,             // Scroll to the top of the page
      behavior: 'smooth', // Smooth scrolling
    });
  };
  return (
    <>
      <div className="bg-[#ffa600e3] z-10 flex justify-between items-center relative w-full ">
        <div>
          <img src={logo} class="h-[110px] ml-5" alt="" />
        </div>

        <ul className="flex text-xl mr-10 gap-16 font-bold uppercase font-martel max-[760px]:hidden">
        <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#ff3333]" : "text-white"
                } block py-2 pr-4 pl-3 duration-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              मुखपृष्ठम्
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#ff3333]" : "text-white"
                } block py-2 pr-4 pl-3 duration-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              अस्माकं विषये
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#ff3333]" : "text-white"
                } block py-2 pr-4 pl-3 duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              संपर्कः
            </NavLink>
          </li>
        </ul>

        <button
          class="text-black mr-5 transition-all max-[760px]:block hidden duration-500 ease-in-out"
          onClick={togglebar}
        >
          {!menu ? (
            <svg
              width="45px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              width="45px"
              height="64px"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          )}
        </button>
        <div className={`bg-gray-500 w-[350px] transition-all duration-500 ease-in-out top-[110px] ${menu? 'right-0':'hidden'} text-white font-martel flex flex-col gap-5 p-8  text-2xl absolute`}>
            <ul className="max-[760px]:block hidden">
              <li className="border-b py-3" onClick={togglebar}>
                <NavLink 
                  to="/"
                >
                मुखपृष्ठम्
                </NavLink>
              </li>
              <li className="border-b py-3" onClick={togglebar

              }>
                <NavLink 
                  to="/about"
                >
                अस्माकं विषये
                </NavLink>
              </li>
              <li className="border-b py-3" onClick={togglebar}>
                <NavLink 
                  to="/contact"
                >
                संपर्कः
                </NavLink>
              </li>
            </ul>
          {/* <div
            className="border-b flex justify-between items-center"
            onClick={togglechapter}
          >
            <p className=" flex justify-between">खंड </p>
            {!chapter ? (
              <svg
                width="23px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                fill="#fff"
                width="23px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M505.752,358.248L271.085,123.582c-8.331-8.331-21.839-8.331-30.17,0L6.248,358.248c-8.331,8.331-8.331,21.839,0,30.17 s21.839,8.331,30.17,0L256,168.837l219.582,219.582c8.331,8.331,21.839,8.331,30.17,0S514.083,366.58,505.752,358.248z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            )}
          </div>

          <ul className={`${chapter ? "block" : "hidden"} list-decimal pl-6`} onClick={togglebar}>
            <li className="p-3 border-b">
              <a href="#page1">विवेकचूडामणिः</a>
            </li>
            <li className="p-3 border-b">
              <a href="#page2">समसामयिक</a>
            </li>
            <li className="p-3 border-b">
              <a href="">सम्पादकी्यम</a>
            </li>
            <li className="p-3 border-b">
              <a href="">राजधानी-वार्ताः </a>
            </li>
            <li className="p-3 border-b">
              <a href="">. कला संस्कृति: </a>
            </li>
            <li className="p-3 border-b">
              <a href="">.एतिहासिक धरोहर:</a>
            </li>
            <li className="p-3 border-b">
              <a href="">वैदिक-ज्ञानम्</a>
            </li>
            <li className="p-3 border-b">
              <a href="">रामराज्य-वार्ता:</a>
            </li>
            <li className="p-3 border-b">
              <a href="">संस्कृत-वार्ताः</a>
            </li>
            <li className="p-3 border-b">
              <a href="">हुतात्मा</a>
            </li>
            <li className="p-3 border-b">
              <a href="">राष्ट्र-निर्माणम्</a>
            </li>
            <li className="p-3 border-b">
              <a href="">रामायणी-व्यक्तित्व-साक्षात्कारः</a>
            </li>
          </ul> */}
        </div>
        <div className="fixed left-4 bottom-7" onClick={scrollToTop}>
        <svg width="64px" height="64px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M26.221 16c0-7.243-5.871-13.113-13.113-13.113s-13.113 5.87-13.113 13.113c0 7.242 5.871 13.113 13.113 13.113s13.113-5.871 13.113-13.113zM1.045 16c0-6.652 5.412-12.064 12.064-12.064s12.064 5.412 12.064 12.064c0 6.652-5.411 12.064-12.064 12.064-6.652 0-12.064-5.412-12.064-12.064z" fill="#000000"> </path> <path d="M18.746 15.204l0.742-0.742-6.379-6.379-6.378 6.379 0.742 0.742 5.112-5.112v12.727h1.049v-12.727z" fill="#000000"> </path> </g></svg>
        </div>
      </div>
    </>
  );
}

export default Nav;
