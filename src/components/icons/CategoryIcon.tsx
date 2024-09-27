import React from 'react';

interface IconProps {
  className?: string;
}

function CategoryIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.07035 6.99977L0 6.99993V5.99993L5.75568 5.99863C5.50301 6.31369 5.27369 6.64828 5.07035 6.99977Z"
        fill="#494949"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10.9999C4 11.168 4.00518 11.3349 4.0154 11.5004L0 11.4999V10.4999L4.0154 10.4995C4.00518 10.665 4 10.8318 4 10.9999Z"
        fill="#494949"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.75512 16.001L0 16.0004V15.0004L5.07063 15.0011C5.27375 15.3521 5.50279 15.6863 5.75512 16.001Z"
        fill="#494949"
      />
      <path
        d="M13.9913 2.99994C18.4048 2.99994 21.9827 6.57779 21.9827 10.9913C21.9827 13.0182 21.228 14.869 19.9844 16.2778L24 20.2936L23.2937 20.9999L19.2778 16.9843C17.869 18.228 16.0183 18.9826 13.9913 18.9826C9.57785 18.9826 6 15.4048 6 10.9913C6 6.57779 9.57785 2.99994 13.9913 2.99994ZM13.9913 3.99994C10.1301 3.99994 7 7.13007 7 10.9913C7 14.8525 10.1301 17.9826 13.9913 17.9826C17.8526 17.9826 20.9827 14.8525 20.9827 10.9913C20.9827 7.13007 17.8526 3.99994 13.9913 3.99994Z"
        fill="#494949"
      />
    </svg>
  );
}

export default CategoryIcon;
