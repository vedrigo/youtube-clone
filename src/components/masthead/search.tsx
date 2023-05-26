"use client";
import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";

export const MasterHeadSearch = () => {
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex flex-1 items-center rounded-full border border-gray-300">
      <div className="relative flex flex-1 items-center">
        <span className="pl-4 pr-3 text-2xl text-gray-700 dark:text-white">
          <MdSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="flex flex-1 bg-transparent leading-8 focus:outline-0 dark:text-white max-lg:w-44 max-md:w-24 "
        />
        {searchText && (
          <button
            onClick={() => setSearchText("")}
            className="absolute right-0 rounded-full p-2 hover:bg-black hover:bg-opacity-10"
          >
            <span className="text-2xl text-gray-700 dark:text-white">
              <MdClose />
            </span>
          </button>
        )}
        {show && (
          <div className="absolute left-0 top-10 h-80 w-full rounded-xl border-x border-b border-gray-200 py-4  shadow-md shadow-gray-200">
            <div className="flex flex-1 bg-black bg-opacity-0 px-4 py-1 hover:bg-opacity-5">
              <span className="pr-3  text-2xl text-gray-700 dark:text-white">
                <MdSearch />
              </span>
              Lorem Ipsum
            </div>
          </div>
        )}
      </div>
      <button className="rounded-r-full bg-gray-500 bg-opacity-5 px-4 py-2 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-10">
        <span className="text-2xl text-gray-700 dark:text-white">
          <MdSearch />
        </span>
      </button>
    </div>
  );
};
