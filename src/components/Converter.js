import React, { useState } from "react";

const Converter = () => {
  const [pounds, setPounds] = useState("");
  const [kilograms, setKilograms] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [centimeters, setCentimeters] = useState("");

  const convertWeight = () => {
    const poundsValue = parseFloat(pounds);
    if (!isNaN(poundsValue)) {
      const kilogramsValue = poundsValue * 0.453592;
      setKilograms(kilogramsValue.toFixed(2));
    }
  };

  const convertHeight = () => {
    const feetValue = parseFloat(feet);
    const inchesValue = parseFloat(inches);

    if (!isNaN(feetValue) && !isNaN(inchesValue)) {
      const centimetersValue = feetValue * 30.48 + inchesValue * 2.54;
      setCentimeters(centimetersValue.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Weight Converter</h2>
      <label>
        Pounds:
        <input
          type="text"
          value={pounds}
          onChange={(e) => setPounds(e.target.value)}
        />
        <button onClick={convertWeight}>Convert to Kilograms</button>
        {kilograms && (
          <p>{`${pounds} pounds is approximately ${kilograms} kilograms.`}</p>
        )}
      </label>

      <h2>Height Converter</h2>
      <label>
        Feet:
        <input
          type="text"
          value={feet}
          onChange={(e) => setFeet(e.target.value)}
        />
      </label>
      <label>
        Inches:
        <input
          type="text"
          value={inches}
          onChange={(e) => setInches(e.target.value)}
        />
        <button onClick={convertHeight}>Convert to Centimeters</button>
        {centimeters && (
          <p>{`${feet} feet ${inches} inches is approximately ${centimeters} centimeters.`}</p>
        )}
      </label>
    </div>
  );
};

export default Converter;
