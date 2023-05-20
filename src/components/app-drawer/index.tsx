import { MdHomeFilled } from "react-icons/md";

export const AppDrawer = () => {
  return (
    <div className="fixed left-0 top-0 z-10 h-full w-60">
      <div id="guide-spacer" className="mt-14"></div>
      <div id="guide-content">
        <div className="p-3">
          <div className="flex h-10 flex-1 items-center rounded-lg bg-black bg-opacity-5">
            <div className="flex flex-1 items-center px-3">
              <span className="mr-5 text-2xl">
                <MdHomeFilled />
              </span>
              <span>Home</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
