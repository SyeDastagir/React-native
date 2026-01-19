import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
const NetflixNLogo = (props) => (
  <Svg
    height={2500}
    viewBox="124.528 16 262.944 480"
    width={55}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <LinearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={108.142}
      x2={176.518}
      y1={240.643}
      y2={189.038}
    >
      <Stop offset={0} stopColor="#c20000" stopOpacity={0} />
      <Stop offset={1} stopColor="#9d0000" />
    </LinearGradient>
    <LinearGradient
      id="b"
      x1={400.786}
      x2={338.861}
      xlinkHref="#a"
      y1={312.035}
      y2={337.837}
    />
    <Path
      d="m216.398 16h-91.87v480c30.128-7.135 61.601-10.708 91.87-12.052z"
      fill="#c20000"
    />
    <Path
      d="m216.398 16h-91.87v367.267c30.128-7.135 61.601-10.707 91.87-12.051z"
      fill="url(#a)"
    />
    <Path
      d="m387.472 496v-480h-91.87v468.904c53.636 3.416 91.87 11.096 91.87 11.096z"
      fill="#c20000"
    />
    <Path
      d="m387.472 496v-318.555h-91.87v307.459c53.636 3.416 91.87 11.096 91.87 11.096z"
            fill="#c20000"
    />
    <Path
      d="m387.472 496-171.074-480h-91.87l167.03 468.655c55.75 3.276 95.914 11.345 95.914 11.345z"
      fill="#fa0000"
    />
  </Svg>
);
export default NetflixNLogo;