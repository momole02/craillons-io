import CircleCreator from "../creators/circle-creator";
import { SquareCreator } from "../creators/square-creator";
import { StarCreator } from "../creators/star-creator";
import Tool from "./tool";

export enum Tools{
  square = "square",
  circle = "circle",
  star = "star",
}

export const gToolList= [
  new Tool({id:Tools.square, label: "Carré", creator: new SquareCreator()}),
  new Tool({id:Tools.circle, label: "Cercle", creator: new CircleCreator()}),
  new Tool({id:Tools.star, label: "Etoile", creator: new StarCreator()}),
]