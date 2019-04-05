import React from 'react';
import colors from '../../../../styles/colors';

export default getProps => (
  <svg
    className={getProps.className}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    width="26px"
    height="26px"
    viewBox="0 0 26 26"
    enableBackground="new 0 0 26 26"
  >
    <polyline
      fill="none"
      stroke={colors.roundBtn}
      strokeWidth="1.9501"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="  8.938,22.608 1.088,24.912 3.392,17.063 "
    />
    <path
      fill={colors.roundBtn}
      d="M1.894,21.158l-0.86,2.931c-0.072,0.249-0.004,0.517,0.178,0.7c0.135,0.134,0.316,0.207,0.5,0.207  c0.067,0,0.135-0.01,0.2-0.029l2.931-0.86L1.894,21.158z"
    />
    <g>
      <polygon fill={colors.roundBtn} points="5.175,18.832 6.772,19.19 7.002,20.658 17.996,9.674 16.17,7.846  " />
      <polygon fill={colors.roundBtn} points="19.202,10.857 8.123,21.926 9.546,23.35 20.669,12.324  " />
      <polygon fill={colors.roundBtn} points="15.085,6.739 13.774,5.43 2.652,16.454 4.006,17.808  " />
    </g>
    <polygon fill={colors.roundBtn} points="21.666,11.229 14.771,4.334 16.349,2.855 23.243,9.75 " />
    <path
      fill={colors.roundBtn}
      d="M24.061,8.548l-6.607-6.608l1.014-1.025c0.902-0.902,2.373-0.895,3.285,0.018l3.305,3.304  c0.912,0.913,0.92,2.384,0.018,3.286L24.061,8.548z"
    />
  </svg>
);
