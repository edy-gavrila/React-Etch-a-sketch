import Header from "./Components/Header/header";
import Controls from "./Components/Controls/controls";
import Backdrop from "./Components/Modal/Backdrop/backdrop";
import SaveForm from "./Components/SaveForm/saveForm";
import LoadForm from "./Components/LoadForm/loadForm";
import About from "./Components/About/about";
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

  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

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

  const showSaveModalHandler = () => {
    setShowSaveModal(true);
  };

  const hideSaveModalHandler = () => {
    setShowSaveModal(false);
  };
  const showLoadModalHandler = () => {
    setShowLoadModal(true);
  };

  const hideLoadModalHandler = () => {
    setShowLoadModal(false);
  };
  const showAboutModalHandler = () => {
    setShowAboutModal(true);
  };

  const hideAboutModalHandler = () => {
    setShowAboutModal(false);
  };

  const saveToLocalStorage = (filename) => {
    const names = JSON.parse(localStorage.getItem("drawingNames"));
    if (!names) {
      localStorage.setItem("drawingNames", JSON.stringify([filename]));
    } else {
      names.push(filename);
      localStorage.setItem("drawingNames", JSON.stringify(names));
    }
    const drawing = {
      size: gridSize,
      bgColour: bgColour,
      penColour: penColour,
      colourMode: colourMode,
      data: pixelData,
    };
    localStorage.setItem(filename, JSON.stringify(drawing));
  };

  const loadFromLocalStorage = (filename) => {
    const data = JSON.parse(localStorage.getItem(filename));
    setBgColour(data.bgColour);
    setPenColour(data.penColor);
    setGridSize(data.size);
    setColourMode(data.colourMode);
    setPixelData(data.data);
  };

  return (
    <div className="App" onMouseUp={mouseUpHandler}>
      <Backdrop hidden={!showSaveModal}>
        <SaveForm
          hideModal={hideSaveModalHandler}
          saveToLocalStorage={saveToLocalStorage}
        />
      </Backdrop>

      <Backdrop hidden={!showLoadModal}>
        <LoadForm
          hideModal={hideLoadModalHandler}
          loadDrawingHandler={loadFromLocalStorage}
        />
      </Backdrop>

      <Backdrop hidden={!showAboutModal}>
        <About hideModal={hideAboutModalHandler} />
      </Backdrop>

      <Header
        showSaveModal={showSaveModalHandler}
        showLoadModal={showLoadModalHandler}
        showAboutModal={showAboutModalHandler}
      />
      <Controls
        setSize={setSizeHandler}
        size={gridSize}
        penColor={penColour}
        backgroundColour={bgColour}
        colourMode={colourMode}
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
