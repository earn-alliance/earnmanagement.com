import * as React from 'react';

const Icon = (props: any) => (
  <svg
    width={28}
    height={28}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <g clipPath='url(#a)'>
      <path
        d='M26.942 5.105c-.433.192-.879.354-1.334.485.539-.609.95-1.325 1.2-2.11a.445.445 0 0 0-.65-.518c-.966.573-2.009.985-3.101 1.226A5.947 5.947 0 0 0 18.914 2.5a5.924 5.924 0 0 0-5.869 6.682A15.15 15.15 0 0 1 2.647 3.666a.444.444 0 0 0-.73.057 5.915 5.915 0 0 0-.8 2.975c0 1.426.508 2.779 1.408 3.836a5.011 5.011 0 0 1-.792-.354.444.444 0 0 0-.66.379l-.001.079a5.939 5.939 0 0 0 2.896 5.089c-.15-.015-.3-.037-.45-.065a.444.444 0 0 0-.507.572A5.916 5.916 0 0 0 7.346 20.2a10.469 10.469 0 0 1-5.596 1.598c-.419 0-.84-.025-1.253-.074a.445.445 0 0 0-.292.816 15.959 15.959 0 0 0 8.63 2.53c6.024 0 9.793-2.842 11.894-5.225 2.62-2.972 4.122-6.906 4.122-10.793 0-.162-.002-.326-.007-.49a11.503 11.503 0 0 0 2.647-2.804.445.445 0 0 0-.55-.653Z'
        fill='#EED5A5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h27.566v27.566H0z' />
      </clipPath>
    </defs>
  </svg>
);

export default Icon;