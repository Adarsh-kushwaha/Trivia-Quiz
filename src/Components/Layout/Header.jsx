import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="bg-blue-600 flex justify-between py-4 px-12">
        <div className="text-3xl font-semibold text-blue-100 ">Trivia</div>
        <div className="flex text-blue-100 font-semibold">
          <div className="px-2 ">login</div>
          <div className="px-2">Github</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
