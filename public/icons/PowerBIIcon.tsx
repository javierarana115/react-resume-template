import * as React from "react";
import { SVGProps } from "react";

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="630"
    height="630"
    viewBox="0 0 630 630"
    {...props} 
  >
    <defs>
      <linearGradient id="linearGradient-1" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#EBBB14"></stop>
        <stop offset="100%" stopColor="#B25400"></stop>
      </linearGradient>
      <linearGradient id="linearGradient-2" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#F9E583"></stop>
        <stop offset="100%" stopColor="#DE9800"></stop>
      </linearGradient>
      <linearGradient id="linearGradient-5" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#F9E68B"></stop>
        <stop offset="100%" stopColor="#F3CD32"></stop>
      </linearGradient>
      <filter
        id="filter-4"
        width="136.5%"
        height="116.9%"
        x="-9.1%"
        y="-6.3%"
        filterUnits="objectBoundingBox"
      >
        <feOffset
          dx="20"
          dy="10"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="10"
        ></feGaussianBlur>
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0530211976 0"
        ></feColorMatrix>
      </filter>
      <path
        id="path-3"
        d="M346 604v26H153c-14.36 0-26-11.64-26-26V183c0-14.36 11.64-26 26-26h167c14.36 0 26 11.64 26 26z"
      ></path>
    </defs>
    <g
      id="PBI-Logo"
      fill="none"
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
    >
      <g id="Group" transform="translate(77.5)">
        <rect
          id="Rectangle"
          width="219"
          height="630"
          x="256"
          y="0"
          fill="url(#linearGradient-1)"
          rx="26"
        ></rect>
        <g id="Combined-Shape">
          <use xlinkHref="#path-3" fill="#000" filter="url(#filter-4)"></use>
          <use xlinkHref="#path-3" fill="url(#linearGradient-2)"></use>
        </g>
        <path
          id="Combined-Shape"
          fill="url(#linearGradient-5)"
          d="M219 604v26H26c-14.36 0-26-11.64-26-26V341c0-14.36 11.64-26 26-26h167c14.36 0 26 11.64 26 26z"
        ></path>
      </g>
    </g>
  </svg>
);

export default SvgIcon;
