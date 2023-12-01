import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Link,
} from '@mui/material';
import { calculateIdealWeight } from './Calculators';

const IdealWeight = () => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [idealweightResult, setIdealWeightResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculateIdealWeight = async () => {
    if (!gender || !height) {
      setError('Please enter gender and height.');
      return;
    }

    try {
      const result = await calculateIdealWeight(gender, height);

      setIdealWeightResult(result);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Link
      to="/idealweight" // Replace with your actual route
      className="idealweight-card" // Replace with your actual class name
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
      >
        Calculate Ideal Weight
      </Typography>

      <TextField
        select
        label="Gender"
        variant="outlined"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        sx={{
          mb: 1,
          width: '25%', // Adjust the width relative to other text fields
        }}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>

      <TextField
        label="Height (cm)"
        variant="outlined"
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        mb={2}
      />

      <Button
        variant="contained"
        style={{ backgroundColor: '#FF2625', color: 'white' }}
        sx={{
          '&:hover': {
            backgroundColor: 'white',
            color: '#FF2625',
          },
        }}
        onClick={handleCalculateIdealWeight}
        mb={1}
      >
        Calculate Ideal Weight
      </Button>

      {error && (
        <Typography variant="body2" style={{ color: 'red' }} mb={1}>
          {error}
        </Typography>
      )}

      {idealweightResult && (
        <Stack>
          {Object.entries(idealweightResult).map(([key, value]) => (
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

export default IdealWeight;
