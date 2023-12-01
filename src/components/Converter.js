import React, { useState } from 'react';
import { Typography, Stack, Button, TextField, Link } from '@mui/material';

const Converter = () => {
  const [pounds, setPounds] = useState('');
  const [kilograms, setKilograms] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [centimeters, setCentimeters] = useState('');

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
    <Link
      to="/converter" // Replace with your actual route
      className="converter-card" // Replace with your actual class name
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
        Weight Converter
      </Typography>

      <Stack direction="column" alignItems="center" spacing={1}>
        <TextField
          label="Pounds"
          variant="outlined"
          type="text"
          value={pounds}
          onChange={(e) => setPounds(e.target.value)}
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
          onClick={convertWeight}
        >
          Convert to Kilograms
        </Button>
        {kilograms && (
          <Typography>{`${pounds} pounds is approximately ${kilograms} kilograms.`}</Typography>
        )}
      </Stack>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
      >
        Height Converter
      </Typography>

      <Stack direction="column" alignItems="center" spacing={1}>
        <TextField
          label="Feet"
          variant="outlined"
          type="text"
          value={feet}
          onChange={(e) => setFeet(e.target.value)}
        />
        <TextField
          label="Inches"
          variant="outlined"
          type="text"
          value={inches}
          onChange={(e) => setInches(e.target.value)}
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
          onClick={convertHeight}
        >
          Convert to Centimeters
        </Button>
        {centimeters && (
          <Typography>{`${feet} feet ${inches} inches is approximately ${centimeters} centimeters.`}</Typography>
        )}
      </Stack>
    </Link>
  );
};

export default Converter;
