import Header from "./Components/Header/header";
import Controls from "./Components/Controls/controls";
import Footer from "./Components/Footer/footer";
import Sketchpad from "./Components/Sketchpad/sketchpad";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    gridSize: 16,
    bgColour: "lightgrey",
    penColour: "#000000",
    mouseDown: false,
    pixelData: [],
  });

  const initPixelData = (size) => {
    const newPixelData = new Array(size ** 2);
    for (let i = 0; i < newPixelData.length; i++) {
      newPixelData[i] = state.bgColour;
    }
    return [...newPixelData];
  };

  const updatePixelData = (idx) => {
    const newPixelData = [...state.pixelData];
    newPixelData[idx] = state.penColour;
    setState({ ...state, pixelData: newPixelData });
  };

  useEffect(() => {
    const newPixelData = initPixelData(16);
    setState({ ...state, pixelData: newPixelData });
  }, []);

  const setSizeHandler = (size) => {
    const newPixelData = initPixelData(size);
    setState({ ...state, gridSize: size, pixelData: newPixelData });
  };

  const mouseDownHandler = (e, key) => {
    e.preventDefault();
    const newPixelData = [...state.pixelData];
    newPixelData[key] = state.penColour;
    setState({ ...state, mouseDown: true, pixelData: newPixelData });
  };

  const mouseUpHandler = () => {
    setState({ ...state, mouseDown: false });
  };

  const setCellColorHandler = (key) => {
    if (state.mouseDown) {
      updatePixelData(key);
    }
  };

  return (
    <div className="App" onMouseUp={mouseUpHandler}>
      <Header />
      <Controls setSize={setSizeHandler} size={state.gridSize} />
      <Sketchpad
        pixelData={state.pixelData}
        size={state.gridSize}
        bgColour={state.bgColour}
        mouseDown={mouseDownHandler}
        mouseUp={mouseUpHandler}
        setColor={setCellColorHandler}
      />
    </div>
  );
}

export default App;
