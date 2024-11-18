import { memo, SVGProps } from 'react';

const Group4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1354 577' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.2} filter='url(#filter0_f_25_1436)'>
      <circle cx={1131} cy={354} r={223} fill='#4C452D' />
    </g>
    <g opacity={0.2} filter='url(#filter1_f_25_1436)'>
      <ellipse cx={232} cy={321} rx={232} ry={231} fill='#CAB879' />
    </g>
    <g opacity={0.2} filter='url(#filter2_f_25_1436)'>
      <circle cx={667.5} cy={233.5} r={233.5} fill='#CAB879' />
    </g>
    <g opacity={0.2} filter='url(#filter3_f_25_1436)'>
      <circle cx={1085.5} cy={309.5} r={233.5} fill='#CAB879' />
    </g>
    <defs>
      <filter
        id='filter0_f_25_1436'
        x={708}
        y={-69}
        width={846}
        height={846}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={100} result='effect1_foregroundBlur_25_1436' />
      </filter>
      <filter
        id='filter1_f_25_1436'
        x={-200}
        y={-110}
        width={864}
        height={862}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={100} result='effect1_foregroundBlur_25_1436' />
      </filter>
      <filter
        id='filter2_f_25_1436'
        x={184}
        y={-250}
        width={967}
        height={967}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={125} result='effect1_foregroundBlur_25_1436' />
      </filter>
      <filter
        id='filter3_f_25_1436'
        x={602}
        y={-174}
        width={967}
        height={967}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={125} result='effect1_foregroundBlur_25_1436' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group4Icon);
export { Memo as Group4Icon };
