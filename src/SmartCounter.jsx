import React from "react";

function SmartCounter({ counter, increment, decrement }) {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 w-64 gap-4 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">compteur</h1>
      <p className="text-4xl font-extrabold">{counter}</p>
      <div className="flex gap-6 mt-4">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-full transition-colors duration-200"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-full transition-colors duration-200"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default SmartCounter;
