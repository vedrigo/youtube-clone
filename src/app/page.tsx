import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";
import {
  MdClose,
  MdMenu,
  MdMic,
  MdMoreVert,
  MdOutlineAccountCircle,
  MdSearch,
} from "react-icons/md";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
          <button className="p-2 rounded-full hover:bg-black hover:bg-opacity-10">
            <span className="text-2xl dark:text-white">
              <MdMenu />
            </span>
          </button>
          <Link href="/" className="flex items-center p-4 relative">
            <span className="text-4xl text-red-600 ">
              <AiFillYoutube />
            </span>
            <span className="text-xl font-medium dark:text-white">YouTube</span>
            <span className="text-xs font-light absolute right-0 top-4 dark:text-white">
              BR
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center mx-16 max-w-xl">
          <div className="flex flex-1 items-center border border-gray-300 rounded-full">
            <div className="relative flex flex-1">
              <input
                type="text"
                placeholder="Search"
                className="rounded-l-full px-4 py-2 bg-transparent dark:text-white focus:outline-0 flex flex-1 max-md:w-24 max-lg:w-44 "
              />
              <button className="absolute p-2 top-0 right-0 rounded-full hover:bg-black hover:bg-opacity-10">
                <span className="text-2xl dark:text-white">
                  <MdClose />
                </span>
              </button>
            </div>
            <button className="py-2 px-4 rounded-r-full bg-gray-500 dark:bg-white dark:bg-opacity-10 bg-opacity-5 hover:bg-opacity-10">
              <span className="text-2xl dark:text-white ">
                <MdSearch />
              </span>
            </button>
          </div>

          <button className="ml-2 p-2 rounded-full bg-black bg-opacity-0 dark:bg-opacity-5 hover:bg-opacity-10">
            <span className="text-2xl">
              <MdMic />
            </span>
          </button>
        </div>

        <div className="flex items-center">
          <button className="py-2 px-4 rounded-full">
            <span className="text-2xl dark:text-white">
              <MdMoreVert />
            </span>
          </button>
          <button className="flex space-x-2 text-blue-500 hover:bg-blue-50 rounded-full dark:border-gray-700 border-gray-200 border px-2 py-1">
            <span className="text-2xl">
              <MdOutlineAccountCircle />
            </span>
            <span>Sign in</span>
          </button>
        </div>
      </div>
    </main>
  );
}
