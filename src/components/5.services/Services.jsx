import React from "react";
// Icons
import { RiMailFill,  RiServiceFill } from "react-icons/ri";


const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">Contactanos para poder asesorarte</h1>
        <p className="text-[20px] text-gray-500">
          Siguenos en nuestras redes sociales para poder conocer mas del bienestar de tu compañero 
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribete
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiServiceFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Asesoramiento En Caninos</h3>
          <p className="text-gray-500">
            Conoce mas acerca de tu canino con dietas ideales segun su estado y condicion de salud
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiServiceFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Asesoramiento En Felinos</h3>
          <p className="text-gray-500">
          Conoce mas acerca de tu felino con dietas ideales segun su estado y condicion de salud
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiServiceFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Conocimiento De Fauna Silvestre</h3>
          <p className="text-gray-500">
          Conoce mas acerca de la fauna silvestre la importancia en nuestro ecosistema y di no al trafico de estos seres vivos 
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiServiceFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Conocimiento De Salud Animal</h3>
          <p className="text-gray-500">
            Conoce mas acerca de la salud en general y date cuenta que una mascota posee cuidados especificos los cuales lo ayudaran a tener una vida sana
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;