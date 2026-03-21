import React, { useState } from "react";

function ThemeSelector() {
  const [color, setColor] = useState("gray");
  return (
    <div className="flex justify-center flex-col items-center">
      <p className={`bg-${color}-500 w-40 h-40 mb-20`}></p>
      <div className="bg-gray-500  flex justify-between">
        <button
          onClick={() => setColor("blue")}
          className={`bg-blue-500 text-white px-4 py-2 rounded`}
        >
          Bleu
        </button>

        <button
          onClick={() => {
            setColor("red");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Rouge
        </button>

        <button
          onClick={() => {
            setColor("green");
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Vert
        </button>
      </div>
    </div>
  );
}

export default ThemeSelector;
