import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Trabajamos con los mejores Laboratorios
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img src="california.png" className="w-40" />
        <img src="cohasfarma.png" className="w-40" />
        <img src="Heelvet.jpg" className="w-40" />
        <img src="virbac.jpg" className="w-40" />
        <img src="bayervet.png" className="w-40" />
      </div>
    </div>
  );
};

export default Clients;