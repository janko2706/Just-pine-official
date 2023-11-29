import React from "react";

function CodeWindow() {
  return (
    <div className="flex h-[17.5rem] w-[30rem] flex-col rounded-2xl bg-gray-950">
      <div className="flex h-10 w-full items-center gap-2 rounded-t-2xl bg-gray-200 pl-3">
        <div className=" h-4 w-4 rounded-full bg-red-400"></div>
        <div className=" h-4 w-4 rounded-full bg-yellow-400"></div>
        <div className=" h-4 w-4 rounded-full bg-green-400"></div>
      </div>
      <div className="typewriter">
        <h1 className="mb-7  w-fit text-lg text-white">
          We believe that technology can change the world
        </h1>

        <p className="w-fit text-sm text-white">
          Thats why we are commited to delivering innovative
        </p>
        <p className="w-fit text-sm text-white">
          IT solutions to businesses of all sizes.
        </p>
        <p className="w-fit text-sm text-white">
          We will help you achieve your goals and thrive in a rapidly
        </p>
        <p className="w-fit text-sm text-white">evolving digital landscape</p>
      </div>
    </div>
  );
}

export default CodeWindow;
