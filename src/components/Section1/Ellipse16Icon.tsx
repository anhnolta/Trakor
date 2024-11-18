import { memo, SVGProps } from 'react';

const Ellipse16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} fill='#CAB879' />
  </svg>
);

const Memo = memo(Ellipse16Icon);
export { Memo as Ellipse16Icon };
