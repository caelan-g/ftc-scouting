import Link from "next/link";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="grid grid-rows-5 grid-cols-5 grid-flow-col h-screen place-items-start ml-20 px-6 py-12 sm:py-32 gap-2">
        <div className="row-start-1 row-span-1 bg-slate-100 shadow-md p-3 rounded-md h-full w-full col-span-1 text-center text-black text-bold text-3xl">
          Overview
        </div>
        <div className="p-4 rounded-lg grid place-content-center row-span-2 col-span-1 border-slate-400 border-solid">
          bobby
        </div>
      </main>
    </>
  );
}
