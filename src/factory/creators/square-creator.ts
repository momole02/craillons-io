import { SquareShape } from "../shapes/square-shape";
import CanvasShape from "../types/canvas-shape";
import ShapeCreator from "../types/shape-creator";
import { ShapeCreatorParams } from "../types/shape-creator-params";

export class SquareCreator extends ShapeCreator
{
  create(params: ShapeCreatorParams): CanvasShape {

    const shapeParams = {... params.shapeParams};
    if(params.randomizeSize) {
      shapeParams.size = Math.floor(
        Math.random() * (2 * shapeParams.size)
      );
    }
    // Centrer les carrés
    shapeParams.x = shapeParams.x - shapeParams.size / 2;
    shapeParams.y = shapeParams.y - shapeParams.size / 2;
    
    return new SquareShape(shapeParams);
  }
}