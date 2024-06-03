import { ShapeParams } from "./shape-params";

export default abstract class CanvasShape {

  constructor(protected params: ShapeParams) {}

  abstract render(): unknown;
}