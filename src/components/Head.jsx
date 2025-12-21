import React from "react";

const Head = () => {
  return (
    <>
      <div className="flex gap-2 width-full p-4 justify-between items-center p-6 bg-blue-200">
        <div className="flex gap-2">
          <h1 className="text-2xl font-bold">Shopping</h1>
        </div>

        <div className="flex gap-5">
            <h4 className="text-lg">Men</h4>
          <h4 className="text-lg">Women</h4>
          <h4 className="text-lg">Children</h4>
        </div>

        <div className="center flex">
          <input className="p-1 rounded-md " type="text" placeholder="Search..." />
        </div>

        <div className="right flex gap-8">
          <h4 className="text-lg">Login/SignUp</h4>
          <h4 className="text-lg">Cart</h4>
        </div>
      </div>
    </>
  );
};

export default Head;
