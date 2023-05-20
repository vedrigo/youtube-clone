import { MdClose, MdSearch } from "react-icons/md";

export const MasterHeadSearch = () => {
  return (
    <div className="flex flex-1 items-center rounded-full border border-gray-300">
      <div className="relative flex flex-1 items-center">
        <span className="pl-4 pr-3 text-2xl text-gray-700 dark:text-white">
          <MdSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="flex flex-1 bg-transparent leading-8 focus:outline-0 dark:text-white max-lg:w-44 max-md:w-24 "
        />
        <button className="absolute right-0 rounded-full p-2 hover:bg-black hover:bg-opacity-10">
          <span className="text-2xl text-gray-700 dark:text-white">
            <MdClose />
          </span>
        </button>
      </div>
      <button className="rounded-r-full bg-gray-500 bg-opacity-5 px-4 py-2 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-10">
        <span className="text-2xl text-gray-700 dark:text-white">
          <MdSearch />
        </span>
      </button>
    </div>
  );
};
