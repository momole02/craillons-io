import { Circle } from "react-konva";
import CanvasShape from "../types/canvas-shape";

export default class CircleShape extends CanvasShape
{
  render(): unknown {
    return (<Circle
      x={this.params.x}
      y={this.params.y}
      radius={this.params.size / 2}
      fill={this.params.color}
      opacity={this.params.opacity}
    />)
  }
  
}