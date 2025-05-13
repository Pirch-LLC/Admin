import React from "react";
import Topbar from "../shared/Topbar";
import bgImg from "../../assets/images/flower-clip.png";

export default function AuthLayout({ children, heading, subheading }) {
  return (
    <div>
      <Topbar />
      <div className="m-0 auth-container flex justify-content-center">
        <div
          className="col-12 lg:col-6 flex flex-column justify-content-center align-items-center p-3 md:p-7 auth-right-box"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-6xl text-white lobster-regular font-normal">
            Empower Your Homeschool Journey with Smart Tools & Community Support
          </h1>
          <p className="text-white text-xl">
            Our all-in-one homeschooling app helps you plan, organize, and
            connect—with AI-powered lesson plans, activity schedulers, and a
            vibrant parent community.
          </p>
        </div>
        <div className="col-12 lg:col-6 p-3 md:p-6 flex justify-content-center align-items-center">
          <div className="bg-light-color w-28rem p-5 border-round-lg">
            {heading && (
              <h1 className="lobster-regular font-normal text-5xl text-dark mb-2">
                {heading}
              </h1>
            )}
            {subheading && <p className="sub-heading mt-3">{subheading}</p>}

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
