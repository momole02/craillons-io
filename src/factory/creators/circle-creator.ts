import CircleShape from "../shapes/circle-shape";
import CanvasShape from "../types/canvas-shape";
import ShapeCreator from "../types/shape-creator";
import { ShapeCreatorParams } from "../types/shape-creator-params";

export default class CircleCreator extends ShapeCreator
{
  create(params: ShapeCreatorParams): CanvasShape {
    const shapeParams = {...params.shapeParams}
    if(params.randomizeSize){
      shapeParams.size = Math.floor(
        Math.random() * (2 * shapeParams.size)
      );
    }
    return new CircleShape(shapeParams);
  }
  
}