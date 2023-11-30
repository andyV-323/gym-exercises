import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import BMI from "../components/BMI";
import BodyFat from "../components/BodyFat";
import Converter from "../components/Converter";
import DailyCalories from "../components/DailyCalories";
import IdealWeight from "../components/IdealWeight";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const CustomArrow = ({ onClick, icon, className }) => (
  <Typography onClick={onClick} className={className}>
    <img src={icon} alt="arrow" />
  </Typography>
);

const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return (
    <CustomArrow
      onClick={scrollPrev}
      icon={LeftArrowIcon}
      className="right-arrow"
    />
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);
  return (
    <CustomArrow
      onClick={scrollNext}
      icon={RightArrowIcon}
      className="left-arrow"
    />
  );
};

const FitnessCalculators = () => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <Box m="0 40px">
        <Converter />
      </Box>
      <Box m="0 40px">
        <BMI />
      </Box>
      <Box m="0 40px">
        <DailyCalories />
      </Box>
      <Box m="0 40px">
        <BodyFat />
      </Box>
      <Box m="0 40px">
        <IdealWeight />
      </Box>
    </ScrollMenu>
  );
};

export default FitnessCalculators;
