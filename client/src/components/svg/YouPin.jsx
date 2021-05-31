import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={704}
      viewBox="0 0 384 528"
      {...props}
    >
      <path d="M163.5 1.5C92.9 11.8 33.2 61.3 10 128.6 2.9 149.1.9 161.3.3 186.2c-.8 30.7 1.6 50.8 9.4 81.3C28.7 342 79.3 425.6 144.9 491c22.6 22.5 40.7 37 46.4 37 9.5 0 57.1-44 89-82.3 48.6-58.3 82.5-123.2 96.2-184.2 5.8-26.1 6.9-36.7 7-67.5 0-27.2-.1-29-2.7-41-11.1-51.2-40-93.7-83.3-122.3-22.8-15-50.1-25.3-77.8-29.2-12.7-1.8-43.8-1.8-56.2 0zm39.1 187.9c6.1 2.8 11.6 9.1 14.6 16.5 2 4.9 2.3 7.4 2.3 19.6 0 13.9 0 14.1-3.3 20.7-5.6 11.3-13.7 16.8-24.8 16.8-10.8 0-18.6-4.7-23.9-14.3-9.6-17.3-6.2-45.6 6.7-56 7.6-6.1 19.4-7.5 28.4-3.3zM120 212.7c3.4 13.7 6.5 25.3 6.9 26 .4.7 3.8-10.4 7.6-24.7l7-26h7.8c7.7 0 7.8 0 7.1 2.2-.4 1.3-6.5 20.8-13.5 43.4-7 22.7-13.5 42.7-14.4 44.5-4.8 9.5-9.7 12.9-18.2 12.9-6.7 0-7.4-.7-6.5-6 .7-4.4.9-4.5 5.1-5.1 5.3-.7 7.3-3 10.2-12l2.2-6.6-9.3-29.4c-5.1-16.2-10.3-32.7-11.5-36.7l-2.3-7.2h15.5l6.3 24.7zm127 1.6c0 14.4.4 27.7 1 29.6 1.6 5.6 4.6 8.1 9.9 8.1 2.8 0 5.9-.8 7.8-2 6.1-3.6 6.3-5 6.3-35v-27h14v75.1l-6.2-.3-6.3-.3-.3-4.8c-.2-2.6-.5-4.7-.8-4.7-.3 0-1.7 1.4-3.2 3.1-7.6 9.1-23.6 8.9-30.4-.2-5.5-7.5-6.7-15.8-6.8-46.2V188h15v26.3z" />
      <path d="M184.8 199.5c-11.4 6.2-11.3 45 .2 51 4.6 2.4 10.3 1.9 13.9-1.1 9.2-7.7 9.6-38.4.6-48-2.7-2.9-3.9-3.4-7.6-3.4-2.4.1-5.6.7-7.1 1.5z" />
    </svg>
  );
}

export default SvgComponent;