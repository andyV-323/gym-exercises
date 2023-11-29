// bmiFunctions.js
import { fetchData, calculatorOptions } from "../utils/fetchData";

const baseApiUrl = "https://fitness-calculator.p.rapidapi.com";

export const calculateBMI = async (age, weight, height) => {
  const endpoint = "/bmi";
  const urlWithParams = `${baseApiUrl}${endpoint}?age=${age}&weight=${weight}&height=${height}`;
  const options = {
    ...calculatorOptions,
  };

  try {
    const response = await fetchData(urlWithParams, options);
    const data = response.data;
    console.log("BMI result:", data);
    return data;
  } catch (error) {
    console.error("Error calculating BMI:", error);
    throw new Error("Error calculating BMI. Please try again.");
  }
};

export const calculateDailyCalorie = async (
  age,
  gender,
  weight,
  height,
  activitylevel
) => {
  const endpoint = "/dailycalorie";
  const urlWithParams = `${baseApiUrl}${endpoint}?age=${age}&gender=${gender}&weight=${weight}&height=${height}&activitylevel=${activitylevel}`;
  const options = {
    ...calculatorOptions,
  };

  try {
    const response = await fetchData(urlWithParams, options);
    const data = response.data;
    console.log("Daily calories:", data);
    return data;
  } catch (error) {
    console.error("Error calculating calories:", error);
    throw new Error("Error calculating calories. Please try again.");
  }
};

export const calculateBodyFat = async (
  age,
  gender,
  weight,
  height,
  neck,
  waist,
  hip
) => {
  const endpoint = "/bodyfat";
  const urlWithParams = `${baseApiUrl}${endpoint}?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`;
  const options = {
    ...calculatorOptions,
  };
  try {
    const response = await fetchData(urlWithParams, options);
    const data = response.data;
    console.log("Body Fat:", data);
    return data;
  } catch (error) {
    console.error("Error calculating calories:", error);
    throw new Error("Error calculating calories. Please try again.");
  }
};

export const calculateIdealWeight = async (gender, height) => {
  const endpoint = "/idealweight";
  const urlWithParams = `${baseApiUrl}${endpoint}?&gender=${gender}&height=${height}`;
  const options = {
    ...calculatorOptions,
  };
  try {
    const response = await fetchData(urlWithParams, options);
    const data = response.data;
    console.log("Ideal Weight:", data);
    return data;
  } catch (error) {
    console.error("Error calculating calories:", error);
    throw new Error("Error calculating calories. Please try again.");
  }
};
/*export const calculateBMR = async (age, weight, height, gender) => {
  const endpoint = "/bmr";
  const urlWithParams = `${baseApiUrl}${endpoint}?age=${age}&weight=${weight}&height=${height}&gender=${gender}`;
  const options = {
    ...calculatorOptions,
  };

  try {
    const response = await fetchData(urlWithParams, options);
    const data = response.data;
    console.log("BMR result:", data);
    return data;
  } catch (error) {
    console.error("Error calculating BMR:", error);
    throw new Error("Error calculating BMR. Please try again.");
  }
};*/
