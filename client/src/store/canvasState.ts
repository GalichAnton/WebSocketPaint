import { makeAutoObservable } from "mobx";
export type CanvasType = HTMLCanvasElement;

class CanvasState {
  canvas: CanvasType = {} as CanvasType;
  socket: WebSocket;
  sessionid: number;
  undoList: Array<any>;
  redoList: Array<any>;
  username: string;
  constructor() {
    makeAutoObservable(this);
  }

  setSessionId(id: number) {
    this.sessionid = id;
  }
  setSocket(socket: WebSocket) {
    this.socket = socket;
  }

  setUsername(username: string) {
    this.username = username;
  }

  setCanvas(canvas: CanvasType) {
    this.canvas = canvas;
  }

  pushToUndo(data: any) {
    this.undoList.push(data);
  }

  pushToRedo(data: any) {
    this.redoList.push(data);
  }

  undo() {
    const ctx = this.canvas.getContext("2d")!;
    if (this.undoList.length > 0) {
      const dataUrl = this.undoList.pop();
      this.redoList.push(this.canvas.toDataURL());
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  redo() {
    const ctx = this.canvas.getContext("2d")!;
    if (this.redoList.length > 0) {
      const dataUrl = this.redoList.pop();
      this.undoList.push(this.canvas.toDataURL());
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    }
  }
}

export default new CanvasState();
