import { memo, SVGProps } from 'react';

const Group10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 641 330' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.2} filter='url(#filter0_f_25_1429)'>
      <ellipse cx={163.362} cy={166.385} rx={163.362} ry={162.658} fill='#CAB879' />
    </g>
    <g opacity={0.2} filter='url(#filter1_f_25_1429)'>
      <circle cx={476.419} cy={164.419} r={164.419} fill='#CAB879' />
    </g>
    <defs>
      <filter
        id='filter0_f_25_1429'
        x={-200}
        y={-196.273}
        width={726.725}
        height={725.317}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={100} result='effect1_foregroundBlur_25_1429' />
      </filter>
      <filter
        id='filter1_f_25_1429'
        x={62}
        y={-250}
        width={828.837}
        height={828.837}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={125} result='effect1_foregroundBlur_25_1429' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group10Icon);
export { Memo as Group10Icon };
