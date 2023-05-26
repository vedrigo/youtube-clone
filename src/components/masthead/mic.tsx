import { useState } from "react";
import { MdClose, MdMic } from "react-icons/md";

export const Mic = () => {
  const [micVisible, setMicVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setMicVisible(true)}
        className="ml-2 rounded-full bg-black bg-opacity-0 p-2 hover:bg-opacity-10 dark:bg-opacity-5"
      >
        <span className="text-2xl">
          <MdMic />
        </span>
      </button>
      <div
        className={`relative z-10 ${!micVisible && "hidden"}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black bg-opacity-20 transition-opacity"></div>

        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          onClick={() => setMicVisible(false)}
        >
          <div className="flex items-baseline justify-center p-2">
            <div className="relative w-full max-w-xl transform overflow-hidden bg-white shadow-md shadow-gray-500 transition-all">
              <div className="flex min-h-[400px] flex-col bg-white p-4">
                <div className="flex justify-end">
                  <button
                    onClick={() => setMicVisible(false)}
                    className="rounded-full p-2 hover:bg-black hover:bg-opacity-10"
                  >
                    <span className="text-2xl text-gray-700 dark:text-white">
                      <MdClose />
                    </span>
                  </button>
                </div>
                <div className="ml-4 text-2xl font-light">
                  Did not hear that. Try again.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
