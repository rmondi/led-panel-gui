"use client";

type MainType = {
  children: React.ReactNode;
}

const Main = ( { children }: MainType ) => {
  
  return (
    <main className="flex-grow flex flex-col">
      { children }
    </main>
  )
}

export default Main;