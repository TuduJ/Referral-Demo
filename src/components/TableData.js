import React from "react";
import { Steps } from "antd";
import {
  CheckCircleFilled,
  UserOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  BulbOutlined
} from "@ant-design/icons";

const TableData = (props) => {
  const { tableData } = props;
  const refState = [
    {
      title: "Referred",
    },
    {
      title: "Interviewed",
    },
    {
      title: "Referred",
    },
    {
      title: "Hired",
    },
    {
      title: "Joined",
    },
  ];
  const currentStep = tableData?.currentStep;
  const dayLeft = tableData?.daysLeft;
  const itemsArray = refState?.map((ele, index) => {
    if (currentStep === 4 && index === 4) {
      return {
        icon:
          index < currentStep ? (
            <CheckCircleFilled />
          ) : index > currentStep ? (
            <CheckCircleOutlined />
          ) : dayLeft ? (
            <UserOutlined />
          ) : (
            <CheckCircleFilled />
          ),
        title: dayLeft ? `${dayLeft} days to go!` : null,
      };
    }
    return {
      icon:
        index < currentStep ? (
          <CheckCircleFilled />
        ) : index > currentStep ? (
          <ExclamationCircleOutlined />
        ) : (
          <UserOutlined />
        ),
    };
  });
  return (
    <div className="px-5">
      <div className="row">
        <div className="col-12 col-lg-2">
          <p className="fs-5 m-0">{tableData.name}</p>
          <p className="m-0">{tableData.designation}</p>
        </div>
        <div className="col-12 col-lg-8">
          <Steps
            className="custom-step"
            current={currentStep}
            items={itemsArray}
          />
        </div>
        <div className="col-12 col-lg-2">
          <p className="fs-5">${tableData.reward} <span style={{ color: "blue"}}>{ currentStep === 4 && dayLeft ===0 ? <BulbOutlined /> : null}</span></p>
        </div>
      </div>
    </div>
  );
};

export default TableData;
