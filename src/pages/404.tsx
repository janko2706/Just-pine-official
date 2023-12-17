import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-green-800 px-2 text-sm">
        Page Not Found
      </div>
      <button className="mt-5">
        <div className="group relative inline-block text-sm font-medium text-green-800 transition-all ease-in-out  ">
          <Link
            href="/"
            className="relative block border border-current bg-black px-8 py-3 shadow shadow-green-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-green-800"
          >
            Go Home
          </Link>
        </div>
      </button>
    </main>
  );
};

export default Index;
