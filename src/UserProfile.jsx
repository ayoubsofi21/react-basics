import React from "react";

function UserProfile({ name, age, profession }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 mt-6 text-center ">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-1">Age: {age} years</p>
      <p className="text-gray-600 mb-4">Profession: {profession}</p>
    </div>
  );
}

export default UserProfile;
