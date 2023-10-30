import React from "react";
import ColorPicker from "./components/ColorPicker";

const App = () => {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];

  return (
    <div className="app">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;