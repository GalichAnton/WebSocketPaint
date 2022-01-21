import React, { ChangeEvent } from "react";
import classes from "./toolBar.module.scss";
import cn from "classnames";
import toolState from "../../store/toolState";
import Brush from "../../tools/brush";
import canvasState from "../../store/canvasState";
import Rect from "../../tools/rect";
import Line from "../../tools/line";
const ToolBar = () => {
  const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
    toolState.setStrokeColor(e.currentTarget.value);
    toolState.setFillColor(e.currentTarget.value);
  };

  const download = () => {
    const dataUrl = canvasState.canvas.toDataURL();
    console.log(dataUrl);
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = canvasState.sessionid + ".jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className={classes.toolbar}>
      <button
        className={cn(classes.toolbar__btn, classes.brush)}
        onClick={() =>
          toolState.setTool(
            new Brush(
              canvasState.canvas,
              canvasState.socket,
              canvasState.sessionid
            )
          )
        }
      />
      <button
        className={cn(classes.toolbar__btn, classes.rect)}
        onClick={() =>
          toolState.setTool(
            new Rect(
              canvasState.canvas,
              canvasState.socket,
              canvasState.sessionid
            )
          )
        }
      />
      <button
        className={cn(classes.toolbar__btn, classes.circle)}
        onClick={() =>
          toolState.setTool(
            new Line(
              canvasState.canvas,
              canvasState.socket,
              canvasState.sessionid
            )
          )
        }
      />
      <button className={cn(classes.toolbar__btn, classes.eraser)} />
      <button className={cn(classes.toolbar__btn, classes.line)} />
      <input
        onChange={(e) => changeColor(e)}
        type="color"
        style={{ marginLeft: "10px" }}
      />
      <button
        className={cn(classes.toolbar__btn, classes.undo)}
        onClick={() => canvasState.undo()}
      />
      <button
        className={cn(classes.toolbar__btn, classes.redo)}
        onClick={() => canvasState.redo()}
      />
      <button
        className={cn(classes.toolbar__btn, classes.save)}
        onClick={() => download()}
      />
    </div>
  );
};

export default ToolBar;
