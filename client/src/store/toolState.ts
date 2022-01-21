import { makeAutoObservable } from "mobx";
export type ToolType = any;
class ToolState {
  tool: ToolType = null;
  constructor() {
    makeAutoObservable(this);
  }
  setTool(tool: any) {
    this.tool = tool;
    console.log("settool");
  }
  setFillColor(color: string) {
    this.tool.fillColor = color;
  }
  setStrokeColor(color: string) {
    this.tool.strokeColor = color;
  }
  setLineWidth(width: number) {
    this.tool.lineWidth = width;
  }
}

export default new ToolState();
