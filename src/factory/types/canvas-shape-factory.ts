import CanvasShape from "./canvas-shape";
import ShapeCreator from "./shape-creator";
import { ShapeCreatorParams } from "./shape-creator-params";

export class CanvasShapeFactory {

  createShape(
    shapeCreator: ShapeCreator, 
    creatorParams: ShapeCreatorParams, 
    store: CanvasShape[]) : CanvasShape[]
    {
      console.log(creatorParams)
      return [
        ...store, shapeCreator.create(creatorParams)
      ]
    }
}