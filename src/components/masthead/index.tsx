import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";
import {
  MdMenu,
  MdMic,
  MdMoreVert,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { MasterHeadSearch } from "./search";

export const MastHead = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center">
        <button className="rounded-full p-2 hover:bg-black hover:bg-opacity-10">
          <span className="text-2xl dark:text-white">
            <MdMenu />
          </span>
        </button>
        <Link href="/" className="relative flex items-center px-4 py-2">
          <span className="text-4xl text-red-600 ">
            <AiFillYoutube />
          </span>
          <span className="text-xl font-medium dark:text-white">YouTube</span>
          <span className="absolute right-0 top-2 text-xs font-light dark:text-white">
            BR
          </span>
        </Link>
      </div>
      <div className="ml-8 flex max-w-2xl flex-1 items-center">
        <MasterHeadSearch />
        <button className="ml-2 rounded-full bg-black bg-opacity-0 p-2 hover:bg-opacity-10 dark:bg-opacity-5">
          <span className="text-2xl">
            <MdMic />
          </span>
        </button>
      </div>
      <div className="flex flex-shrink-0 items-center">
        <button className="rounded-full px-4 py-2">
          <span className="text-2xl dark:text-white">
            <MdMoreVert />
          </span>
        </button>
        <button className="flex space-x-2 rounded-full border border-gray-200 px-2 py-1 text-blue-500 hover:bg-blue-50 dark:border-gray-700">
          <span className="text-2xl">
            <MdOutlineAccountCircle />
          </span>
          <span>Sign in</span>
        </button>
      </div>
    </div>
  );
};
