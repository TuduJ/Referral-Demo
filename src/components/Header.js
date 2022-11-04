import React from "react";
import { Input } from "antd";
const { Search } = Input;

const Header = (props) => {
    const { onSearch } = props;
  return (
    <>
      <div className="p-5 header">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <h1 className="text-white">Referral Status</h1>
            <Search placeholder="Search" onSearch={onSearch} size="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
