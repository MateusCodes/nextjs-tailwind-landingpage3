import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-bookmarkPurple py-20 text-white">
      <div className="container">
        <div className="mx-auto sm:w-3/4 lg:w-2/4">
          <p className="mb-8 text-center font-light uppercase">
            35,000+ already joined
          </p>
          <h1 className="text-center text-3xl">
            Stay up-to-date with what we’re doing
          </h1>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-md px-2 py-3 text-black focus:outline-none"
            />
            <button
              type="button"
              className="btn bg-bookmarkRed hover:bg-bookmarkWhite hover:text-black"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
