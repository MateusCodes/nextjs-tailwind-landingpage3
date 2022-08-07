import React from 'react';

const FAQ = () => {
  return (
    <section data-aos="fade-left" className="bg-bookmarkWhite py-20">
      <div className="container">
        <div className="mx-auto px-2 sm:w-3/4 lg:w-5/12">
          <h1 className="text-center text-3xl text-bookmarkBlue">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-center text-bookmarkGrey">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        {/* FAQ 1 */}
        <div className="mx-auto mt-12 flex flex-col sm:w-3/4 lg:w-5/12">
          <div
            tabIndex="0"
            className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">
              What is a Bookmark?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos mollitia temporibus laborum placeat earum
                repellendus animi optio eum odit minus?
              </p>
            </div>
          </div>
        </div>
        {/* FAQ 2 */}
        <div className="mx-auto flex flex-col sm:w-3/4 lg:w-5/12">
          <div
            tabIndex="0"
            className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">
              How can I request a new browser?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos mollitia temporibus laborum placeat earum
                repellendus animi optio eum odit minus?
              </p>
            </div>
          </div>
        </div>
        {/* FAQ 3 */}
        <div className="mx-auto flex flex-col sm:w-3/4 lg:w-5/12">
          <div
            tabIndex="0"
            className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">
              Is there a mobile app?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos mollitia temporibus laborum placeat earum
                repellendus animi optio eum odit minus?
              </p>
            </div>
          </div>
        </div>
        {/* FAQ 4 */}
        <div className="mx-auto flex flex-col sm:w-3/4 lg:w-5/12">
          <div
            tabIndex="0"
            className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">
              What about other Chromium browsers?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos mollitia temporibus laborum placeat earum
                repellendus animi optio eum odit minus?
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn-purple btn mt-12 flex self-center hover:bg-bookmarkWhite hover:text-black"
          >
            More info
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
