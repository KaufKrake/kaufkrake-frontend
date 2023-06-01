import React, { FC } from 'react';

const LandingPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Willkommen bei{' '}
          <a className="text-red-800" href="https://kaufkrake.de">
           Kaufkrake
          </a>
        </h1>

        <p className="mt-3 text-2xl text-red-600">
          Organisieren Sie Ihre Einkäufe mit unserer App effizienter!
        </p>

        <div className="flex flex-wrap justify-center mt-6 text-2xl">
          <a
            href="/signin"
            className="m-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Anmelden
          </a>
          <a
            href="/signup"
            className="m-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Registrieren
          </a>
        </div>
      </main>

      <footer className="w-full h-24 border-t flex justify-center items-center">
        <a
          className="flex items-center justify-center"
          href="https://your-app.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="ml-2 text-sm text-red-500">
            Kaufkrake
          </span>
        </a>
      </footer>
    </div>
  )
}

export default LandingPage
