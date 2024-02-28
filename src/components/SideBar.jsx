import {
  BeakerIcon,
  HomeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideBar() {
  const icons = [
    {
      name: "home",
      component: HomeIcon,
      tooltip: "home",
      link: "/",
    },
    {
      name: "redbacks",
      component: BeakerIcon,
      tooltip: "redbacks log",
      link: "/redbacks",
    },
    {
      name: "greybacks",
      component: BeakerIcon,
      tooltip: "greybacks log",
      link: "/greybacks",
    },
    {
      name: "statistics",
      component: ChartBarIcon,
      tooltip: "view statistics",
      link: "/redbacks",
    },
  ];

  return (
    <div className="p-2 m-2">
      <main className="fixed flex top-0 left-0 bg-slate-200 h-full flex-col justify-between text-justify">
        <div className="mb-4 mt-3 p-3">logo</div>
        <div className="flex flex-col justify-between">
          {icons.map(({ name, component: Icon, tooltip, link }) => (
            <div className="px-3 h-20">
              <Link href={link}>
                <div
                  key={name}
                  className="rounded-md p-3 relative hover:bg-slate-50 text-black transition-all duration-100 ease-linear group"
                >
                  <Icon className="w-6 h-6" />
                </div>
              </Link>
              {/* <div className="opacity-0 rounded-md bottom-2 left-24 p-2 absolute text-gray-200 bg-slate-600 transition-all duration-100 ease-linear group-hover:opacity-100">
              {tooltip}
            </div> */}
            </div>
          ))}
        </div>
        <div className="mb-3 mt-4 p-3">here</div>
      </main>
    </div>
  );
}
