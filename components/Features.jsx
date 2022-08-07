import React from 'react';
import Image from 'next/future/image';

const Features = () => {
  return (
    <section id='features' className="mt-20 bg-bookmarkWhite py-20 lg:mt-60">
      <div className="mx-auto px-2 sm:w-3/4 lg:w-5/12">
        <h1 className="text-center text-3xl text-bookmarkBlue">Features</h1>
        <p className="mt-4 text-center text-bookmarkGrey">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      {/* Feature 1 */}
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row">
          <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
            <Image
              width={536}
              height={346}
              src="/illustration-features-tab-1.png"
              blurDataURL="/illustration-features-tab-1.png"
              placeholder="blur"
              alt="Feature N°1"
              className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
            />
          </div>

          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmarkBlue">
              Bookmark in one click
            </h1>
            <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
            >
              More Info
            </button>
          </div>
        </div>
        <div
          className="            
            absolute
            -bottom-24
            -left-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-r-full
            bg-bookmarkPurple
            lg:block"
        ></div>
      </div>
      {/* Feature 2 */}
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row-reverse">
          <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
            <Image
              width={536}
              height={346}
              src="/illustration-features-tab-2.png"
              blurDataURL="/illustration-features-tab-2.png"
              placeholder="blur"
              alt="Feature N°1"
              className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
            />
          </div>

          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmarkBlue">Intelligent search</h1>
            <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to crawl through all of your bookmarks.
            </p>
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
            >
              More Info
            </button>
          </div>
        </div>
        <div
          className="            
            absolute
            -bottom-24
            -right-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-l-full
            bg-bookmarkPurple
            lg:block"
        ></div>
      </div>
      {/* Feature 3 */}
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row">
          <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
            <Image
              width={536}
              height={346}
              src="/illustration-features-tab-3.png"
              blurDataURL="/illustration-features-tab-3.png"
              placeholder="blur"
              alt="Feature N°1"
              className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
            />
          </div>

          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmarkBlue">Share your bookmarks</h1>
            <p className="my-4 text-center text-bookmarkGrey sm:w-3/4 lg:w-full lg:text-left">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmarkWhite hover:text-black"
            >
              More Info
            </button>
          </div>
        </div>
        <div
          className="            
            absolute
            -bottom-24
            -left-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-r-full
            bg-bookmarkPurple
            lg:block"
        ></div>
      </div>
    </section>
  );
};

export default Features;
