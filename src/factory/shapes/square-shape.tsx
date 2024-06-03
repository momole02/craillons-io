
import { Rect } from "react-konva";
import CanvasShape from "../types/canvas-shape";

export class SquareShape extends CanvasShape
{
  render(): unknown {
    return <Rect
      x={this.params.x}
      y={this.params.y}
      width={this.params.size}
      height={this.params.size}
      fill={this.params.color}
      opacity={this.params.opacity}
    />;
  }
  
}