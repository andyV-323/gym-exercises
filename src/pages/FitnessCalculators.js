import React from 'react';
import { Stack, Typography, Box } from '@mui/material';

import BMI from '../components/BMI';
import BodyFat from '../components/BodyFat';
import Converter from '../components/Converter';
import DailyCalories from '../components/DailyCalories';
import IdealWeight from '../components/IdealWeight';

const FitnessCalculators = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Calculators
      </Typography>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h5" gutterBottom></Typography>
          <Converter />
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom></Typography>
          <BMI />
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom></Typography>
          <DailyCalories />
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom></Typography>
          <BodyFat />
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom></Typography>
          <IdealWeight />
        </Box>
      </Stack>
    </Box>
  );
};

export default FitnessCalculators;
