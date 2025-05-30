import React from "react";

function LoadingSpinner() {
  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
