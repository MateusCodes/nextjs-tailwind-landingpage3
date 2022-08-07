import React, { useState, useEffect } from 'react';
import useMedia from '../Hooks/useMedia';
import Image from 'next/future/image';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileScreen = useMedia('(max-width: 640px)');

  useEffect(() => {
    if (!mobileScreen) {
      setMobileMenu(false);
    }
  }, [mobileScreen]);

  return (
    <header>
      <nav className="container mt-4 flex items-center justify-between py-4 sm:mt-12">
        <div className="py-1">
          <Image
            width={148}
            height={25}
            src="/logo-bookmark.png"
            blurDataURL="/logo-bookmark.png"
            placeholder="blur"
            alt="Bookmark Logo"
          />
        </div>
        <ul className="hidden flex-1 items-center justify-end gap-12 text-xs uppercase text-bookmarkBlue md:flex">
          <li>
            <a className="p-2" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="p-2" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="p-2" href="#contact">
              Contact
            </a>
          </li>
          <button
            type="button"
            className="rounded-md bg-bookmarkRed px-7 py-3 uppercase text-white"
          >
            Login
          </button>
        </ul>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${
            mobileMenu ? 'open' : ''
          } hamburger block focus:outline-none md:hidden`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        <ul
          className={`${
            mobileMenu
              ? 'absolute top-20 left-0 right-0 z-20 flex flex-col items-center justify-center gap-12 bg-white pb-2 text-xs uppercase text-bookmarkBlue transition duration-300'
              : 'absolute -top-96 left-0 right-0 z-20 flex flex-col items-center justify-center gap-12 bg-white pb-2 text-xs uppercase text-bookmarkBlue transition duration-300'
          }`}
        >
          <li>
            <a className="border-b border-gray-300 p-2" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="border-b border-gray-300 p-2" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="border-b border-gray-300 p-2" href="#contact">
              Contact
            </a>
          </li>
          <button
            type="button"
            className="rounded-md bg-bookmarkRed px-7 py-3 uppercase text-white"
          >
            Login
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
