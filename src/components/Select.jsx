import React, { useState } from "react";

const Select = ({ desc, top }) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <label htmlFor="" className="font-semibold">
        {desc}
      </label>
      <div>
        <button
          onClick={() => {
            setDrawer(!drawer);
          }}
          className="border border-gray-300 rounded-md relative p-2 text-start w-full"
          type="button"
        >
          {top}{" "}
          <i
            className={`fa-solid fa-angle-${
              drawer ? "up" : "down"
            } absolute end-2 top-1/2 -translate-y-1/2`}
          ></i>
        </button>
        {/* <div>
          <p>1</p>
        </div> */}
      </div>
    </div>
  );
};

export default Select;
