import * as React from "react";
import {SVGProps} from "react";

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <linearGradient
      id="1~WE0Lz3GgLZUex~1j_nwa"
      x1="10.281"
      x2="24.742"
      y1="1.322"
      y2="16.996"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#196de5"></stop>
      <stop offset="1" stopColor="#1351c8"></stop>
    </linearGradient>
    <path
      fill="url(#1~WE0Lz3GgLZUex~1j_nwa)"
      d="M4.662 6.941h-.004c-1.42 0-2.179 1.675-1.241 2.743L16 24 30.869 7.159a2 2 0 0 0-.768-.161z"
    ></path>
    <linearGradient
      id="1~WE0Lz3GgLZUex~1j_nwb"
      x1="17.184"
      x2="27.74"
      y1="23.368"
      y2="36.213"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#4d9fff"></stop>
      <stop offset="1" stopColor="#1667eb"></stop>
    </linearGradient>
    <path
      fill="url(#1~WE0Lz3GgLZUex~1j_nwb)"
      d="m38.056 14.996-6.46-7.322a2 2 0 0 0-.727-.516L16 24 3.457 38.215c-.951 1.078-.192 2.769 1.24 2.782l10.785-.007z"
    ></path>
    <linearGradient
      id="1~WE0Lz3GgLZUex~1j_nwc"
      x1="27.324"
      x2="33.437"
      y1="27.209"
      y2="37.448"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#70bcfd"></stop>
      <stop offset="1" stopColor="#4a9ff9"></stop>
    </linearGradient>
    <path
      fill="url(#1~WE0Lz3GgLZUex~1j_nwc)"
      d="m44.217 21.982-6.161-6.985L15.482 41l14.796-.01c.506-.046.98-.273 1.319-.658l12.62-14.308a3.054 3.054 0 0 0 0-4.042"
    ></path>
    <path
      d="M16 24 30.869 7.159a2 2 0 0 0-.768-.161l-.423-.001-14.342 16.248z"
      opacity="0.05"
    ></path>
    <path
      d="M15.669 23.624 16 24 30.869 7.159a2 2 0 0 0-.546-.137z"
      opacity="0.07"
    ></path>
  </svg>
);

export default React.memo(SvgIcon) as React.FC<SVGProps<SVGSVGElement>>;
