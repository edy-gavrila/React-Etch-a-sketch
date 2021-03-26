import Header from "./Components/Header/header";
import Controls from "./Components/Controls/controls";
import Backdrop from "./Components/Modal/Backdrop/backdrop";
import SaveForm from "./Components/Modal/SaveForm/saveForm";
import Footer from "./Components/Footer/footer";
import Sketchpad from "./Components/Sketchpad/sketchpad";
import { useState, useEffect } from "react";
import "./App.css";

const INIT_GRID_SIZE = 16;
const INIT_BG_COLOUR = "#dbdbdb";
const INIT_PEN_COLOUR = "#383838";
const INIT_COLOUR_MODE = "grayscale";
const RAINBOW_BACKGROUND = "#8f9cff";

const rainbow_colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

function App() {
  const [colourMode, setColourMode] = useState(INIT_COLOUR_MODE);

  const [pixelData, setPixelData] = useState([]);

  const [gridSize, setGridSize] = useState(INIT_GRID_SIZE);

  const [bgColour, setBgColour] = useState(INIT_BG_COLOUR);

  const [penColour, setPenColour] = useState(INIT_PEN_COLOUR);

  const [mouseDown, setMouseDown] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const initPixelData = (size, colour) => {
    const newPixelData = new Array(size ** 2);
    for (let i = 0; i < newPixelData.length; i++) {
      newPixelData[i] = colour;
    }
    return newPixelData;
  };

  const updatePixelData = (idx) => {
    const newPixelData = [...pixelData];

    newPixelData[idx] =
      colourMode === "rainbow"
        ? rainbow_colors[Math.floor(Math.random() * 6)]
        : penColour;
    setPixelData(newPixelData);
  };

  useEffect(() => {
    const newPixelData = initPixelData(INIT_GRID_SIZE, bgColour);
    setPixelData(newPixelData);
  }, []);

  const setSizeHandler = (size) => {
    setGridSize(size);
    const newPixelData = initPixelData(size, bgColour);
    setPixelData(newPixelData);
  };

  const mouseDownHandler = (e, key) => {
    e.preventDefault();
    setMouseDown(true);
    const newPixelData = pixelData;
    newPixelData[key] = penColour;
    setPixelData(newPixelData);
  };

  const mouseUpHandler = () => {
    setMouseDown(false);
  };

  const setCellColorHandler = (key) => {
    if (mouseDown) {
      updatePixelData(key);
    }
  };

  const changeBgColour = (newColour) => {
    setBgColour(newColour);
    const newPixelData = initPixelData(gridSize, newColour);
    setPixelData(newPixelData);
  };

  function changeColourMode(newMode) {
    setColourMode(newMode);
    let newPixelData;
    if (newMode === "grayscale") {
      setPenColour(INIT_PEN_COLOUR);
      setBgColour(INIT_BG_COLOUR);
      newPixelData = initPixelData(gridSize, INIT_BG_COLOUR);
    }

    if (newMode === "rainbow") {
      setBgColour(RAINBOW_BACKGROUND);
      newPixelData = initPixelData(gridSize, RAINBOW_BACKGROUND);
    }

    setPixelData(newPixelData);
  }

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const saveToLocalStorage = (filename) => {
    const names = JSON.parse(localStorage.getItem("drawingNames"));
    if (!names) {
      localStorage.setItem("drawingNames", JSON.stringify([filename]));
    } else {
      names.push(filename);
      localStorage.setItem("drawingNames", JSON.stringify(names));
    }
    localStorage.setItem(filename, JSON.stringify(pixelData));
  };

  return (
    <div className="App" onMouseUp={mouseUpHandler}>
      {showModal ? (
        <Backdrop>
          <SaveForm
            hideModal={hideModalHandler}
            saveToLocalStorage={saveToLocalStorage}
          />
        </Backdrop>
      ) : null}
      <Header showModal={showModalHandler} />
      <Controls
        setSize={setSizeHandler}
        size={gridSize}
        penColor={penColour}
        backgroundColour={bgColour}
        setPenColour={setPenColour}
        setBgColour={changeBgColour}
        setColorMode={changeColourMode}
      />
      <Sketchpad
        pixelData={pixelData}
        size={gridSize}
        bgColour={bgColour}
        mouseDown={mouseDownHandler}
        mouseUp={mouseUpHandler}
        setColor={setCellColorHandler}
      />
    </div>
  );
}

export default App;
