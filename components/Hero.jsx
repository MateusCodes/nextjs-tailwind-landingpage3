import React from 'react';
import Image from 'next/future/image';

const Hero = () => {
  return (
    <section className="relative">
      <div className="container mt-14 flex flex-col-reverse items-center gap-12 lg:mt-28 lg:flex-row">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="mb-6 text-center text-3xl text-bookmarkBlue md:text-4xl lg:text-left lg:text-5xl">
            A Simple Bookmark Manager
          </h2>
          <p className="mb-6 text-center text-lg text-bookmarkGrey lg:text-left">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
            >
              Get it on Chrome
            </button>
            <button
              type="button"
              className="btn btn-white text-black hover:bg-bookmarkPurple hover:text-white"
            >
              Get it on Firefox
            </button>
          </div>
        </div>

        <div className="z-10 mb-10 flex flex-1 justify-center md:mb-16 lg:mb-0">
          <Image
            width={579}
            height={386}
            priority={true}
            src="/hero-bg.png"
            blurDataURL="/hero-bg.png"
            placeholder="blur"
            alt="Hero Background"
            className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
          />
        </div>
      </div>
      <div
        className="          
          bg-bookmarkPurple
          lg:
          absolute
          top-32
          right-0
          -bottom-28
          hidden
          h-80
          w-2/4
          overflow-hidden
          rounded-l-full
          md:block
          lg:-right-36"
      ></div>
    </section>
  );
};

export default Hero;
