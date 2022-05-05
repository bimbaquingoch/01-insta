import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useRouter } from "next/router";

const Feed = () => {
  const router = useRouter();
  // /auth/signin;

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
      <section className='col-span-2 xl:max-w-2xl xl:left-24 xl:relative'>
        <Stories />
        <Posts />
      </section>

      {/* <section className='hidden md:block'> */}
      <section className='ml-6 mt-10 hidden xl:inline-grid md:col-span-1'>
        {/* <div className='xl:absolute'> */}
        <div className='h-max w-max fixed'>
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;
