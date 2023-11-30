import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Link,
} from "@mui/material";
import { calculateDailyCalorie } from "./Calculators";

const DailyCalories = () => {
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

      setCaloriesResult(result);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Link
      to="/dailycalories" // Replace with your actual route
      className="dailycalories-card" // Replace with your actual class name
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
        Calculate Daily Calories
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
        select
        label="Gender"
        variant="outlined"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        mb={1}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>

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
        mb={1}
      />

      <TextField
        label="Activity Level"
        variant="outlined"
        select
        value={activitylevel}
        onChange={(e) => setLevel(e.target.value)}
        mb={2}
      >
        <MenuItem value="">Select Level</MenuItem>
        <MenuItem value="level_1">Level 1: Sedentary</MenuItem>
        <MenuItem value="level_2">Level 2: Exercise 1-3 times/week</MenuItem>
        <MenuItem value="level_3">Level 3: Exercise 4-5 times/week</MenuItem>
        <MenuItem value="level_4">
          Level 4: Daily exercise or intense exercise 3-4 times/week
        </MenuItem>
        <MenuItem value="level_5">
          Level 5: Intense exercise 6-7 times/week
        </MenuItem>
        <MenuItem value="level_6">
          Level 6: Very intense exercise daily, or physical job
        </MenuItem>
      </TextField>

      <Button variant="contained" onClick={handleCalculateDailyCalories} mb={1}>
        Calculate Daily Calories
      </Button>

      {error && (
        <Typography variant="body2" style={{ color: "red" }} mb={1}>
          {error}
        </Typography>
      )}

      {caloriesResult && (
        <Stack>
          <Typography>BMR: {caloriesResult.BMR}</Typography>

          {Object.entries(caloriesResult.goals).map(([goal, details]) => (
            <Stack key={goal} spacing={1}>
              <Typography>{goal}:</Typography>
              <Typography>{JSON.stringify(details)}</Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Link>
  );
};

export default DailyCalories;
