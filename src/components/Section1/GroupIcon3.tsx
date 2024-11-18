import { memo, SVGProps } from 'react';

const GroupIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M35.5121 3.24216L29.1108 29.6259C28.8095 30.8685 27.4163 31.5086 26.2741 30.9187L18.1782 26.739L14.3499 33.0023C13.3081 34.7093 10.6723 33.9688 10.6723 31.973V24.9943C10.6723 24.4546 10.8982 23.9399 11.2873 23.5634L27.0648 8.50132C27.0523 8.31305 26.8514 8.14988 26.6506 8.28795L7.82305 21.3919L1.49698 18.1285C0.0158816 17.3628 0.0786402 15.2165 1.60995 14.5513L32.801 0.957744C34.2946 0.305054 35.9012 1.64809 35.5121 3.24216Z'
      fill='#CAB879'
    />
  </svg>
);

const Memo = memo(GroupIcon3);
export { Memo as GroupIcon3 };