import React from "react";

export default function ProductCard({ image, name, price }) {
  return (
    <div className="min-w-[160px] bg-white rounded-xl shadow-md p-3 mr-4 flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="w-full h-28 object-cover rounded-lg"
      />
      <h3 className="mt-2 text-sm font-semibold text-gray-800">{name}</h3>
      <p className="text-sm font-bold text-green-600">{price}</p>
    </div>
  );
}
