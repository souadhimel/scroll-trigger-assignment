import React from "react";

const Svg = ({ scrollResult, textChange }) => {
  const circleFill = "rgb(0, 146, 255)";

  return (
    <svg
      version="1.1"
      id="transring"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 414 414"
      style={{
        enableBackground: "new 0 0 414 414",
        backgroundColor:
          textChange >= 0 && textChange < 16
            ? "#6311A8"
            : textChange >= 16 && textChange < 33
            ? "#4D27CD"
            : textChange >= 33 && textChange < 50
            ? "#0E123A"
            : textChange >= 33 && textChange < 50
            ? "#16263B"
            : textChange >= 50 && textChange < 65
            ? "#16263B"
            : textChange >= 65 && textChange < 82
            ? "#124CA1"
            : textChange >= 82 && textChange < 100
            ? "#012C91"
            : "#00834C",

        boxShadow: textChange >= 65 && textChange < 82 ? "0 0 30px #222" : "",
        zIndex: -1,
      }}
      xmlSpace="preserve"
    >
      <path
        id="Transparent_Ring"
        class="transrg"
        style={{
          opacity: 0.4,
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeMiterlimit: 10,
          enableBackground: "new",
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                c-47.8,0-91-19.4-122.3-50.7"
      ></path>

      <path
        id="Opaque_Ring"
        class="transrgwht"
        stroke-dasharray="0,1000"
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeWidth: 2,
          strokeMiterlimit: 10,
          strokeDasharray: `${scrollResult}, 1000`,
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                c-47.8,0-91-19.4-122.3-50.7"
      ></path>

      <g id="Dots1" class="dots-nav">
        <g>
          <path
            class="dotsst dotsfill1"
            style={{ fill: circleFill, opacity: 1 }}
            d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
          ></path>
        </g>
        <g>
          <path
            class="dotsstro1"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
          ></path>
        </g>
      </g>
      <g id="Dots2" class="dots-nav">
        <g>
          <path
            class="dotsst dotsfill2"
            style={{
              fill: scrollResult > 131 ? circleFill : "#bdc3c7",
              opacity: 1,
            }}
            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
          ></path>
        </g>

        <g>
          <path
            class="dotsstro2"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
          ></path>
        </g>
      </g>
      <g id="Dots3" class="dots-nav">
        <g>
          <path
            class="dotsst dotsfill3"
            style={{
              fill: scrollResult > 270 ? circleFill : "#bdc3c7",
              opacity: 1,
            }}
            d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
          ></path>
        </g>
        <g>
          <path
            class="dotsstro3"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
          ></path>
        </g>
      </g>
      <g id="Dots4" class="dots-nav">
        <g>
          <path
            class="dotsst dotsfill4"
            style={{
              fill: scrollResult > 404 ? circleFill : "#bdc3c7",
              opacity: 1,
            }}
            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
          ></path>
        </g>
        <g>
          <path
            class="dotsstro4"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
          ></path>
        </g>
      </g>
      <g id="Dots5" class="dots-nav">
        <g>
          <path
            class="dotsst dotsfill5"
            style={{
              fill: scrollResult > 528 ? circleFill : "#bdc3c7",
              opacity: 1,
            }}
            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
          ></path>
        </g>
        <g>
          <path
            class="dotsstro5"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
          ></path>
        </g>
      </g>
      <g id="Dots6" class="dots-nav">
        <g>
          <path
            class="dotsst dotsfill6"
            style={{
              fill: scrollResult > 670 ? circleFill : "#bdc3c7",
              opacity: 1,
            }}
            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
          ></path>
        </g>
        <g>
          <path
            class="dotsstro6"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
          ></path>
        </g>
      </g>
      <g id="Dots7" class="dots-nav">
        <g>
          <path
            class="dotsst dotsfill7"
            style={{
              fill: scrollResult > 811 ? circleFill : "#bdc3c7",
              opacity: 1,
            }}
            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
          ></path>
        </g>
        <g>
          <path
            class="dotsstro7"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Svg;
