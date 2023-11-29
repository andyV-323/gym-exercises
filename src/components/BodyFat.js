import React, { useState } from "react";
import { calculateBodyFat } from "./Calculators";

const BodyFat = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [bodyfatResult, setBodyFatResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculateBodyFat = async () => {
    if (!age || !gender || !weight || !height || !neck || !waist || !hip) {
      setError(
        "Please enter age, gender, weight, height, neck, waist, and hip."
      );
      return;
    }

    try {
      const result = await calculateBodyFat(
        age,
        gender,
        weight,
        height,
        neck,
        waist,
        hip
      );

      setBodyFatResult(result); // Set the result state
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <label>
        Age:
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
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
        Weight (kg):
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
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
      <label>
        Neck:
        <input
          type="text"
          value={neck}
          onChange={(e) => setNeck(e.target.value)}
        />
      </label>
      <br />
      <label>
        Waist:
        <input
          type="text"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hip:
        <input
          type="text"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCalculateBodyFat}>Calculate Body Fat</button>

      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {bodyfatResult && (
        <div>
          {Object.entries(bodyfatResult).map(([key, value]) => (
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

export default BodyFat;
