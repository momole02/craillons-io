/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ColorDisplay from './components/ColorDisplay';
import { Layer, Stage } from 'react-konva';
import { gToolList } from './factory/tools/tool-list';
import { KonvaEventObject } from 'konva/lib/Node';
import CanvasShape from './factory/types/canvas-shape';
import { CanvasShapeFactory } from './factory/types/canvas-shape-factory';
import ShapeCreator from './factory/types/shape-creator';

const shapeFactory = new CanvasShapeFactory()

function App() {

  const [selectedColor, setSelectedColor] = useState("#fff");
  const [canvasWidth, setCanvasWidth] = useState(600);
  const [canvasHeight, setCanvasHeight] = useState(600);
  const [toolOpacity, setToolOpacity] = useState(1);
  const [toolSize, setToolSize] = useState(16);
  const [currentTool, setCurrentTool] = useState(gToolList[0].id);
  const [starNumPoints, setStarNumPoints] = useState(5);
  const [starInnerRadius, setStarInnerRadius] = useState(5)
  const [starOuterRadius, setStarOuterRadius] = useState(5)

  const [shapes, setShapes] = useState<CanvasShape[]>([])

  const isDragging = useRef(false)

  const getToolCreator = (): ShapeCreator| undefined  => {
    return gToolList.find((tool) => tool.id == currentTool)?.creator;
  }

  const handleMouseDown = (_e: KonvaEventObject<MouseEvent>) => {
    isDragging.current = true;
  }

  const handleMouseUp = (_e: KonvaEventObject<MouseEvent>) => {
    isDragging.current = false;
  }

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if(isDragging.current){
      const offset = e.target.getStage()?.getPointerPosition();
      const toolCreator= getToolCreator();
      if(toolCreator && offset){
        setShapes(
          shapeFactory.createShape(
            toolCreator,
            {
              shapeParams:{
                x: offset.x!,
                y: offset.y!,
                opacity: toolOpacity,
                size: toolSize,
                color: selectedColor,
                numPoints: starNumPoints,
                innerRadius: starInnerRadius,
                outerRadius: starOuterRadius,
              },
              randomizeSize: e.evt.altKey,
            },
            shapes,
          )
        )
      }
    }
  } 
  return (
    <div>
      <Navbar 
        selectedColor={selectedColor} 
        setSelectedColor={setSelectedColor} 
        canvasWidth={canvasWidth} 
        canvasHeight={canvasHeight} 
        setCanvasWidth={setCanvasWidth} 
        setCanvasHeight={setCanvasHeight}
        currentTool={currentTool}
        setCurrentTool={setCurrentTool}
        toolOpacity={toolOpacity}
        setToolOpacity={setToolOpacity}
        toolSize={toolSize}
        setToolSize={setToolSize}
        starNumPoints={starNumPoints}
        setStarNumPoints={setStarNumPoints}
        starInnerRadius={starInnerRadius}
        setStarInnerRadius={setStarInnerRadius}
        starOuterRadius={starOuterRadius}
        setStarOuterRadius={setStarOuterRadius}
        />

      <div className="flex justify-center">
          <ColorDisplay color={selectedColor}/>
      </div>

      <div className="flex justify-center ">
        <Stage 
          className={" cursor-crosshair w-min bg-[#ededed] border-[1px] border-slate-300 shadow-md"}
          width={canvasWidth} 
          height={canvasHeight}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          >
        <Layer>
          {shapes.map((shape) => shape.render())}
        </Layer>
      </Stage>
    </div>
    </div>
  )
}

export default App
