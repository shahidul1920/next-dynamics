export default function LogoIcon({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="70 160 860 535"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Next Dynamics Logo"
    >
      {/* Left 'N' ribbon */}
      <path
        d="M523.46,182.71V689.35H400.38l-27.8-45.18L277.45,490.26l-.15-.29L201.43,367.18V689.35H78.35V168.08H201.43l29.68,48.08L277.3,291l.15.29,46.91,76,76,123.08V168.08h.14A521.26,521.26,0,0,1,523.46,182.71Z"
        fill="#FFFFFF"
      />
      {/* Right dynamic arc */}
      <path
        d="M921.65,689.35H722.7a321.36,321.36,0,0,0-68.78-199.09,320.87,320.87,0,0,0-253.4-123.08V168.08A520.89,520.89,0,0,1,921.65,689.35Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
