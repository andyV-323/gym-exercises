// YourComponent.js
import React, { useState } from "react";
import { calculateBMI } from "./Calculators";

const BMI = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculateBMI = async () => {
    if (!age || !weight || !height) {
      setError("Please enter age, weight, and height.");
      return;
    }

    try {
      const result = await calculateBMI(age, weight, height);

      // Log the result to console for debugging
      console.log("BMI result:", result);

      setBmiResult(result); // Set the result state
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
      <button onClick={handleCalculateBMI}>Calculate BMI</button>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {bmiResult !== null && (
        <div>
          {/* Adjust based on the actual structure of the API response */}
          <p>BMI Result: {bmiResult.bmi}</p>
          <p>Health: {bmiResult.health}</p>
          <p>Healthy BMI Range: {bmiResult.healthy_bmi_range}</p>
        </div>
      )}
    </div>
  );
};

export default BMI;
