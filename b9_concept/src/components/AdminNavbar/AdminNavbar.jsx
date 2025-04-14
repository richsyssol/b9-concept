import React from "react";
import { UserCircle, Shield, LogOut } from "lucide-react";

const HeaderRow = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-100 shadow-md rounded-md">
      {/* Left Section */}
      <div className="flex items-center ">
        <img
          src="http://b9concept.demovoting.com/assets/logo-DDQ4Kwqc.png"
          alt="User"
          className="w-28 h-12 rounded-full"
        />
        <span className="font-extrabold text-2xl text-gray-700">
          B9 CONCEPT
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* <div className="flex items-center space-x-1">
          <Shield className="w-5 h-5 text-green-600" />
          <span className="text-gray-600">Admin</span>
        </div> */}
        <button className="flex items-center px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-700">
          <LogOut className="w-4 h-4 mr-1" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderRow;
