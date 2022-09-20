import React from "react";

const AlertBox = ({
  toggleAlert,
  setToggleAlert,
  deletePackage,
  d,
  setDeleted,
  deleted,
  reset,
  setLoading,
  Toast,
}) => {
  return (
    <>
      {toggleAlert ? (
        <div className="fixed top-0 right-0 h-screen w-full flex items-center justify-center bg-transparentD z-50">
          <div className="h-32 w-[22rem] flex flex-col justify-between p-4 border rounded-lg bg-white">
            <div className="flex items-center w-full h-10 space-x-2">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="text-lg font-medium text-black">
                Are you sure to DELETE?
              </h3>
            </div>

            <div className="flex w-full items-center justify-end h-18">
              <button
                onClick={() => {
                  deletePackage(
                    d,
                    setDeleted,
                    deleted,
                    reset,
                    setLoading,
                    Toast
                  );
                  setToggleAlert(false);
                }}
                className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-md text-xs px-3 py-2 mr-2 text-center"
              >
                DELETE
              </button>
              <button
                onClick={() => setToggleAlert(false)}
                className="text-black bg-transparent border border-black hover:bg-gray-200 hover:text-black  font-medium rounded-md text-xs px-3 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AlertBox;
