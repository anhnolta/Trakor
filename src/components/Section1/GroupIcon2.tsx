import { memo, SVGProps } from 'react';

const GroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.9696 2.19738L14.6909 15.711C14.5366 16.3474 13.823 16.6753 13.2379 16.3732L9.09128 14.2323L7.13046 17.4404C6.59686 18.3147 5.24678 17.9354 5.24678 16.9132V13.3387C5.24678 13.0623 5.3625 12.7987 5.5618 12.6058L13.643 4.8911C13.6365 4.79467 13.5337 4.71109 13.4308 4.78181L3.78741 11.4936L0.547236 9.82209C-0.211378 9.42992 -0.179233 8.33058 0.605096 7.98984L16.581 1.02732C17.346 0.693011 18.1689 1.38091 17.9696 2.19738Z'
      fill='#CAB879'
    />
  </svg>
);

const Memo = memo(GroupIcon2);
export { Memo as GroupIcon2 };
