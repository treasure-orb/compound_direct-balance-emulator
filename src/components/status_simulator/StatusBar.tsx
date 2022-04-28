import React, { useState, useEffect, FC } from "react";

interface IProps {
  headerContent?: string | number;
  mainContent?: string | number;
  parameter?: string | number;
}

const StatusBar: FC<IProps> = ({ headerContent, mainContent, parameter }) => {
  return (
    <div className="mx_StatusBar">
      <div className="mx_StatusBar_header">{headerContent}</div>
      <div className="mx_StatusBar_body">
        <div className="mx_StatusBar_main">{mainContent}</div>
        <div className="mx_StatusBar_parameter">{parameter}</div>
      </div>
    </div>
  );
};

export default StatusBar;
