import React, { useState, useEffect, FC } from "react";
import { tempData } from "../../@types/value";
import StatusBar from "./StatusBar";

const StatusSimulator: FC = () => {
  const [turnOn, setTurnOn] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState<boolean>(false);
  const [headerContent, setHeaderContent] = useState<string | number>("");
  const [mainContent, setMainContent] = useState<string | number>("");
  const [parameter, setParameter] = useState<string | number>("");
  const [headerIndex, setHeaderIndex] = useState<number>(-1);
  const [classIndex, setClassIndex] = useState<number>(-1);
  const [itemIndex, setItemIndex] = useState<number>(-1);
  const [itemsIndex, setItemsIndex] = useState<number[]>([-1, -1, -1, -1, -1]);
  const [parameters, setParameters] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  useEffect(() => {
    if (turnOn) {
      setIsInitializing(true);
      setMainContent(".");
      setTimeout(() => {
        setIsInitializing(false);
        setMainContent("SIMULATOR STARTED");
      }, 2000);
    } else {
      initialization();
    }
  }, [turnOn]);

  useEffect(() => {
    if (classIndex < 0) return;
    setMainContent(tempData.class[classIndex]);
  }, [classIndex]);

  useEffect(() => {
    if (classIndex < 0) return;
    setMainContent(tempData.items[classIndex][itemIndex]);
  }, [itemsIndex]);

  useEffect(() => {
    setHeaderContent(tempData.header[headerIndex]);
  }, [headerIndex]);

  const initialization = () => {
    let indexs: number[] = new Array(tempData.class.length).fill(-1);
    let params: number[][] = new Array(tempData.class.length).fill(
      new Array(3).fill(0)
    );
    setIsInitializing(false);
    setHeaderContent("");
    setMainContent("");
    setParameter("");
    setHeaderIndex(-1);
    setClassIndex(-1);
    setItemIndex(-1);
    setItemsIndex(indexs);
    setParameters(params);
  };

  const handlePower = () => {
    setTurnOn(!turnOn);
  };

  const handleClass = () => {
    if (isInitializing) return;
    let index = classIndex + 1;
    if (index >= tempData.class.length) {
      index = 0;
    }
    setParameter("");
    setClassIndex(index);
  };

  const handleItem = () => {
    if (isInitializing) return;
    if (classIndex < 0) return;
    let indexs = [...itemsIndex];
    indexs[classIndex]++;
    if (indexs[classIndex] >= tempData.items[classIndex].length) {
      indexs[classIndex] = 0;
    }
    setParameter("");
    setItemIndex(indexs[classIndex]);
    setItemsIndex(indexs);
  };

  const showParameter = () => {
    if (!turnOn || isInitializing) return;
    setParameter(parameters[classIndex][itemIndex]);
  };

  const handleParameter = () => {
    if (parameter === "") return;
    let params = [...parameters];
    params[classIndex][itemIndex]++;
    if (params[classIndex][itemIndex] >= 10) {
      params[classIndex][itemIndex] = 0;
    }
    setParameter(params[classIndex][itemIndex]);
    setParameters(params);
  };
  const handleHeader = () => {
    if (!turnOn || isInitializing) return;
    let index = headerIndex + 1;
    if (index >= tempData.header.length) {
      index = 0;
    }
    setHeaderIndex(index);
  };

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
        />
        <div className="mx_StatusSimulator_controlTools">
          <button
            className="mx_StatusSimulator_controlTools_button danger"
            onClick={handlePower}
          >
            ON/OFF
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={handleItem}
          >
            MODE
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={handleClass}
          >
            SAMPLE
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={showParameter}
          >
            PRINT
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={handleParameter}
          >
            RE-ZERO
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={handleHeader}
          >
            CAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusSimulator;
