import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { DownArrowIcon } from "../helper/Svg";

export default function BrowseAllCatogorySelect() {
  const categories = [
    { name: "All recipes" },
    { name: "Burgers" },
    { name: "Drinks" },
    { name: "Indian Food" },
    { name: "Pizza's" },
    { name: "Mexican" },
  ];

  const [selected, setSelected] = useState(categories[0]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative h-full">
          <Listbox.Button className="h-full relative w-full cursor-pointer">
            <div className="flex items-center">
              <span className="text-white font-bold text-xs">
                {selected.name}
              </span>{" "}
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <DownArrowIcon color="#ffffff" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={` z-10 absolute mt-1 max-h-[230px] scrollbar-style-dropdown w-full overflow-auto rounded-md bg-primary py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
            >
              {categories.map((category, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${
                      active ? "bg-primary text-white" : "text-white"
                    }`
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`8787font-medium text-xs truncate flex items-center ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {category.name}{" "}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
