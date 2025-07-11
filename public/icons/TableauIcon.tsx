import * as React from "react"
import {SVGProps} from "react";

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={800}
    preserveAspectRatio="xMidYMid"
    viewBox="0 -2.5 256 256"
    width={800}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M123.93 11.593v11.64h-20.821v7.572h20.82V53.99h8.14V30.805h21.34v-7.571h-21.34V0h-8.14z"
      fill="#7099A6"
    />
    <path
      d="M55.884 41.12v16.894H24.37v10.6h31.515v34.306h11.688V68.613H99.56v-10.6H67.572V24.229H55.884z"
      fill="#EB912C"
    />
    <path
      d="M187.953 41.12v16.894h-31.515v11.12h31.515v33.786h12.16V69.134h31.515v-11.12h-31.514V24.228h-12.161z"
      fill="#59879B"
    />
    <path
      d="M120.901 98.66v18.929H85.837v14.1h35.064v37.856h14.196V131.69h35.063v-14.101h-35.063V79.733H120.9z"
      fill="#E8762C"
    />
    <path
      d="M224.01 108.22v11.877h-21.341v9.605h21.34v23.707h10.648v-23.707h21.34v-9.605h-21.34V96.39H224.01z"
      fill="#5B6591"
    />
    <path
      d="M20.82 109.26v11.357H0v8.044h20.82v22.714h8.14V128.66l21.34-.757v-7.287H28.96V97.904h-8.14z"
      fill="#7099A6"
    />
    <path
      d="M55.884 162.731v16.893H24.37v11.12h31.515v33.786h12.161v-33.786H99.56v-11.12H68.045v-33.786h-12.16z"
      fill="#C72035"
    />
    <path
      d="M187.953 162.731v16.893h-31.515v10.6h31.515v34.306h12.16v-34.306h31.515v-10.6h-31.514v-33.786h-12.161z"
      fill="#1F447E"
    />
    <path
      d="M122.936 205.65v11.83h-21.341v9.606h21.34v23.707h10.648v-23.707h21.34v-9.606h-21.34v-23.707h-10.647z"
      fill="#5B6591"
    />
  </svg>
)
export default React.memo(SvgIcon) as React.FC<SVGProps<SVGSVGElement>>;
