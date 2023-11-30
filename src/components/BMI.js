import React, { useState } from "react";
import { Typography, TextField, Button, Stack, Link } from "@mui/material";
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
    <Link
      to="/bmi"
      className="bmi-card" // Replace with your actual class name
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Typography variant="h4" mb={2}>
        Calculate BMI
      </Typography>

      <TextField
        label="Age"
        variant="outlined"
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        mb={1}
      />

      <TextField
        label="Weight (kg)"
        variant="outlined"
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        mb={1}
      />

      <TextField
        label="Height (cm)"
        variant="outlined"
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        mb={2}
      />

      <Button variant="contained" onClick={handleCalculateBMI} mb={1}>
        Calculate BMI
      </Button>

      {error && (
        <Typography variant="body2" style={{ color: "red" }} mb={1}>
          {error}
        </Typography>
      )}

      {bmiResult !== null && (
        <Stack>
          <Typography>BMI Result: {bmiResult.bmi}</Typography>
          <Typography>Health: {bmiResult.health}</Typography>
          <Typography>
            Healthy BMI Range: {bmiResult.healthy_bmi_range}
          </Typography>
        </Stack>
      )}
    </Link>
  );
};

export default BMI;
