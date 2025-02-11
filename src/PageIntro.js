import React from "react";

function PageIntro({ title, description }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-md shadow-md mb-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
}

export default PageIntro;