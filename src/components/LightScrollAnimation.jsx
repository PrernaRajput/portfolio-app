import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {useTime} from "framer-motion";

const LightScrollAnimation = () => {
  const {scrollYProgress} = useScroll();

  const time = useTime();
  const sway = useTransform(time, [0, 2000], [-2, 2]);

  //Paper Plane
  const planeY = useTransform(scrollYProgress, [0, 1], [850, -10]);
  const planeX = useTransform(scrollYProgress, [0, 1], [50, 420]);
  const planeRotate = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const planeScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);

  //Clouds
  const cloudX1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const cloudX2 = useTransform(scrollYProgress, [0, 1], [500, 200]);
  const cloudOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  //Sun
  const sunOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const sunScale = useTransform(scrollYProgress, [0.6, 1], [0.9, 1.1]);

  const sunGlowScale = useTransform(time, [0, 3000], [1, 1.05]);
  const sunGlowOpacity = useTransform(time, [0, 3000], [0.25, 0.4]);

  return (
    <svg
      width='800'
      height='600'
      viewBox='0 0 800 600'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.circle
        cx='650'
        cy='120'
        r='90'
        fill='rgba(255, 217, 102, 0.6)'
        style={{
          scale: sunGlowScale,
          opacity: sunGlowOpacity,
        }}
      />
      {/* sun */}
      <motion.circle
        cx='650'
        cy='120'
        r='70'
        fill='#FFD966'
        style={{opacity: sunOpacity, scale: sunScale}}
      />

      {/* CLOUD 1 */}
      <motion.g style={{x: cloudX1, opacity: cloudOpacity}}>
        <svg
          width='270px'
          height='340px'
          viewBox='0 0 36 36'
          aria-hidden='true'
          role='img'
          class='iconify iconify--twemoji'
          preserveAspectRatio='xMidYMid meet'
        >
          <path
            fill='#CCD6DD'
            d='M27 8a6.98 6.98 0 0 0-2.015.298c.005-.1.015-.197.015-.298a5.998 5.998 0 0 0-11.785-1.573A5.974 5.974 0 0 0 11 6a6 6 0 1 0 0 12a5.998 5.998 0 0 0 5.785-4.428A5.975 5.975 0 0 0 19 14c.375 0 .74-.039 1.096-.104c-.058.36-.096.727-.096 1.104c0 3.865 3.135 7 7 7s7-3.135 7-7a7 7 0 0 0-7-7z'
          ></path>
          <path
            fill='#E1E8ED'
            d='M31 22c-.467 0-.91.085-1.339.204c.216-.526.339-1.1.339-1.704a4.5 4.5 0 0 0-4.5-4.5a4.459 4.459 0 0 0-2.701.921A6.497 6.497 0 0 0 16.5 12a6.497 6.497 0 0 0-6.131 4.357A8 8 0 1 0 8 32h23c2.762 0 5-2.238 5-5s-2.238-5-5-5z'
          ></path>
        </svg>
      </motion.g>

      {/* CLOUD 2 */}
      <motion.g style={{x: cloudX2, opacity: cloudOpacity}}>
        <svg
          width='300px'
          height='280px'
          viewBox='0 0 128 128'
          aria-hidden='true'
          role='img'
          class='iconify iconify--noto'
          preserveAspectRatio='xMidYMid meet'
        >
          <path
            d='M23.45 62.3c.72-.72-1.27-9.29 7.6-15.91s14.92-2.67 15.77-2.96c.84-.28 4.79-17.6 21.4-22.1s33.93 3.94 38.01 18.02c3.73 12.87.84 21.54 1.27 22.1c.42.56 8.45.28 13.09 7.74s2.96 12.11 2.96 12.11l-29.56 9.15h-47.3S5.02 79.47 4.6 77.5c-.42-1.97.53-8.37 7.32-12.25c5.9-3.37 10.26-1.68 11.53-2.95z'
            fill='#e4eaee'
          ></path>
          <path
            d='M35.16 92.84s-15.78 3.3-26.45-4.96C2.29 82.9 4.63 74.83 4.63 74.83s4.6 4.65 13.89 5.91c9.29 1.27 19.71.84 19.71.84s2.6 4.44 12.39 6.48c12.27 2.55 18.74-3.73 18.74-3.73s3.36 4.02 15.19 4.3c11.83.28 18.46-7.98 19.57-8.17c.56-.09 3.82 2.87 10.28 1.83c6.15-.99 9.39-3.66 9.39-3.66s.89 6.62-5.3 10.7c-4.83 3.18-13.23 3.52-13.23 3.52s-1.28 4.91-7.05 8.48c-5.36 3.33-14.6 4.44-21.44 2.4c-8.59-2.56-10.72-6.47-10.72-6.47s-6.4 3.75-16.4 2.48c-9.45-1.18-14.49-6.9-14.49-6.9z'
            fill='#CCD6DD'
          ></path>
        </svg>
      </motion.g>

      {/* PLANE */}
      <motion.g
        style={{
          y: planeY,
          x: planeX,
          rotate: planeRotate,
          rotateZ: sway,
          scale: planeScale,
          transformOrigin: "center",
        }}
        transform='translate(360 360)'
      >
        <svg
          version='1.1'
          id='Layer_1'
          x='0px'
          y='0px'
          viewBox='0 0 426.709 426.709'
          style={{enableBackground: "new 0 0 426.709 426.709"}}
          transform='scale(0.25)'
        >
          <g id='XMLID_585_'>
            <polygon
              id='XMLID_1468_'
              style={{fill: "#EDEDED"}}
              points='186.082,85.079 221.145,50.017 178.718,7.59 125.75,60.559'
            />
            <polygon
              id='XMLID_1465_'
              style={{fill: "#F8F8F9"}}
              points='366.166,300.974 419.136,248.007 376.708,205.58 341.645,240.642'
            />
            <rect
              id='XMLID_1464_'
              x='140.737'
              y='4.284'
              transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 229.2433 198.5224)'
              style={{fill: "#D8D8DA"}}
              width='30.001'
              height='94.999'
            />
            <rect
              id='XMLID_1463_'
              x='338.726'
              y='202.271'
              transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 427.2343 676.5064)'
              style={{fill: "#D8D8DA"}}
              width='30.001'
              height='94.999'
            />
            <path
              id='XMLID_589_'
              style={{fill: "#F8F8F9"}}
              d='M390.85,347.001c-25.22-60.575-63.639-176.776-63.639-176.776l-36.142-36.142 l-98.995,98.995L383.78,424.783l7.07-7.072C410.376,398.186,401.464,372.493,390.85,347.001z'
            />
            <path
              id='XMLID_590_'
              style={{fill: "#EDEDED"}}
              d='M256.5,99.513c0,0-116.201-38.419-176.779-63.639 c-25.49-10.613-51.182-19.526-70.708,0l-7.071,7.071l190.133,190.133l98.995-98.995L256.5,99.513z'
            />
            <path
              id='XMLID_1458_'
              style={{fill: "#EDEDED"}}
              d='M146.309,345.85c17.422-14.024,35.574-30.297,53.623-48.346L412.064,85.372 c19.526-19.526,19.526-51.185,0-70.711s-51.185-19.526-70.711,0L129.221,226.793c-18.049,18.049-34.322,36.201-48.347,53.623 c-45.111-2.61-76.248,3.761-80.379,19.178c-3.292,12.287,11.156,28.174,37.586,44.393c-12.776,24.954-16.323,44.044-7.855,52.512 c8.468,8.467,27.556,4.921,52.506-7.855c16.222,26.439,32.111,40.877,44.399,37.584 C142.549,422.098,148.919,390.961,146.309,345.85z'
            />
            <rect
              id='XMLID_1457_'
              x='278.073'
              y='261.295'
              transform='matrix(0.7071 0.7071 -0.7071 0.7071 287.0669 -140.4511)'
              style={{fill: "#E17858"}}
              width='69.999'
              height='29.999'
            />
            <path
              id='XMLID_1456_'
              style={{fill: "#C6C5CA"}}
              d='M341.321,14.694L129.189,226.826c-18.049,18.049-34.323,36.201-48.348,53.623 c-45.11-2.61-76.247,3.761-80.378,19.178c-3.293,12.288,11.156,28.174,37.586,44.393c-12.381,24.179-16.095,42.854-8.609,51.693 L411.225,13.928C391.643-4.814,360.582-4.568,341.321,14.694z'
            />
            <path
              id='XMLID_1455_'
              style={{fill: "#D8D8DA"}}
              d='M256.5,99.514L256.5,99.514c0,0-17.424-5.761-42.285-14.282l-84.994,84.993 l28.284,28.285L256.5,99.514z'
            />
            <rect
              id='XMLID_1454_'
              x='115.434'
              y='98.659'
              transform='matrix(0.7071 0.7071 -0.7071 0.7071 124.4297 -73.0825)'
              style={{fill: "#E17858"}}
              width='69.999'
              height='30'
            />
            <rect
              id='XMLID_1453_'
              x='166.648'
              y='119.872'
              transform='matrix(0.7071 0.7071 -0.7071 0.7071 145.6436 -81.87)'
              style={{fill: "#DF6246"}}
              width='10'
              height='30'
            />
            <path
              id='XMLID_1452_'
              style={{fill: "#D8D8DA"}}
              d='M0.463,299.626c-2.575,9.607,5.697,21.415,22.063,33.862l53.292-53.292 C33.433,278.335,4.438,284.789,0.463,299.626z'
            />
          </g>
        </svg>
      </motion.g>
    </svg>
  );
};

export default LightScrollAnimation;
