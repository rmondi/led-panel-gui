"use client";

import { Github } from 'lucide-react';

const Footer = () => {
  
  return (
    <footer className="h-12 bg-slate-700">
      <div className="flex justify-between items-center h-full px-5 sm:px-8 xl:px-0 xl:m-auto xl:max-w-5xl 2xl:max-w-7xl text-slate-200">
        <a
          className="transition duration-300 hover:opacity-70"
          href="https://rmondi.dev"
          target="_blank"
          title="Portfolio de Rémy Mondi"
        >
          { "Rémy Mondi" }
        </a>
        <a
          className="transition duration-300 hover:opacity-70"
          href="https://github.com/rmondi/led-panel-gui"
          target="_blank"
          title="Voir le code source sur Github"
        >
          <Github strokeWidth={ 1.5 } />
        </a>
      </div>
    </footer>
  )
}

export default Footer