import React, { useState } from "react";

function UserProfile({ name, age, profession }) {
  const [likes, setLike] = useState(0);
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 mt-6 text-center ">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-1">Age: {age} years</p>
      <p className="text-gray-600 mb-4">Profession: {profession}</p>
      <button
        onClick={() => {
          setLike(likes + 1);
        }}
        className="bg-green-500 px-10 py-2 rounded text-white bold "
      >
        Like {likes}
      </button>
    </div>
  );
}

export default UserProfile;
