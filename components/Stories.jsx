import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setsuggestions] = useState([]);

  useEffect(() => {
    const peticion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    const newPeticion = peticion.map((newObj) => ({
      avatar: newObj.avatar,
      name: newObj.name,
      id: newObj.id,
      username: newObj.username,
    }));

    setsuggestions(newPeticion);
  }, []);

  return (
    <div className='flex space-x-2 p-3 md:p-6 md:bg-slate-100 shadow-slate-400 md:rounded-md overflow-x-scroll rounded-none bg-slate-100 md:mt-4 md:border md:border-slate-300'>
      {suggestions.map((profile) => (
        <Story key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default Stories;
