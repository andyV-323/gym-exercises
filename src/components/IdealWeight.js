import React, { useState } from "react";
import { calculateIdealWeight } from "./Calculators";

const IdealWeight = () => {
  const [gender, setGender] = useState("");

  const [height, setHeight] = useState("");

  const [idealweightResult, setIdealWeightResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculateIdealWeight = async () => {
    if (!gender || !height) {
      setError("Please enter gender /and height.");
      return;
    }

    try {
      const result = await calculateIdealWeight(gender, height);

      setIdealWeightResult(result); // Set the result state
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Height (cm):
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleCalculateIdealWeight}>Calculate Body Fat</button>

      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {idealweightResult && (
        <div>
          {Object.entries(idealweightResult).map(([key, value]) => (
            <div key={key}>
              <p>{key}:</p>
              <p>{JSON.stringify(value)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IdealWeight;
