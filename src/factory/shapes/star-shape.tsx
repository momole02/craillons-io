import { Star } from "react-konva";
import CanvasShape from "../types/canvas-shape";

export default class StarShape extends CanvasShape
{
  render(): unknown {
    return (<Star 
      x={this.params.x}
      y={this.params.y}
      fill={this.params.color}
      width={this.params.size}
      height={this.params.size}
      numPoints={this.params.numPoints ?? 5} 
      innerRadius={this.params.innerRadius ?? 15} 
      outerRadius={this.params.outerRadius ?? 10}/>)
  }

}