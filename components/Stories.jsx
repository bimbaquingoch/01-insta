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
    <div className='flex space-x-2 p-8 bg-transparent mt-4 border border-slate-200 dark:border-none dark:shadow-md dark:shadow-slate-400 rounded-md overflow-x-scroll mb-4'>
      {suggestions.map((profile) => (
        <Story key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default Stories;
