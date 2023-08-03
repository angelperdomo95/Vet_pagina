import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        SALUD ANIMAL
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Veterinaria comprometida por el bienestar animal generando un aporte como 
          lo es el servicio de salud profesional, dandote calidad y confianza sobre la
          salud de tu mascota. brindamos el servicio humano-animal ideal
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
          <img
            src="https://img.freepik.com/foto-gratis/lindo-mascota-collage-aislado_23-2150007407.jpg?"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="https://img.freepik.com/foto-gratis/maravillosa-modelo-femenina-europea-escalofriante-cachorro-retrato-interior-chica-elegante-disfrutando-sesion-retratos-su-linda-mascota_197531-11031.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="https://img.freepik.com/foto-gratis/vista-adorable-perro-chihuahua-pasando-tiempo-dueno-masculino-casa_23-2149880052.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="https://img.freepik.com/fotos-premium/lindo-cachorro-beagle-sonriendo-sobre-fondo-azul-solido_280590-43.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Julian Angel</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            Medico Veterinario
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;