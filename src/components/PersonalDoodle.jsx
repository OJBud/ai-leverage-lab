// Small, repo-native pen drawings: explicit silhouettes, one orange ink, no raster downloads.
const drawings = {
  surfing: <>
    <path d="M43 64C28 53 24 22 32 7c17 5 32 30 31 48L43 64Z" />
    <path d="m33 14 24 42M47 51l-3 9-8-6" />
    <path d="M8 75c9 0 12-9 20-9 9 0 10 12 21 12 8 0 10-7 18-7 9 0 13 8 21 5M14 86c10 2 16-4 24-4 9 0 16 6 24 4" />
  </>,
  dog: <>
    <path d="M24 31 14 17Q12 39 20 45M72 31l10-14q2 22-6 28" />
    <path d="M24 31c5-13 42-13 48 0l5 20c2 20-11 33-29 33S17 71 19 51l5-20Z" />
    <path d="M30 42q5-4 10 0m16 0q5-4 10 0M35 48h1m24 0h1" />
    <path d="M35 58q13-9 26 0M41 58q7-3 14 0l-7 7-7-7ZM48 65v7m-12-1q5 7 12 1 7 6 12-1M28 80q20 12 40 0" />
    <path d="M45 86v5h7v-5" />
  </>,
  boxing: <>
    <path d="M31 68c-11-7-16-18-13-33 1-7 6-9 10-4l4 10V25c0-13 10-18 24-16 16 2 22 13 21 27l-2 15c-1 9-7 16-13 19" />
    <path d="m31 68 31 2-2 18-31-2 2-18ZM30 76l30 2M34 42c4 8 11 11 20 9M46 16q13-2 21 8" />
    <path d="m10 17-5-5M18 10l-2-6M7 27l-5-1" />
  </>,
  coding: <>
    <path d="M18 16q29-3 61 0l-2 49H20l-2-49ZM20 65l-10 13q0 5 8 5h63q6 0 5-5l-9-13M11 76h74" />
    <path d="m37 32-11 9 11 9m24-18 11 9-11 9M54 28 45 54M42 76h14" />
  </>,
  ideas: <>
    <path d="M34 61c0-9-12-11-12-27a26 26 0 0 1 52 0c0 16-12 18-12 27M34 62h28v9H34ZM37 77h22M42 83h12" />
    <path d="M42 60V45l-7-8m19 23V45l7-8M40 43q8 6 16 0M48 1v-6M12 13l-6-6M84 13l6-6M9 35H2m85 0h7" />
  </>,
};

export default function PersonalDoodle({ kind, size = 84, className = '' }) {
  return <svg viewBox="0 -8 96 104" width={size} height={size} className={className}
    fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">{drawings[kind]}</svg>;
}
