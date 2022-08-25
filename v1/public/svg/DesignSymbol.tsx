import * as React from 'react';

const Icon = (props: any) => (
  <svg
    width={20}
    height={26}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path d='m1 1 12 12L1 25' stroke='#EED5A5' strokeWidth={2} />
    <path
      stroke='#EED5A5'
      d='m10.5 5.207 8.294 8.294-8.294 8.293-8.294-8.293z'
    />
  </svg>
);

export default Icon;
