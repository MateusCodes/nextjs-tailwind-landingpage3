import React from 'react';
import Image from 'next/future/image';

const Downloads = () => {
  return (
    <section data-aos="fade-right" id="pricing" className="mt-20 py-20">
      <div className="mx-auto px-2 sm:w-3/4 lg:w-5/12">
        <h1 className="text-center text-3xl text-bookmarkBlue">
          Download the extension
        </h1>
        <p className="mt-4 text-center text-bookmarkGrey">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favorite you’d like us to prioritize.
        </p>
      </div>

      <div className="container mt-16 grid max-w-screen-lg grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col rounded-md shadow-md lg:mb-16">
          <div className="flex flex-col items-center p-6">
            <Image
              width={102}
              height={100}
              src="/logo-chrome.png"
              blurDataURL="/logo-chrome.png"
              placeholder="blur"
              alt="Google Chrome Logo"
            />
            <h3 className="mt-5 mb-2 text-lg text-bookmarkBlue">
              Add to Chrome
            </h3>
            <p className="mb-2 font-light text-bookmarkGrey">
              Minimum Version: 62
            </p>
          </div>
          <hr className="border-b border-bookmarkWhite" />
          <div className="flex p-6">
            <button
              type="button"
              className="btn-purple btn flex-1 hover:bg-bookmarkWhite hover:text-black"
            >
              Add & Install Extension
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col rounded-md shadow-md lg:my-8">
          <div className="flex flex-col items-center p-6">
            <Image
              width={105}
              height={100}
              src="/logo-firefox.png"
              blurDataURL="/logo-firefox.png"
              placeholder="blur"
              alt="Google Chrome Logo"
            />
            <h3 className="mt-5 mb-2 text-lg text-bookmarkBlue">
              Add to Firefox
            </h3>
            <p className="mb-2 font-light text-bookmarkGrey">
              Minimum Version: 62
            </p>
          </div>
          <hr className="border-b border-bookmarkWhite" />
          <div className="flex p-6">
            <button
              type="button"
              className="btn-purple btn flex-1 hover:bg-bookmarkWhite hover:text-black"
            >
              Add & Install Extension
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col rounded-md shadow-md lg:mt-16">
          <div className="flex flex-col items-center p-6">
            <Image
              width={96}
              height={100}
              src="/logo-opera.png"
              blurDataURL="/logo-opera.png"
              placeholder="blur"
              alt="Google Chrome Logo"
            />
            <h3 className="mt-5 mb-2 text-lg text-bookmarkBlue">
              Add to Chrome
            </h3>
            <p className="mb-2 font-light text-bookmarkGrey">
              Minimum Version: 62
            </p>
          </div>
          <hr className="border-b border-bookmarkWhite" />
          <div className="flex p-6">
            <button
              type="button"
              className="btn-purple btn flex-1 hover:bg-bookmarkWhite hover:text-black"
            >
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
