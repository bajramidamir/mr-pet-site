import React from "react";

const Divider = () => {
  return (
    <div className="relative flex py-5 px-8 items-center">
      <div className="flex-grow border-t border-accent"></div>
      <span className="flex-shrink mx-4 text-accent text-2xl">•</span>
      <div className="flex-grow border-t border-accent"></div>
    </div>
  );
};

export default Divider;
