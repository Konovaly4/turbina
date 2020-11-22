import * as React from "react";

function MovieButton(props) {
  return (
    <svg
      width={94}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="prefix__a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35h59C86.165 35 94 27.165 94 17.5S86.165 0 76.5 0h-59zm24.999 23h2.142l-4.801-6.375 4.829-5.261h-2.176l-4.529 4.915h-.602v-4.915h-1.756V23h1.756v-5.216h1.205L42.499 23zm3.096 0h.546c1.903 0 2.602-1.409 2.738-4.295l.137-2.966h2.852V23h1.665v-8.727h-6.091l-.154 3.864c-.108 2.693-.414 3.392-1.386 3.392h-.313L45.596 23zm11.868-2.38v-6.347h-1.665V23h1.847l3.83-6.352V23h1.664v-8.727h-1.83l-3.846 6.346zm7.96 2.38h1.654V15.74h3.8V23h1.666v-8.727h-7.12V23zm-39.84-6.256a.893.893 0 010 1.512L18.44 22.85c-.618.397-1.441-.035-1.441-.756v-9.186c0-.721.823-1.153 1.441-.756l7.142 4.593z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35h59C86.165 35 94 27.165 94 17.5S86.165 0 76.5 0h-59zm24.999 23h2.142l-4.801-6.375 4.829-5.261h-2.176l-4.529 4.915h-.602v-4.915h-1.756V23h1.756v-5.216h1.205L42.499 23zm3.096 0h.546c1.903 0 2.602-1.409 2.738-4.295l.137-2.966h2.852V23h1.665v-8.727h-6.091l-.154 3.864c-.108 2.693-.414 3.392-1.386 3.392h-.313L45.596 23zm11.868-2.38v-6.347h-1.665V23h1.847l3.83-6.352V23h1.664v-8.727h-1.83l-3.846 6.346zm7.96 2.38h1.654V15.74h3.8V23h1.666v-8.727h-7.12V23zm-39.84-6.256a.893.893 0 010 1.512L18.44 22.85c-.618.397-1.441-.035-1.441-.756v-9.186c0-.721.823-1.153 1.441-.756l7.142 4.593z"
        fill="#fff"
      />
      <path
        d="M44.64 23v2h4.01l-2.412-3.203L44.641 23zM42.5 23L40.9 24.204l.6.796h.998v-2zm-2.66-6.375l-1.473-1.352-1.125 1.226 1 1.33 1.599-1.204zm4.83-5.261l1.473 1.352 3.078-3.352h-4.551v2zm-2.176 0v-2h-.877l-.594.645 1.47 1.355zm-4.529 4.915v2h.877l.594-.645-1.47-1.355zm-.602 0h-2v2h2v-2zm0-4.915h2v-2h-2v2zm-1.756 0v-2h-2v2h2zm0 11.636h-2v2h2v-2zm1.756 0v2h2v-2h-2zm0-5.216v-2h-2v2h2zm1.205 0l1.597-1.204-.6-.796h-.997v2zM45.595 23l-2 .008.008 1.992h1.992v-2zm3.284-4.295l1.998.094v-.002l-1.998-.092zm.137-2.966v-2h-1.91l-.088 1.908 1.998.092zm2.852 0h2v-2h-2v2zm0 7.261h-2v2h2v-2zm1.665 0v2h2v-2h-2zm0-8.727h2v-2h-2v2zm-6.091 0v-2H45.52l-.077 1.92 1.999.08zm-.154 3.864l1.999.08v-.001l-1.999-.08zm-1.698 3.392v-2h-2.008l.008 2.007 2-.008zm11.873-7.256h2v-2h-2v2zm0 6.346h-2v7.159l3.71-6.122-1.71-1.037zm-1.665-6.346v-2h-2v2h2zm0 8.727h-2v2h2v-2zm1.847 0v2h1.13l.583-.967L57.645 23zm3.83-6.352h2V9.457l-3.713 6.158 1.712 1.033zm0 6.352h-2v2h2v-2zm1.664 0v2h2v-2h-2zm0-8.727h2v-2h-2v2zm-1.83 0v-2h-1.126l-.584.963 1.71 1.037zM67.078 23v2h2v-2h-2zm-1.654 0h-2v2h2v-2zm1.654-7.261v-2h-2v2h2zm3.8 0h2v-2h-2v2zm0 7.261h-2v2h2v-2zm1.666 0v2h2v-2h-2zm0-8.727h2v-2h-2v2zm-7.12 0v-2h-2v2h2zm-39.84 3.983L24.5 16.574l1.081 1.682zm0-1.512L24.5 18.426l1.081-1.682zM18.44 22.85l-1.082-1.682 1.082 1.682zm0-10.698l-1.082 1.683 1.082-1.683zM2 17.5C2 8.94 8.94 2 17.5 2v-4C6.73-2-2 6.73-2 17.5h4zM17.5 33C8.94 33 2 26.06 2 17.5h-4C-2 28.27 6.73 37 17.5 37v-4zm59 0h-59v4h59v-4zM92 17.5C92 26.06 85.06 33 76.5 33v4C87.27 37 96 28.27 96 17.5h-4zM76.5 2C85.06 2 92 8.94 92 17.5h4C96 6.73 87.27-2 76.5-2v4zm-59 0h59v-4h-59v4zm27.14 19H42.5v4h2.142v-4zm-6.398-3.172l4.801 6.375 3.195-2.406-4.8-6.375-3.196 2.406zm4.954-7.817l-4.83 5.262 2.947 2.705 4.83-5.262-2.947-2.705zm-.703 3.353h2.176v-4h-2.176v4zm-3.058 4.27l4.529-4.915-2.942-2.71-4.528 4.914 2.941 2.71zm-2.073.645h.602v-4h-.602v4zm-2-6.915v4.915h4v-4.915h-4zm.244 2h1.756v-4h-1.756v4zm2 9.636V11.364h-4V23h4zm-.244-2h-1.756v4h1.756v-4zm-2-3.216V23h4v-5.216h-4zm3.205-2h-1.205v4h1.205v-4zm5.529 6.012l-3.932-5.216-3.194 2.408 3.931 5.216 3.195-2.408zM46.14 21h-.546v4h.546v-4zm.74-2.39c-.065 1.385-.263 2.03-.421 2.293-.053.086-.069.078-.042.064.015-.008-.048.033-.277.033v4c.722 0 1.46-.134 2.146-.497a4.095 4.095 0 001.599-1.536c.7-1.164.92-2.666.991-4.168l-3.995-.189zm.137-2.963l-.137 2.966 3.996.184.136-2.966-3.995-.184zm4.85-1.908h-2.852v4h2.852v-4zm2 9.261V15.74h-4V23h4zm-.335-2h-1.665v4h1.665v-4zm-2-6.727V23h4v-8.727h-4zm-4.091 2h6.09v-4h-6.09v4zm1.845 1.943l.153-3.864-3.997-.159-.153 3.864 3.997.159zm-3.385 5.313c.474 0 1.096-.085 1.694-.47.606-.39.96-.942 1.171-1.452.368-.889.468-2.089.52-3.39l-3.997-.16a16.826 16.826 0 01-.11 1.482c-.049.37-.099.514-.109.539 0 0 .088-.207.36-.382.263-.17.483-.168.471-.168v4zm-.313 0h.313v-4h-.313v4zm2.006-.537l-.005-1.471-4 .015.005 1.472 4-.016zm7.868-8.72v6.347h4v-6.346h-4zm.335 2h1.665v-4h-1.665v4zm2 6.728v-8.727h-4V23h4zm-.153-2h-1.847v4h1.847v-4zm2.117-5.385l-3.83 6.353 3.426 2.065 3.83-6.353-3.426-2.065zM63.474 23v-6.352h-4V23h4zm-.335-2h-1.665v4h1.665v-4zm-2-6.727V23h4v-8.727h-4zm.17 2h1.83v-4h-1.83v4zm-2.136 5.383l3.847-6.346-3.42-2.074-3.847 6.347 3.42 2.073zM67.077 21h-1.654v4h1.654v-4zm-2-5.261V23h4V15.74h-4zm5.8-2h-3.8v4h3.8v-4zm2 9.261V15.74h-4V23h4zm-.334-2h-1.665v4h1.665v-4zm-2-6.727V23h4v-8.727h-4zm-5.12 2h7.12v-4h-7.12v4zm2 6.727v-8.727h-4V23h4zm-40.759-3.062a2.893 2.893 0 000-4.876l-2.163 3.364a1.107 1.107 0 010-1.852l2.163 3.364zm-7.141 4.593l7.141-4.593-2.163-3.364-7.142 4.593 2.164 3.364zM15 22.093c0 2.395 2.652 3.642 4.523 2.438l-2.164-3.364c.636-.409 1.641-.027 1.641.926h-4zm0-9.186v9.186h4v-9.186h-4zm4.523-2.438C17.652 9.266 15 10.512 15 12.907h4c0 .953-1.005 1.335-1.64.927l2.163-3.365zm7.141 4.593l-7.141-4.593-2.164 3.365 7.142 4.592 2.163-3.364z"
        fill="#fff"
        mask="url(#prefix__a)"
      />
    </svg>
  );
}

export default MovieButton;
