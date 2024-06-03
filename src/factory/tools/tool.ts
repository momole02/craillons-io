import ShapeCreator from "../types/shape-creator";

export default class Tool {
  id: string = "";
  label: string = "";
  creator?: ShapeCreator;

  constructor(data?: Tool) {
    if(data){
      this.id= data.id;
      this.label = data.label;
      this.creator = data.creator
    }
  }
}