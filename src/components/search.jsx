import React from 'react';
import { IoIosSearch } from 'react-icons/io';
const Search = () => {
  return (
    <div className="h-[36px] flex items-center w-[166px] focus-within:w-[200px] transition-all duration-300 p-[8px] pl-[16px] gap-[12px] rounded-[5px] bg-[#F4F4F5]">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
      />
      <button className="p-2 text-gray-500 hover:bg-gray-200 rounded">
        <IoIosSearch className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Search;
