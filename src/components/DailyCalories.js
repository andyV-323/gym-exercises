import React, { useState } from "react";
import { calculateDailyCalorie } from "./Calculators";

const YourComponent = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activitylevel, setLevel] = useState("");
  const [caloriesResult, setCaloriesResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculateDailyCalories = async () => {
    if (!age || !gender || !weight || !height || !activitylevel) {
      setError("Please enter age, gender, weight, height, and level.");
      return;
    }

    try {
      const result = await calculateDailyCalorie(
        age,
        gender,
        weight,
        height,
        activitylevel
      );

      // Log the result to console for debugging
      console.log("daily calorie result:", result);

      setCaloriesResult(result); // Set the result state
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
        Activity Level:
        <select
          value={activitylevel}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          <option value="level_1">
            level _ 1 : “Sedentary: little or no exercise”,
          </option>
          <option value="level_2">level _ 2 : “Exercise 1-3 times/week”</option>
          <option value="level_3">level _ 3 : “Exercise 4-5 times/week”</option>
          <option value="level_4">
            level _ 4 : “Daily exercise or intense exercise 3-4 times/week”
          </option>
          <option value="level_5">
            level _ 5 : “Intense exercise 6-7 times/week”
          </option>
          <option value="level_6">
            level _ 6 : “Very intense exercise daily, or physical job"
          </option>
        </select>
      </label>
      <br />
      <button onClick={handleCalculateDailyCalories}>
        Calculate Daily Calories
      </button>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {caloriesResult !== null && (
        <div>
          <p>BMR: {caloriesResult.BMR}</p>

          {Object.entries(caloriesResult.goals).map(([goal, details]) => (
            <div key={goal}>
              <p>{goal}:</p>

              <div key={`${goal}-gain`}>
                <p>- Gain Weight: {details?.["gain weight"]}</p>
                <p>- Calory: {details.calory}</p>
              </div>

              <div key={`${goal}-loss`}>
                <p>- Loss Weight: {details?.["loss weight"]}</p>
                <p>- Calory: {details.calory}</p>
              </div>
            </div>
          ))}

          {/* Similarly, render other goals as needed */}
        </div>
      )}
    </div>
  );
};

export default YourComponent;
