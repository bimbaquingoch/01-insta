import faker from "@faker-js/faker";
import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const Suggestions = () => {
  const [sugerencia, setsugerencia] = useState([]);
  useEffect(() => {
    const newPeticion = [...Array(5)].map((_, i) => ({
      id: i,
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
    }));

    setsugerencia(newPeticion);
  }, []);
  return (
    <div className='mt-7'>
      <div className='flex justify-between'>
        <h1 className='capitalize text-slate-500'>sugerencias para ti</h1>
        <button className='capitalize font-semibold text-blue-500'>
          ver todo
        </button>
      </div>
      {sugerencia.map((sug) => (
        <Suggestion key={sug.id} personas={sug} />
      ))}
      <p className='max-w-xs text-slate-400 mt-5 cursor-pointer text-xs'>
        Información Ayuda Prensa API Empleo Privacidad Condiciones Ubicaciones
        Cuentas destacadas Hashtags Idioma
      </p>
      <p className='max-w-xs text-slate-400 mt-5 text-xs'>
        © 2022 INSTAGRAM FROM META
      </p>
    </div>
  );
};

export default Suggestions;
