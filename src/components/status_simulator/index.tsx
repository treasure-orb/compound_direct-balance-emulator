import React, { useState, useEffect, FC } from "react";
import { classes } from "../../@types/value";
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
    checkAndHandleClassAndItem(true, true);
  }, [isClass])

  useEffect(() => {
    if(!isClass) {
      checkCircleIndicator()
      if(typeof parameter === "number") {
        setHeaderContent(classes[classIndex].items[itemIndex].conditions[parameter].name);
      }
    }
  }, [itemIndex, parameter]);

  const initialization = () => {
    let indexs: number[] = new Array(classes.length).fill(-1);
    setIsLoading(false);
    setHeaderContent("");
    setMainContent("");
    setParameter("");
    setClassIndex(-1);
    setItemIndex(-1);
    setItemsIndex(indexs);
    let params: number[][] = [];
    classes.map(data => {
      let arr: number[] = [];
      data.items.map((item) => {
        let defaultIndex = item.conditions.findIndex((condition) => !!condition.default);
        if(defaultIndex !== -1) {
          arr.push(defaultIndex);
        }
      })
      params.push(arr);
    })
    console.log(params);
    setParameters(params);
    setISShowSymbol(false);
  };

  const handlePower = () => {
    setTurnOn(!turnOn);
  };

  const checkCircleIndicator = () => {
    if(typeof parameter === "string") {
      setISShowSymbol(false);
      return;
    }
    if(parameter === parameters[classIndex][itemIndex]) {
      setISShowSymbol(true);
      return;
    }
    setISShowSymbol(false);
  }

  const handleClass = (isAdd: boolean) => {
    if (isLoading) return;
    let index = classIndex;
    if(isAdd) {
      index ++;
      if (index >= classes.length) {
        index = 0;
      }
    }
    setMainContent(classes[index].name);
    setParameter("");
    setHeaderContent("");
    setISShowSymbol(false);
    setClassIndex(index);
  };

  const handleItem = (isAdd: boolean, isFirstItem: boolean) => {
    if (isLoading) return;
    if (classIndex < 0) return;
    if (!classes[classIndex].items.length) return;
    let indexs = [...itemsIndex];
    if(isAdd) {
      indexs[classIndex]++;
      if (indexs[classIndex] >= classes[classIndex].items.length) {
        indexs[classIndex] = 0;
      }
    }
    if(isFirstItem) {
      indexs[classIndex] = 0;
    }
    setMainContent(classes[classIndex].items[indexs[classIndex]].name);
    setParameter(parameters[classIndex][indexs[classIndex]]);
    setItemIndex(indexs[classIndex]);
    setItemsIndex(indexs);
  };

  const checkAndHandleClassAndItem = (isAdd: boolean, isFirstItem: boolean) => {
    if(!turnOn || isLoading) return;
    if(isJustTurnOn) {
      setIsLoading(true);
      setMainContent("-E")
      setTimeout(() => {
        setIsJustTurnOn(false);
        setIsLoading(false);
        handleClassAndItem(isAdd, isFirstItem);
      }, 2000)
    }
    else {
      handleClassAndItem(isAdd, isFirstItem);
    }
  }

  const handleClassAndItem = (isAdd: boolean, isFirstItem: boolean) => {
    if(!turnOn || isLoading) return;
    if(isClass) handleClass(isAdd);
    else handleItem(isAdd, isFirstItem);
  }

  const handleParameter = () => {
    if (typeof parameter === "string") return;
    let params = parameter + 1;
    if (params >= classes[classIndex].items[itemIndex].conditions.length) {
      params = 0;
    }
    setParameter(params);
  };

  const saveCurrentState = () => {
    let params = JSON.parse(JSON.stringify(parameters));
    params[classIndex][itemIndex] = parameter;
    setParameters(params);
  }

  const changeClassAndItem = (isSave: boolean) => {
    if(isClass && !classes[classIndex].items.length) return;
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
            onClick={() => checkAndHandleClassAndItem(true, false)}
          >
            MODE
          </button>
          <button
            className="mx_StatusSimulator_controlTools_button"
            onClick={() => checkAndHandleClassAndItem(true, false)}
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
