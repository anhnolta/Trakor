import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.6009 0H15.0542L9.69434 6.35395L16 15H11.0626L7.19566 9.75608L2.77091 15H0.315906L6.04887 8.20386L0 0H5.06247L8.55797 4.79301L12.6009 0ZM11.7398 13.4769H13.0993L4.32384 1.44319H2.86509L11.7398 13.4769Z'
      fill='#CAB879'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
