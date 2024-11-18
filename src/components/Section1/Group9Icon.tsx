import { memo, SVGProps } from 'react';

const Group9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 820 342' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.2} filter='url(#filter0_f_25_1432)'>
      <circle cx={157.025} cy={157.025} r={157.025} transform='matrix(-1 0 0 1 314.05 0)' fill='#4C452D' />
    </g>
    <g opacity={0.2} filter='url(#filter1_f_25_1432)'>
      <ellipse
        cx={163.362}
        cy={162.658}
        rx={163.362}
        ry={162.658}
        transform='matrix(-1 0 0 1 819.725 3)'
        fill='#CAB879'
      />
    </g>
    <g opacity={0.2} filter='url(#filter2_f_25_1432)'>
      <circle cx={164.419} cy={164.419} r={164.419} transform='matrix(-1 0 0 1 478.837 13)' fill='#CAB879' />
    </g>
    <defs>
      <filter
        id='filter0_f_25_1432'
        x={-200}
        y={-200}
        width={714.05}
        height={714.05}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={100} result='effect1_foregroundBlur_25_1432' />
      </filter>
      <filter
        id='filter1_f_25_1432'
        x={293}
        y={-197}
        width={726.725}
        height={725.317}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={100} result='effect1_foregroundBlur_25_1432' />
      </filter>
      <filter
        id='filter2_f_25_1432'
        x={-100}
        y={-237}
        width={828.837}
        height={828.837}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={125} result='effect1_foregroundBlur_25_1432' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group9Icon);
export { Memo as Group9Icon };
