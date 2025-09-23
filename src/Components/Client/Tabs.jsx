import React from "react";

export default function Tabs() {
  const COLORS = __COLORS__;

  return (
    <section className="flex justify-around my-4 mx-4">
      <div
        className="flex flex-col items-center w-1/2 p-4 rounded-xl mr-2"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="dog"
          className="w-10 h-10"
        />
        <p className="mt-2 font-medium">Cachorro</p>
      </div>
      <div
        className="flex flex-col items-center w-1/2 p-4 rounded-xl ml-2"
        style={{ backgroundColor: COLORS.accent }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
          alt="cat"
          className="w-10 h-10"
        />
        <p className="mt-2 font-medium">Gato</p>
      </div>
    </section>
  );
}
