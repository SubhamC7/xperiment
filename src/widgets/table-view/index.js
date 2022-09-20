import React, { Children } from "react";

import EditIcon from "assets/svg/EditIcon";
import noImage from "assets/images/no-image.png";

const TableView = ({ header, Children }) => {
  const THeaderComponent = ({ title, alignment }) => {
    return (
      <th
        className={`px-6 py-3 text-xs font-medium leading-4 tracking-wider text-${alignment} text-gray-500 uppercase border-b border-gray-200 bg-gray-50`}
      >
        {title}
      </th>
    );
  };

  return (
    <div className="container max-w-7xl mx-auto mt-8">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  {header.map((h) => (
                    <THeaderComponent
                      key={h.title}
                      title={h.title}
                      alignment={h.alignment}
                    />
                  ))}
                  {/* <th
                    className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50"
                    colSpan="1"
                  >
                    Action
                  </th> */}
                </tr>
              </thead>

              {Children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
