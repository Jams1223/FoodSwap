import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import { DownArrowIcon } from "../helper/Svg";

export default function CountryList() {
  const countrylist = useMemo(() => countryList().getData(), []);
  const [selected, setSelected] = useState(countrylist[0]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative h-full">
          <Listbox.Button className="h-full relative w-full cursor-pointer">
            <div className="flex items-center">
              <span className={`text-lightblack text-xs`}>
                {selected.label}
              </span>{" "}
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <DownArrowIcon color="#939393" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={` z-[99] absolute mt-1 max-h-[230px] scrollbar-style-dropdown w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
            >
              {countrylist.map((obj, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${
                      active ? "bg-whisperblue" : "text-lightblack-900"
                    }`
                  }
                  value={obj}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`text-darkblack font-medium text-xs truncate flex items-center ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {obj.label}{" "}
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
