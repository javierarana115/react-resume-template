import * as React from "react";
import {SVGProps} from "react";

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="150"
    viewBox="0 0 96 96"
    width="150"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spread the props onto the SVG element
  >
    <defs>
      <linearGradient
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
        id="e399c19f-b68f-429d-b176-18c2117ff73c"
        x1="-1032.172"
        x2="-1059.213"
        y1="145.312"
        y2="65.426"
      >
        <stop offset="0" stopColor="#114a8b"></stop>
        <stop offset="1" stopColor="#0669bc"></stop>
      </linearGradient>
      <linearGradient
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
        id="ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15"
        x1="-1023.725"
        x2="-1029.98"
        y1="108.083"
        y2="105.968"
      >
        <stop offset="0" stopOpacity="0.3"></stop>
        <stop offset="0.071" stopOpacity="0.2"></stop>
        <stop offset="0.321" stopOpacity="0.1"></stop>
        <stop offset="0.623" stopOpacity="0.05"></stop>
        <stop offset="1" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
        id="a7fee970-a784-4bb1-af8d-63d18e5f7db9"
        x1="-1027.165"
        x2="-997.482"
        y1="147.642"
        y2="68.561"
      >
        <stop offset="0" stopColor="#3ccbf4"></stop>
        <stop offset="1" stopColor="#2892df"></stop>
      </linearGradient>
    </defs>
    <path
      d="M33.338 6.544h26.038l-27.03 80.087a4.15 4.15 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.15 4.15 0 0 1 3.934-2.825z"
      fill="url(#e399c19f-b68f-429d-b176-18c2117ff73c)"
    ></path>
    <path
      d="M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.17 4.17 0 0 0 2.846 1.121h23.38z"
      fill="#0078d4"
    ></path>
    <path
      d="M33.338 6.544a4.12 4.12 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.44 4.44 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.24 4.24 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z"
      fill="url(#ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15)"
    ></path>
    <path
      d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.15 4.15 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z"
      fill="url(#a7fee970-a784-4bb1-af8d-63d18e5f7db9)"
    ></path>
  </svg>
);

export default React.memo(SvgIcon) as React.FC<SVGProps<SVGSVGElement>>;