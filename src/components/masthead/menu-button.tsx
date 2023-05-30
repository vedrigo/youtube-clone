import { useRef, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { MaterialIcon } from "../material-icon";

export const MenuButton = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropDownVisible(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  const handleMenuButton = () => {
    setDropDownVisible(true);
    document.addEventListener("mousedown", handleClickOutside);
  };

  return (
    <div className="relative">
      <button
        className="mr-2 rounded-full p-2 active:bg-black active:bg-opacity-5"
        onClick={handleMenuButton}
      >
        <span className="text-2xl dark:text-white">
          <MdMoreVert />
        </span>
      </button>
      <div
        ref={dropdownRef}
        className={`${
          !dropDownVisible && "hidden"
        } absolute right-0 top-10 z-10 h-[427px] w-[300px] rounded-lg border border-gray-200 bg-white shadow-sm`}
      >
        <div className="flex flex-1 border-b border-gray-200 py-2">
          <div className="flex h-10 flex-1 flex-row items-center bg-black bg-opacity-0 pl-4 pr-[36px] hover:bg-opacity-5">
            <div className="mr-4">
              <MaterialIcon icon="shield" className="text-2xl" />
            </div>
            <div>Your data in YouTube</div>
          </div>
        </div>
      </div>
    </div>
  );
};
