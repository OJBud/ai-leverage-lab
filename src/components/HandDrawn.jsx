export function Underline({ className = '', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      className={`absolute left-0 -bottom-2 w-full ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M2 8 C30 3, 50 10, 80 6 S130 2, 160 7 S185 4, 198 6"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Arrow({ className = '', color = 'currentColor', size = 32 }) {
  return (
    <svg
      viewBox="0 0 40 24"
      fill="none"
      width={size}
      height={size * 0.6}
      className={className}
    >
      <path
        d="M2 14 C8 12, 18 8, 28 10 S34 12, 36 11"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M30 6 L36 11 L30 17"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Scribble({ className = '', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className={className}
    >
      <path
        d="M30 5 C45 8, 55 20, 52 35 S40 55, 25 53 S5 42, 8 28 S18 8, 30 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
