import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
        Tenemos una gran variedad de servicios para tu compañer@
        </h1>
        <p className="text-xl text-gray-500">
          Puedes conocer todo de nuestros servicios en esta seccion
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="servicio1.jpg"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <p className="text-gray-500">Doc Vale - June 20, 2023</p>
          <h3 className="text-2xl font-bold">Consulta Veterinaria</h3>
          <p className="text-gray-500">
            Conoce nuestro servicio de consulta veterinaria general, la cual costa de un examen fisico, semiologico y de examenes
            para poder tener la disposicion de darte un diagnostico especifico en tu mascota
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="Servicio4.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Bruno - June 20, 2023</p>
            <h3 className="text-2xl font-bold">
              Servicio De Estetica Canina y Felina
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="servicio2.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Horacio - June 20, 2023</p>
            <h3 className="text-2xl font-bold">
              Servicio Vacunacion preventiva 
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="Servicio3.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Dante (examen) - May 20, 2023</p>
            <h3 className="text-2xl font-bold">
              Servicio toma de examenes
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="Servicio5.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Vaco (Lupe y Juan)- June 15, 2023</p>
            <h3 className="text-2xl font-bold">
              Servicio De Guarderia Canina
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;