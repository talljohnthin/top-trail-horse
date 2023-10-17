import classNames from "classnames";
import Link from "next/link";
import Logo from "../../assets/images/logo.svg";
import { jost } from "../../utils/fonts";
import Image from "../image";
import Wrapper from "../Wrapper";
import Button from "../buttons/Button";
import { useState } from "react";

const NAV_HEADER = [
  {
    title: "How It Works",
    url: "/",
  },
  {
    title: "Affiliates",
    url: "/",
  },
  {
    title: "Leader Boards",
    url: "/",
  },
  {
    title: "News",
    url: "/",
  },
  {
    title: "Store",
    url: "/",
  },
];

interface PageNavigationProps {}

const PageNavigation = ({}: PageNavigationProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleHamburger = (e: any) => {
    e.preventDefault();
    setOpen((prevState) => !prevState);
  };

  return (
    <nav
      key="navigation"
      className={classNames(
        `${jost.variable} font-sans`,
        "navigation",
        "fixed w-full top-0 z-50 h-22 xl:h-24 transition-all bg-white"
      )}
    >
      <div className="relative z-10">
        <Wrapper>
          <div className="flex justify-between items-center py-6 px-4 xl:px-10">
            <div className="flex justify-start">
              <Link href="/" className="w-[191px] md:w-[250px]">
                <Image
                  className=" w-full md:max-w-min"
                  src={Logo}
                  alt="main logo"
                />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <div className="order-2 lg:order-1 lg:hidden">
                <button
                  onClick={handleHamburger}
                  className="navbar-burger bg-brand-gray w-[35px] h-[35px] rounded-full flex items-center justify-center"
                  aria-label="Toggle Navigation"
                >
                  <svg
                    className="text-brand-darkgray block h-5 w-5"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <div className="hidden order-1 lg:order-2 lg:flex sm:mr-4 lg:mr-0">
                <div className="flex items-center space-x-6 xl:space-x-8">
                  <Link
                    href="/"
                    className="text-base font-medium text-brand-red"
                  >
                    Login
                  </Link>
                  <Button>Join Now</Button>
                </div>
              </div>
              <ul className="hidden lg:ml-auto mr-6 xl:mr-12 lg:flex lg:items-center space-x-6 xl:space-x-12">
                {NAV_HEADER &&
                  NAV_HEADER.map((link, index) => {
                    return (
                      <li key={"nav_header_" + index}>
                        <Link className="text-base font-medium" href={link.url}>
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </Wrapper>

        <div
          className={classNames(
            "navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50",
            !isOpen && "pointer-events-none"
          )}
        >
          <div
            className={classNames(
              "navbar-backdrop fixed inset-0 bg-black transition-opacity duration-300",
              !isOpen ? "opacity-0" : "opacity-75"
            )}
            onClick={handleHamburger}
          ></div>
          <nav
            className={classNames(
              "relative transition-all duration-500 flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto",
              !isOpen && "-translate-x-[100%]"
            )}
          >
            <div className="flex items-center mb-8">
              <Link
                className="mr-auto text-lg font-semibold leading-none "
                href="/"
                onClick={handleHamburger}
              >
                <Image className="w-[191px]" src={Logo} alt="main logo" />
              </Link>
              <button
                onClick={handleHamburger}
                className="navbar-close bg-brand-gray w-[35px] h-[35px] rounded-full flex items-center justify-center"
              >
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {NAV_HEADER &&
                  NAV_HEADER.map((link, index) => {
                    return (
                      <li key={"nav_header_" + index}>
                        <Link
                          className="block p-4 py-3 text-base font-medium hover:opacity-90 rounded transition-all"
                          href={link.url}
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="flex flex-col items-center space-y-3">
                <Link href="/" className="text-base font-medium text-brand-red">
                  Login
                </Link>
                <Button className="w-full">Join Now</Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default PageNavigation;
