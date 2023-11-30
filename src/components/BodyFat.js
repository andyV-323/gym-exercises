import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Link,
} from "@mui/material";
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

      setBodyFatResult(result);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Link
      to="/bodyfat" // Replace with your actual route
      className="bodyfat-card" // Replace with your actual class name
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
        Calculate Body Fat
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
        label="Neck"
        variant="outlined"
        type="text"
        value={neck}
        onChange={(e) => setNeck(e.target.value)}
        mb={1}
      />

      <TextField
        label="Waist"
        variant="outlined"
        type="text"
        value={waist}
        onChange={(e) => setWaist(e.target.value)}
        mb={1}
      />

      <TextField
        label="Hip"
        variant="outlined"
        type="text"
        value={hip}
        onChange={(e) => setHip(e.target.value)}
        mb={2}
      />

      <Button variant="contained" onClick={handleCalculateBodyFat} mb={1}>
        Calculate Body Fat
      </Button>

      {error && (
        <Typography variant="body2" style={{ color: "red" }} mb={1}>
          {error}
        </Typography>
      )}

      {bodyfatResult && (
        <Stack>
          {Object.entries(bodyfatResult).map(([key, value]) => (
            <Stack key={key} spacing={1}>
              <Typography>{key}:</Typography>
              <Typography>{JSON.stringify(value)}</Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Link>
  );
};

export default BodyFat;
