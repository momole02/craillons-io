import CanvasShape from "./canvas-shape";
import { ShapeCreatorParams } from "./shape-creator-params";

export default  abstract class ShapeCreator {
  abstract create(params: ShapeCreatorParams): CanvasShape; 
}