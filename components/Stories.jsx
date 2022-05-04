import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setsuggestions] = useState([]);

  useEffect(() => {
    const newPeticion = [...Array(20)].map((_, i) => ({
      id: i,
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
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
