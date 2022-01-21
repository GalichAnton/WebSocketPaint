import React from "react";
import ToolBar from "./Toolbar/ToolBar";
import SettingBar from "./SettingBar/SettingBar";
import Canvas from "./Canvas/Canvas";

const MainPage = () => {
  return (
    <>
      <ToolBar />
      <SettingBar />
      <Canvas />
    </>
  );
};

export default MainPage;
