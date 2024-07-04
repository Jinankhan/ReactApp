import styled from "@emotion/styled";
import Slider, { SliderProps } from "@mui/material/Slider";

const CustomSlider = styled(Slider)({
  "& .MuiSlider-thumb": {
    width: 25,
    height: 23,
    borderRadius: 8,
    border: `2px solid #B4A9FF`,
  },
  "& .MuiSlider-thumb::after": {
    width: 23,
    height: 23,
    borderRadius: 8,
  },
  "& .MuiSlider-thumb::before": {
    width: 23,
    height: 23,
    borderRadius: 8,
  },

  "& .MuiSlider-rail": {
    backgroundColor: "#3A3A3D",
  },
  height: 15,
  width: 276,
});

interface Customprops extends SliderProps {
  value?: number;
  min?: number;
  max?: number;
  handleEvent?: (event: Event, value: number | number[]) => void;
}
export const CustomizedSlider: React.FC<Customprops> = ({
  value,
  min,
  max,
  handleEvent,
}) => {
  console.log("button rendered");
  return (
    <CustomSlider
      value={value}
      min={min}
      max={max}
      onChange={handleEvent}
    ></CustomSlider>
  );
};
