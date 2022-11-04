import React from "react";
// import { applicantData } from "../JSON/JSONData";
import TableData from "./TableData";

const RefContent = (props) => {
  const {applicantData} = props;
  return (
    <div className="container">
        {applicantData.map((data, index) => {
            return(
              <div key={index} className="my-3">
                <TableData tableData={data}/>
              </div>
            );
        })}
    </div>
  );
};

export default RefContent;
