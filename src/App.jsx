import { useState } from "react";
import { MainControls } from "./components/MainControls";
import { SmartHome } from "./components/SmartHome";

export function App() {
  const [firstLightOn, setFirstLightOn] = useState(false);
  const [secondLightOn, setSecondLightOn] = useState(false);
  const [thirdLightOn, setThirdLightOn] = useState(true);

  const handleAllOn = () => {
    setFirstLightOn(true);
    setSecondLightOn(true);
    setThirdLightOn(true);
  };

  const handleAllOff = () => {
    setFirstLightOn(false);
    setSecondLightOn(false);
    setThirdLightOn(false);
  };

  return (
    <div>
      <MainControls onAllOnClick={handleAllOn} onAllOffClick={handleAllOff} />

      <SmartHome
        firstLightOn={firstLightOn}
        secondLightOn={secondLightOn}
        thirdLightOn={thirdLightOn}
        onFirstToggle={() => setFirstLightOn(!firstLightOn)}
        onSecondToggle={() => setSecondLightOn(!secondLightOn)}
        onThirdToggle={() => setThirdLightOn(!thirdLightOn)}
      />
    </div>
  );
}
