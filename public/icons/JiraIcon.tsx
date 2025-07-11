import * as React from "react";
import {SVGProps} from "react";

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"     {...props}>
    <defs>
      <linearGradient
        gradientTransform="scale(4)"
        gradientUnits="userSpaceOnUse"
        id="jira-original-a"
        x1="22.034"
        x2="17.118"
        y1="9.773"
        y2="14.842"
      >
        <stop offset="0.176" stopColor="#0052cc"></stop>
        <stop offset="1" stopColor="#2684ff"></stop>
      </linearGradient>
      <linearGradient
        gradientTransform="scale(4)"
        gradientUnits="userSpaceOnUse"
        id="jira-original-b"
        x1="16.641"
        x2="10.957"
        y1="15.564"
        y2="21.094"
      >
        <stop offset="0.176" stopColor="#0052cc"></stop>
        <stop offset="1" stopColor="#2684ff"></stop>
      </linearGradient>
    </defs>
    <path
      d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 0 0 108.023 16m0 0"
      fill="#2684ff"
    ></path>
    <path
      d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 0 0-3.977-3.977zm0 0"
      fill="url(#jira-original-a)"
    ></path>
    <path
      d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 0 0-3.976-3.98zm0 0"
      fill="url(#jira-original-b)"
    ></path>
  </svg>
);

export default React.memo(SvgIcon) as React.FC<SVGProps<SVGSVGElement>>;
