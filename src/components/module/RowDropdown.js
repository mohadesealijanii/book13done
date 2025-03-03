import React from "react";

function RowDropdown({ onSelect }) {
  return (
    <div className="flex flex-col bg-white border border-gray-300 shadow-lg rounded">
      <span
        onClick={() => onSelect(5)}
        className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
      >
        5
      </span>
      <span
        onClick={() => onSelect(10)}
        className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
      >
        10
      </span>
      <span
        onClick={() => onSelect(15)}
        className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
      >
        15
      </span>
    </div>
  );
}

export default RowDropdown;
