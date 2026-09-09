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

/* ── Hand-sketched spot doodles ──────────────────────────────
   Loose single-stroke line drawings in the same "pen" as the
   Caveat script and underlines. Default to the accent orange.   */

function Sketch({ size = 40, color = '#FF6B2C', strokeWidth = 2, className = '', viewBox = '0 0 24 24', children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function Sparkle(props) {
  return (
    <Sketch {...props}>
      <path d="M12 2.5 C12.7 8.2, 15.8 11.3, 21.5 12 C15.8 12.7, 12.7 15.8, 12 21.5 C11.3 15.8, 8.2 12.7, 2.5 12 C8.2 11.3, 11.3 8.2, 12 2.5 Z" />
    </Sketch>
  );
}

export function Lightbulb(props) {
  return (
    <Sketch {...props}>
      <path d="M9 17.5 C7 15.6, 5.6 13.8, 5.6 10.6 C5.6 7, 8.4 4.2, 12 4.2 C15.6 4.2, 18.4 7, 18.4 10.6 C18.4 13.8, 17 15.6, 15 17.5" />
      <path d="M9.3 18 L14.7 18 M10 20.4 L14 20.4 M10.8 22.4 L13.2 22.4" />
      <path d="M10.4 17.5 C10.2 14, 10 12.5, 12 11.4 C14 12.5, 13.8 14, 13.6 17.5" />
    </Sketch>
  );
}

export function Rocket(props) {
  return (
    <Sketch {...props}>
      <path d="M12 2 C15 5, 16.6 9, 16 14 C15.7 16, 14 17.5, 12 17.5 C10 17.5, 8.3 16, 8 14 C7.4 9, 9 5, 12 2 Z" />
      <path d="M10 9 A2 2 0 1 0 14 9 A2 2 0 1 0 10 9" />
      <path d="M8 14 L5.5 18.2 L8.6 16.6 M16 14 L18.5 18.2 L15.4 16.6" />
      <path d="M10.6 17.6 C11.1 20.6, 12.9 20.6, 13.4 17.6" />
    </Sketch>
  );
}

export function Sprout(props) {
  return (
    <Sketch {...props}>
      <path d="M12 21.5 C12 16, 12 13, 12 9.5" />
      <path d="M12 13 C15.2 13, 18.2 11, 19.2 6.8 C15 6.3, 12 8.8, 12 13 Z" />
      <path d="M12 11 C8.8 11, 6.2 9, 5.2 5.4 C9.4 4.9, 12 7.4, 12 11 Z" />
    </Sketch>
  );
}

export function Chat(props) {
  return (
    <Sketch {...props}>
      <path d="M4 6.2 C4 5, 5 4.2, 6.2 4.2 L17.8 4.2 C19 4.2, 20 5, 20 6.2 L20 12.8 C20 14, 19 14.8, 17.8 14.8 L10.5 14.8 L6.6 18.6 L6.6 14.8 L6.2 14.8 C5 14.8, 4 14, 4 12.8 Z" />
      <path d="M8.8 9.6 L8.8 9.6 M12 9.6 L12 9.6 M15.2 9.6 L15.2 9.6" strokeWidth={props.strokeWidth ? props.strokeWidth + 0.4 : 2.4} />
    </Sketch>
  );
}

export function Compass(props) {
  return (
    <Sketch {...props}>
      <path d="M12 3 C16.9 3, 21 7.1, 21 12 C21 16.9, 16.9 21, 12 21 C7.1 21, 3 16.9, 3 12 C3 7.1, 7.1 3, 12 3 Z" />
      <path d="M15.6 8.4 L11.4 11.4 L8.4 15.6 L12.6 12.6 Z" />
      <path d="M12 12 L12 12" strokeWidth={props.strokeWidth ? props.strokeWidth + 0.4 : 2.4} />
    </Sketch>
  );
}

export function Wrench(props) {
  return (
    <Sketch {...props}>
      <path d="M15.5 3.5 C13 3.5, 11 5.5, 11 8 C11 8.8, 11.2 9.5, 11.5 10.1 L4 17.6 C3.2 18.4, 3.2 19.7, 4 20.5 C4.8 21.3, 6.1 21.3, 6.9 20.5 L14.4 13 C15 13.3, 15.7 13.5, 16.5 13.5 C19 13.5, 21 11.5, 21 9 C21 8.2, 20.8 7.5, 20.5 6.9 L17.7 9.7 L14.8 9.7 L14.8 6.8 L17.6 4 C17 3.7, 16.3 3.5, 15.5 3.5 Z" />
    </Sketch>
  );
}

export function Squiggle({ className = '', color = '#FF6B2C', width = 120, strokeWidth = 2.5 }) {
  return (
    <svg viewBox="0 0 120 12" fill="none" width={width} height={width * 0.1} className={className} aria-hidden="true">
      <path
        d="M2 6 C12 1, 22 11, 32 6 C42 1, 52 11, 62 6 C72 1, 82 11, 92 6 C102 1, 112 11, 118 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
