import React from "react";
import {useScroll, useTransform, motion} from "framer-motion";

const ScrollAnimation = () => {
  const {scrollYProgress} = useScroll();

  // Rocket animation
  const rocketY = useTransform(scrollYProgress, [0, 1], [-120, 430]);
  const rocketX = useTransform(scrollYProgress, [0, 1], [180, 510]);
  const rocketScale = useTransform(
    scrollYProgress,
    [0.5, 0.9, 1],
    [0.5, 1, 1.15],
  );

  //Moon animation
  const moonOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const moonScale = useTransform(scrollYProgress, [0.7, 1], [0.95, 1]);
  const moonY = useTransform(scrollYProgress, [0.7, 0.9], [50, 500]);
  const moonX = useTransform(scrollYProgress, [0.7, 0.9], [500, 425]);

  // Earth Animation
  const earthY = useTransform(scrollYProgress, [0, 1], [-116, -80]);
  const earthScale = useTransform(scrollYProgress, [0, 1], [0.9, 0.85]);
  const earthOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const rocketRotate = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 0.95, 1],
    [0, 180, 180, 180, 360],
  );

  //Flame
  const flameScaleY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9, 1],
    [1.4, 1.6, 0.4, 0],
  );
  const flameOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  return (
    <div className='w-full h-full flex items-center justify-center bg-[rgb(0,0,3)'>
      <div className='sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden'>
        <svg
          width='800'
          height='800'
          viewBox='0 0 800 600'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/*EARTH */}
          <motion.g
            style={{
              y: earthY,
              scale: earthScale,
              opacity: earthOpacity,
            }}
            transform='translate(270 450)'
          >
            <svg
              width='270' // reduced from 300
              height='270'
              viewBox='0 0 200 200'
            >
              {/* Ocean */}
              <circle cx='100' cy='100' r='90' fill='#1e88e5' />

              {/* Continents */}
              <g transform='scale(0.5) translate(-250 150)'>
                <path
                  d='M608.021,40.339s4.239,12.461,1.53,16.691-6.508,10.277-12.583,11.015-8.483-3.429-12.7.761-5.718,9.971-4.514,13.25a106.467,106.467,0,0,0,5.417,10.586s.6,7.785-.3,9.267-.3,3.8-8.427,6.527-24.075-3.522-24.075-3.522L542.44,57.03l42.434-27.972Z'
                  fill='#9ed32b'
                />
              </g>
              <g transform='scale(1.99) translate(19 -6)'>
                <path
                  d='m18.58 12.87a5.82 5.82 0 0 1 4.16.34c1.62.88 1.44 1.25 3.65 1.22s3.29-.4 3.94-.25 3.41 1.35 5.85.88a10.42 10.42 0 0 0 4.28-1.75c.72-.47 1.15-1.25 1.59-1.19s4.41 2.41 4.34 2.66a4.52 4.52 0 0 1 -1.71 1.5 7.43 7.43 0 0 0 -2.79 3.46c-.5 1.47-.78 5.88-.12 6.32s2.34-.19 3 .31.81 2.06 1.91 2.19 1.56-.69 2.56 0 1 1.21 2.56 1.25 3-.32 3.09 0a2.47 2.47 0 0 1 -.12 1.43c-.16.1-5.44.72-6.69.79s-1 .34-1.69 0-1.78-1.63-3.39-1.88-6.53-.56-7.5-.56-1.25 0-1.35.47.1 5.18-.4 6.72-.16 4.06 1.65 4.78 3.69 1.09 3.94 1.75 1.13 5 1.91 6.47 1.87 3.15 1.5 3.46a20.31 20.31 0 0 1 -6 1.54 23.64 23.64 0 0 1 -5.78 0s-1.16-6-1.47-6.54a4.67 4.67 0 0 1 -.41-2.34c.13-.41 2.34-4.87 2.06-6s-.72-2.28-1.75-2.56-2.75 0-5.53 0a27.84 27.84 0 0 1 -5.34-.44c-.56-.12-.88 0-1.13-.28s-2.28-4-2-4.34 3.13-1.16 3.25-1.82-.06-2.25.66-2.31 3.87.38 4.87-.15 1.13-1.75 1.16-2.82-.37-3.4-.84-3.84-5-1.81-6.72-2.72-3.17-1.62-2.98-2.22a12.45 12.45 0 0 1 3.78-3.53z'
                  fill='#9ed32b'
                ></path>
              </g>
              <g transform='scale(0.75) translate(-587 42)'>
                <path
                  id='Path_24'
                  data-name='Path 24'
                  d='M699.73,87.924s-11.356,6.654-16.043,4.849-11.374-4.314-13.316-10.117,1.656-9-3.294-12.285-10.916-3.6-13.886-1.764a106.543,106.543,0,0,0-9.284,7.431S636.4,78.19,634.768,77.6s-3.782.47-8.085-6.945-5.016-45.814-5.016-45.814l48.552,2.183,35.919,35.957Z'
                  fill='#9ed32b'
                ></path>
              </g>
              <g transform='scale(0.75) translate(-587 42)'>
                <path
                  id='Path_25'
                  data-name='Path 25'
                  d='M606.946,94.672c-1.141-1.394-1.834-5.168-1.383-7.07s1.076-4.62,2.6-5.153,2.4,1.159,3.239-.78a8.858,8.858,0,0,0,.385-5.818c-.506-1.357-2.028-4.325-2.028-4.325a23.519,23.519,0,0,1-.47-3.967,3.535,3.535,0,0,1,1.794-3.088c1.941-1.456,6.437.64,6.437.64s6.289,14.962,5.4,20.085c-.7,4.034-5.273,12.87-9.324,13.462C611.683,98.938,608.175,96.172,606.946,94.672Z'
                  fill='#9ed32b'
                />
              </g>
              <g transform='scale(0.95) translate(-470 30)'>
                <path
                  id='Path_25'
                  data-name='Path 25'
                  d='M606.946,94.672c-1.141-1.394-1.834-5.168-1.383-7.07s1.076-4.62,2.6-5.153,2.4,1.159,3.239-.78a8.858,8.858,0,0,0,.385-5.818c-.506-1.357-2.028-4.325-2.028-4.325a23.519,23.519,0,0,1-.47-3.967,3.535,3.535,0,0,1,1.794-3.088c1.941-1.456,6.437.64,6.437.64s6.289,14.962,5.4,20.085c-.7,4.034-5.273,12.87-9.324,13.462C611.683,98.938,608.175,96.172,606.946,94.672Z'
                  fill='#9ed32b'
                />
              </g>
              <g transform='scale(1.99) translate(6 28)'>
                <path
                  d='m18.58 12.87a5.82 5.82 0 0 1 4.16.34c1.62.88 1.44 1.25 3.65 1.22s3.29-.4 3.94-.25 3.41 1.35 5.85.88a10.42 10.42 0 0 0 4.28-1.75c.72-.47 1.15-1.25 1.59-1.19s4.41 2.41 4.34 2.66a4.52 4.52 0 0 1 -1.71 1.5 7.43 7.43 0 0 0 -2.79 3.46c-.5 1.47-.78 5.88-.12 6.32s2.34-.19 3 .31.81 2.06 1.91 2.19 1.56-.69 2.56 0 1 1.21 2.56 1.25 3-.32 3.09 0a2.47 2.47 0 0 1 -.12 1.43c-.16.1-5.44.72-6.69.79s-1 .34-1.69 0-1.78-1.63-3.39-1.88-6.53-.56-7.5-.56-1.25 0-1.35.47.1 5.18-.4 6.72-.16 4.06 1.65 4.78 3.69 1.09 3.94 1.75 1.13 5 1.91 6.47 1.87 3.15 1.5 3.46a20.31 20.31 0 0 1 -6 1.54 23.64 23.64 0 0 1 -5.78 0s-1.16-6-1.47-6.54a4.67 4.67 0 0 1 -.41-2.34c.13-.41 2.34-4.87 2.06-6s-.72-2.28-1.75-2.56-2.75 0-5.53 0a27.84 27.84 0 0 1 -5.34-.44c-.56-.12-.88 0-1.13-.28s-2.28-4-2-4.34 3.13-1.16 3.25-1.82-.06-2.25.66-2.31 3.87.38 4.87-.15 1.13-1.75 1.16-2.82-.37-3.4-.84-3.84-5-1.81-6.72-2.72-3.17-1.62-2.98-2.22a12.45 12.45 0 0 1 3.78-3.53z'
                  fill='#9ed32b'
                ></path>
              </g>

              {/* Atmosphere glow */}
              <circle
                cx='100'
                cy='100'
                r='95'
                fill='none'
                stroke='rgba(135,206,250,0.35)'
                strokeWidth='6'
              />
            </svg>
          </motion.g>
          {/* MOON */}
          <motion.g
            style={{
              opacity: moonOpacity,
              scale: moonScale,
              y: moonY,
              x: moonX,
            }}
            transform='translate(60 460) scale(1.2)'
          >
            <svg
              width='200'
              height='200'
              viewBox='0 0 200 200'
              fillRule='evenodd'
              clipRule='evenodd'
              strokeLinejoin='round'
              strokeMiterlimit='2'
            >
              <circle cx='100' cy='100' r='94.147' fill='#e4e2dc' />
              <clipPath id='moonClip'>
                <circle cx='100' cy='100' r='94.147' />
              </clipPath>
              <g clipPath='url(#moonClip)'>
                <path
                  d='M173.111-46.282l59.723 39.66 25.005 67.189-19.264 69.056-56.174 44.544-71.628 3.018-59.723-39.66-25.005-67.189L45.308 1.28l56.174-44.544 71.629-3.018z'
                  fill='#f6f4ef'
                />
              </g>
              <path
                d='M158.551 135.006l-4.072 2.503 6.822 5.83 1.8-4.404-4.55-3.929zM116.907 69.037l-6.653 4.089 11.145 9.525 2.941-7.195-7.433-6.419zM67.138 119.523l-4.542 2.791 7.61 6.503 2.007-4.912-5.075-4.382zM80.286 37.068l4.825-3.028-8.193-6.873-2.097 5.268 5.465 4.633zM143.466 148.273l5.198-3.261-8.826-7.403-2.259 5.674 5.887 4.99z'
                fill='#e4e2dc'
              />
              <path
                d='M163.108 73.155l2.628 13.525-12.051 6.679-10.076-9.398 5.824-12.486 13.675 1.68zM83.672 53.684l-7.194 20.408-21.332-.919-5.99-20.976 17.63-12.045 16.886 13.532zM91.359 125.589l-5.626-25.934 22.927-13.364 19.794 17.674-10.692 24.288-26.403-2.664zM35.02 112.946l-3.955-14.875 12.902-8.012 11.929 9.923-5.53 14.145-15.346-1.181zM104.602 180.886l-15.004-13.214 8.155-17.962 20.044 2.111 4.233 19.268-17.428 9.797z'
                fill='#e4e2dc'
              />
            </svg>
          </motion.g>

          {/* ROCKET */}
          <motion.g
            style={{
              y: rocketY,
              x: rocketX,
              scale: rocketScale,
              rotate: rocketRotate,
            }}
            transform='translate(385 80)'
          >
            <path
              d='M 15,0 L 30,30 L 0,30 Z'
              fill='white'
              transform='rotate(0 15 15)'
            />
            <rect x='5' y='30' width='20' height='40' fill='white' />
            <path d='M 5,50 L -5,70 L 5,70 Z' fill='red' />
            <path d='M 25,50 L 35,70 L 25,70 Z' fill='red' />

            {/* 🔥 Flame */}
            <motion.path
              d='M 10,70 Q 15,95 20,70'
              fill='orange'
              style={{
                scaleY: flameScaleY,
                opacity: flameOpacity,
              }}
            />
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default ScrollAnimation;
