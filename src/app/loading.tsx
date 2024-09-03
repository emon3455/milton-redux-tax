import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-base-200 ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-900"></div>
    </div>
  );
};

export default Loading;
