import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1610433904560-360187c73596?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl font-bold max-w-3xl">
          Modesty, Elegance, and Faith in Every Thread
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-lg text-lg">
          we embrace the beauty of Islamic fashion, offering modest and stylish
          attire for men, women, and children.
        </p>

        <div className="mt-6 flex items-center gap-4 space-x-4 bg-white text-black p-3 rounded-md shadow-lg">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold"> Bashir </p>
            <p className="text-sm text-gray-600"> Manager </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
