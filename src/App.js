import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "antd/dist/antd.css";
import RefContent from "./components/RefContent";
import { applicantData } from "./JSON/JSONData"; 

const App = () => {

  const [searchData, setSearchData] = useState("");
  const [applicantArray, setApplicantArray] = useState([]);
  const onSearch = (value) => {
    setSearchData(value)
    // console.log("Search value is ", value);
  };

  useEffect(() => {
    setApplicantArray(applicantData);
  }, [])

  useMemo(() => {
    if(searchData === ""){
      setApplicantArray(applicantData);
    } else {
      const newArray = applicantData.filter((data) => {
        if(data.name.toLocaleLowerCase() === searchData.toLocaleLowerCase()){
          return data;
        }
      });
      setApplicantArray(newArray);
    }
  },[searchData])

  return (
    <>
      <div className="background">
        <div className="container container-bg">
          <Header onSearch={onSearch} />
          {searchData && applicantArray.length === 0 ? (
            <h2>No data found</h2>
          ): (
            <RefContent applicantData={applicantArray}/>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
