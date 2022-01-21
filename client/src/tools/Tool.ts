import { CanvasType } from "../store/canvasState";

export default class Tool {
  canvas: CanvasType;
  ctx: CanvasRenderingContext2D;
  socket: WebSocket;
  id: number;
  constructor(canvas: CanvasType, socket: WebSocket, id: number) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.socket = socket;
    this.id = id;
    this.destroyEvents();
  }
  set fillColor(color: string) {
    this.ctx.fillStyle = color;
  }
  set strokeColor(color: string) {
    this.ctx.strokeStyle = color;
  }

  set lineWidth(width: number) {
    this.ctx.lineWidth = width;
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
