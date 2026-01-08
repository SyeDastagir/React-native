import { JSX } from "react";
import { NumberOne } from "./numbers/NumberOne";
import { NumberTwo } from "./numbers/NumberTwo";
import { NumberThree } from "./numbers/NumberThree";
import { NumberFour } from "./numbers/NumberFour";
import { NumberFive } from "./numbers/NumberFive";
import { NumberSix } from "./numbers/NumberSix";
import { NumberSeven } from "./numbers/NumberSeven";
import { NumberEight } from "./numbers/NumberEight";
import { NumberNine } from "./numbers/NumberNine";
import { NumberTen } from "./numbers/NumberTen";

export const NumberComponentMap: Record<number, JSX.Element> = {
  1: <NumberOne />,
  2: <NumberTwo />,
  3: <NumberThree />,
  4: <NumberFour />,
  5: <NumberFive />,
  6: <NumberSix />,
  7: <NumberSeven />,
  8: <NumberEight />,
  9: <NumberNine />,
  10: <NumberTen />,
};
