import React, { useState, useEffect, FC } from "react";

interface IProps {
  headerContent?: string | number;
  mainContent?: string | number;
  parameter?: string | number;
  isShowSymbol?: boolean;
}

const StatusBar: FC<IProps> = ({ headerContent, mainContent, parameter, isShowSymbol }) => {
  const [isShowParameter, setIsShowParameter] = useState(false);
  let timer: any;

  const toggleParameter = () => {
    let delayTime = 1000;
    if(!isShowParameter) delayTime = 100;
    timer = setTimeout(() => {
      setIsShowParameter(!isShowParameter);
    }, delayTime)
  }

  useEffect(() => {
    if(parameter !== "") {
      toggleParameter();
    }
    return () => {
      clearTimeout(timer);
    }
  }, [parameter, isShowParameter])

  return (
    <div className="mx_StatusBar">
      <div className="mx_StatusBar_header">{headerContent}</div>
      <div className="mx_StatusBar_body">
        <div className="mx_StatusBar_symbol">
          {isShowSymbol && <div></div>}
        </div>
        <div className="mx_StatusBar_main">{mainContent}</div>
        <div className="mx_StatusBar_parameter">{ isShowParameter && `${parameter}` }</div>
      </div>
    </div>
  );
};

export default StatusBar;
