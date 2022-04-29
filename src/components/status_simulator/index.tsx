import React, { useState, useEffect, FC } from "react";
import { tempData } from "../../@types/value";
import StatusBar from "./StatusBar";

const StatusSimulator: FC = () => {
  const [turnOn, setTurnOn] = useState<boolean>(false);
  const [isJustTurnOn, setIsJustTurnOn] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [headerContent, setHeaderContent] = useState<string | number>("");
  const [mainContent, setMainContent] = useState<string | number>("");
  const [parameter, setParameter] = useState<string | number>("");
  const [classIndex, setClassIndex] = useState<number>(-1);
  const [itemIndex, setItemIndex] = useState<number>(-1);
  const [itemsIndex, setItemsIndex] = useState<number[]>([]);
  const [isShowSymbol, setISShowSymbol] = useState<boolean>(false);
  const [isClass, setIsClass] = useState<boolean>(true);
  const [parameters, setParameters] = useState<number[][]>([]);

  useEffect(() => {
    initialization();
  }, []);

  useEffect(() => {
    setIsJustTurnOn(true);
    if (turnOn) {
      setIsLoading(true);
      setMainContent("888888888");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      initialization();
    }
  }, [turnOn]);

  useEffect(() => {
    checkAndHandleClassAndItem(true);
  }, [isClass])

  const initialization = () => {
    let indexs: number[] = new Array(tempData.class.length).fill(-1);
    setIsLoading(false);
    setHeaderContent("");
    setMainContent("");
    setParameter("");
    setClassIndex(-1);
    setItemIndex(-1);
    setItemsIndex(indexs);
    let params: number[][] = [];
    tempData.items.map(data => {
      params.push(new Array(data.length).fill(0));
    })
    setParameters(params);
    setISShowSymbol(false);
  };

  const handlePower = () => {
    setTurnOn(!turnOn);
  };

  const checkCircleIndicator = (param: number) => {
    if(param === tempData.circleIndicator[classIndex][itemIndex]) {
      setISShowSymbol(true);
    }
    else {
      setISShowSymbol(false);
    }
  }

  const handleClass = (isAdd: boolean) => {
    if (isLoading) return;
    let index = classIndex;
    if(isAdd) {
      index ++;
      if (index >= tempData.class.length) {
        index = 0;
      }
    }
    setMainContent(tempData.class[index]);
    setParameter("");
    setISShowSymbol(false);
    setClassIndex(index);
  };

  const handleItem = (isAdd: boolean) => {
    if (isLoading) return;
    if (classIndex < 0) return;
    if (!tempData.items[classIndex].length) return;
    let indexs = [...itemsIndex];
    if(isAdd) {
      indexs[classIndex]++;
      if (indexs[classIndex] >= tempData.items[classIndex].length) {
        indexs[classIndex] = 0;
      }
    }
    setMainContent(tempData.items[classIndex][indexs[classIndex]]);
    setParameter(parameters[classIndex][indexs[classIndex]]);
    checkCircleIndicator(parameters[classIndex][indexs[classIndex]]);
    setItemIndex(indexs[classIndex]);
    setItemsIndex(indexs);
  };

  const checkAndHandleClassAndItem = (isAdd: boolean) => {
    if(!turnOn || isLoading) return;
    if(isJustTurnOn) {
      setIsLoading(true);
      setMainContent("-E")
      setTimeout(() => {
        setIsJustTurnOn(false);
        setIsLoading(false);
        handleClassAndItem(isAdd);
      }, 2000)
    }
    else {
      handleClassAndItem(isAdd);
    }
  }

  const handleClassAndItem = (isAdd: boolean) => {
    if(!turnOn || isLoading) return;
    if(isClass) handleClass(isAdd);
    else handleItem(isAdd);
  }

  const handleParameter = () => {
    if (typeof parameter === "string") return;
    let params = parameter + 1;
    if (params > tempData.parameters[classIndex][itemIndex]) {
      params = 0;
    }
    checkCircleIndicator(params);
    setParameter(params);
  };

  const saveCurrentState = () => {
    let params = JSON.parse(JSON.stringify(parameters));
    params[classIndex][itemIndex] = parameter;
    setParameters(params);
  }

  const changeClassAndItem = (isSave: boolean) => {
    if(isClass && !tempData.items[classIndex].length) return;
    if(!isClass && isSave) {
      saveCurrentState();
    }
    setIsClass(!isClass);
  }

  return (
    <div className="mx_StatusSimulator">
      <div className="mx_StatusSimulator_header">
        <h2>Status Simulator</h2>
      </div>
      <div className="mx_StatusSimulator_body">
        <StatusBar
          headerContent={headerContent}
          mainContent={mainContent}
          parameter={parameter}
          isShowSymbol={isShowSymbol}
        />
        <div className="mx_StatusSimulator_controlTools">
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={handlePower}
          >
            ON/OFF
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={() => changeClassAndItem(false)}
          >
            CAL
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={() => checkAndHandleClassAndItem(true)}
          >
            MODE
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={() => checkAndHandleClassAndItem(true)}
          >
            SAMPLE
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={() => changeClassAndItem(true)}
          >
            PRINT
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button danger"
            onClick={handleParameter}
          >
            RE-ZERO
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusSimulator;
