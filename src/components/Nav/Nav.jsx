import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [color, setcolor] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY >= 2) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", controlNavbar);
  return (
    <Disclosure
      as="header"
      className=" top-0 w-full bg-white duration-100 shadow-xl sticky z-50 py-2"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl rounded-full px-2 sm:px-4 lg:divide-y  ">
            <div className="relative flex h-16 justify-between items-center">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center gap-x-4">
                  <div className="flex items-center gap-x-2 hover:bg-slate-200 py-1 px-2 rounded-lg">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />

                    <button>serach</button>
                  </div>
                  <NavLink
                    to={"/cardcollection"}
                    className="lg:block hidden hover:bg-slate-200 py-1 px-2 rounded-lg"
                  >
                    For individuals
                  </NavLink>
                  <NavLink
                    to={"/charity"}
                    className="lg:block hidden hover:bg-slate-200 py-1 px-2 rounded-lg cursor-pointer"
                  >
                    For charities
                  </NavLink>
                </div>
              </div>
              <div>
                <h1 className="text-green font-extrabold text-3xl cursor-pointer opacity-90 text-green-600">
                  gofundme
                </h1>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-slate-200  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="lg:block hidden">
                <div className="flex  gap-x-4 items-center">
                  <NavLink
                    to={"/howitwork"}
                    className="hover:bg-slate-200 py-1 px-2 rounded-lg cursor-pointer"
                  >
                    How it works
                  </NavLink>
                  <div className="hover:bg-slate-200 py-1 px-2 rounded-lg cursor-pointer">
                    Sign In
                  </div>
                  <button className=" rounded-full border-2 py-2 px-4 hover:bg-slate-200 cursor-pointer">
                    Start a GoFundMe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel
            as="nav"
            className="lg:hidden px-6"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-col  gap-x-4">
              <div className="hover:bg-slate-200 py-1 px-2 rounded-lg">
                For individuals
              </div>
              <div className="hover:bg-slate-200 py-1 px-2 rounded-lg cursor-pointer">
                For charities
              </div>
            </div>

            <div className=" gap-x-4 items-center">
              <div className="hover:bg-slate-200 py-1 px-2 rounded-lg cursor-pointer">
                How it works
              </div>
              <div className="flex flex-col gap-y-4 max-w-xl mx-auto justify-center ">
                <div className=" hover:bg-slate-200  rounded-lg cursor-pointer">
                  <button className="w-full rounded-lg border-2 py-2 px-4">
                    Sign In
                  </button>
                </div>
                <div>
                  <button className=" w-full rounded-lg border-2  bg-green-600 py-2 px-4 hover:bg-slate-300 cursor-pointer">
                    Start a GoFundMe
                  </button>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
