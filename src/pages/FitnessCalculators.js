import BMI from "../components/BMI";
import BodyFat from "../components/BodyFat";
import Converter from "../components/Converter";
import DailyCalories from "../components/DailyCalories";
import IdealWeight from "../components/IdealWeight";

const FitnessCalculators = () => {
  return (
    <div>
      <Converter />
      <BMI />
      <DailyCalories />
      <BodyFat />
      <IdealWeight />
    </div>
  );
};

export default FitnessCalculators;
