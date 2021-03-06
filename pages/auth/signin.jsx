/* eslint-disable @next/next/no-img-element */
import { getProviders, signIn as signInProvider } from "next-auth/react";
import Head from "next/head";
import Phone from "../../components/Phone";

const SignIn = ({ providers }) => {
  return (
    <div className='bg-slate-200 h-screen grid grid-cols-1 lg:grid-cols-2 items-center mx-auto justify-center'>
      <Head>
        <title>Newstagram - Sign In</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <Header /> */}

      <Phone />
      {/* iniciar sesion */}
      <div className='flex flex-col justify-center items-center sm:bg-slate-100 h-max lg:w-max sm:rounded-xl pb-20 mx-auto lg:mx-0 sm:shadow-lg sm:shadow-blue-300 transition-all duration-1000 ease-in-out'>
        <div className='pt-10'>
          <img
            src='https://links.papareact.com/ocw'
            alt='instagram img'
            className='w-80'
          />
        </div>
        <p className='px-10 text-center text-md italic text-slate-400 pt-6 font-bold'>
          Esta web fue construida con propositos educativos.
        </p>
        <div className='py-4'>
          {Object.values(providers).map((provider) => (
            <div
              className='flex flex-col items-center my-4'
              key={provider.name}>
              <h1 className='capitalize mb-3 text-blue-400 font-bold'>
                iniciar sesion con:
              </h1>
              <button
                className='hover:bg-blue-400 p-3 rounded-md border-2 border-blue-400 hover:text-white font-bold transisiones'
                onClick={() =>
                  signInProvider(provider.id, { callbackUrl: "/" })
                }>
                {provider.name}
              </button>
            </div>
          ))}
        </div>
        <div>
          <h1 className='text-center text-slate-400 font-semibold mb-4'>
            Descarga la app
          </h1>
          <div className='grid grid-cols-2 gap-8 px-10 pt-3 '>
            <img
              className='w-48 cursor-pointer'
              src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_spanish_latinamerica_mexico.png/e2247c4f90de.png'
              alt='app store'
            />
            <img
              className='w-48 cursor-pointer'
              src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_spanish_latinamerica_mexico-es_LA.png/3cd8a27083c0.png'
              alt='play store'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return { props: { providers } };
}

export default SignIn;
