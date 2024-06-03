
export interface ShapeParams {

  // paramètres communs
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;

  // paramètres pour l'étoile
  numPoints?: number;
  innerRadius?: number;
  outerRadius?: number;
}