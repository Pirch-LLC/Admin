import React from "react";
import wright from "../../assets/icon/wright.svg";
import { Button } from "primereact/button";

export default function Plancard({ plans = [], buttonConfigs = [] }) {
  return (
    <div className="grid mt-5">
      {plans.map((plan, index) => {
        const config = buttonConfigs[index] || {};
        const label = config.label || plan.buttonLabel || "Get Started";
        const className = config.className || "bg-dark-red";
        const isCurrentPlan = config.isCurrentPlan;

        return (
          <div key={index} className="col-12 md:col-4 p-2">
            <div className="p-4 border-rounded bg-light-color h-full flex flex-column justify-content-between">
              <div>
                <div className="flex justify-content-between align-items-center">
                  <h3 className="text-sm font-bold text-green text-left">
                    {plan.title}
                  </h3>
                  {isCurrentPlan && (
                    <p className="text-white text-sm p-1 bg-yellow-color border-rounded">
                      Current Plan
                    </p>
                  )}
                </div>
                <p className="text-4xl font-bold mt-2 mb-1 text-left">
                  {plan.price}
                  <span className="text-sm font-normal">{plan.period}</span>
                </p>
                <ul className="list-none p-0 mt-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex align-items-start">
                      <span className="text-green-500 mr-2">
                        <img src={wright} alt="" />
                      </span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                label={label}
                className={`${className} border-none border-rounded w-full justify-content-center`}
                onClick={plan.onClick}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
