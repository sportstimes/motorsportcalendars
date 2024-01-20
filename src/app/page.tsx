import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="container">
        <div className="">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Motorsport <span className="text-red-600">Calendars</span>
            </h2>
            <h3 class='text-xl md:text-3xl mt-10 text-black'>Coming Soon</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
