import React, { useState } from "react";
import { Button } from "antd";
function App() {
  const seasons = ["Лето", "Осень", "Зима", "Весна"];
  const colors = ["orange", "brown", "blue", "green"];
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((useState) => (useState + 1) % seasons.length);
  };
  return (
    <div style={{ margin: 350, textAlign: "center" }}>
      <Button
        type="text"      
        onClick={handleClick}
        style={{
          fontSize: 70,
          color: colors[index],
          transition: "1s"
        }}>
        {seasons[index]}
      </Button>
    </div>
  );
}
export default App;