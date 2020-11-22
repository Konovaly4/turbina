import * as React from "react";

function PlayButton(props) {
  return (
    <svg
      width={16}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.258 8.625c.99.651.99 2.099 0 2.75l-12.696 8.35C1.464 20.448 0 19.662 0 18.35V1.65C0 .338 1.464-.447 2.562.275l12.696 8.35z"
        fill="#fff"
      />
    </svg>
  );
}

export default PlayButton;
