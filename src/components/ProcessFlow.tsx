// Inline SVG illustration showing the 4-step restoration process
// Used in hero - replaces the photo placeholder

export default function ProcessFlow() {
  return (
    <svg
      viewBox="0 0 520 380"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Four-step water damage response process: call, assess and dry, rebuild, and handoff"
      className="w-full h-auto"
    >
      <title>Treadwell Restoration Process</title>

      {/* Subtle background grid for texture */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#A8D5E2" opacity="0.08" />
        </pattern>
        <linearGradient id="phaseDivider" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A8D5E2" stopOpacity="0" />
          <stop offset="50%" stopColor="#A8D5E2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A8D5E2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="520" height="380" fill="url(#grid)" />

      {/* Phase labels at top */}
      <text x="130" y="28" fill="#A8D5E2" fontFamily="Epilogue, sans-serif" fontWeight="800" fontSize="10" letterSpacing="2" textAnchor="middle">
        EMERGENCY MITIGATION
      </text>
      <text x="390" y="28" fill="#DC2626" fontFamily="Epilogue, sans-serif" fontWeight="800" fontSize="10" letterSpacing="2" textAnchor="middle">
        RECONSTRUCTION
      </text>

      {/* Vertical phase divider */}
      <rect x="259" y="40" width="2" height="300" fill="url(#phaseDivider)" />

      {/* Step circles and icons */}
      {/* Step 1: Call */}
      <g transform="translate(60, 120)">
        <circle cx="40" cy="40" r="40" fill="#162230" stroke="#A8D5E2" strokeWidth="1.5" opacity="0.95" />
        <path d="M48 48.5 v2 a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 0130.11 32h2 a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0148 48.5z" fill="none" stroke="#A8D5E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="100" y="230" textAnchor="middle" fill="#fff" fontFamily="Epilogue, sans-serif" fontWeight="900" fontSize="15">Call</text>
      <text x="100" y="250" textAnchor="middle" fill="#A8D5E2" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="11">24/7 emergency line</text>

      {/* Step 2: Assess & Dry */}
      <g transform="translate(180, 120)">
        <circle cx="40" cy="40" r="40" fill="#162230" stroke="#A8D5E2" strokeWidth="1.5" opacity="0.95" />
        {/* Water drop + wind lines */}
        <path d="M40 22 l8 8 a11.3 11.3 0 11-16 0 z" fill="none" stroke="#A8D5E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 50 h-4 M56 50 h4 M30 58 h-6 M50 58 h6" stroke="#A8D5E2" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>
      <text x="220" y="230" textAnchor="middle" fill="#fff" fontFamily="Epilogue, sans-serif" fontWeight="900" fontSize="15">Assess & Dry</text>
      <text x="220" y="250" textAnchor="middle" fill="#A8D5E2" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="11">Extract, dry, prevent mold</text>

      {/* Step 3: Rebuild */}
      <g transform="translate(300, 120)">
        <circle cx="40" cy="40" r="40" fill="#162230" stroke="#DC2626" strokeWidth="1.5" opacity="0.95" />
        {/* Hammer icon */}
        <path d="M43 38 l-10 10c-1 1-2.6 1-3.5 0a2.5 2.5 0 010-3.5l10-10" fill="none" stroke="#e85050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45.6 41 l5.1-5.1 M49.9 37.7 l-1.45-1.45c-.7-.7-1.1-1.6-1.1-2.6v-2.1a.6.6 0 00-.6-.6h-2.1c-1 0-1.9-.4-2.6-1.1l-1.45-1.45" fill="none" stroke="#e85050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M41.1 26 l6.2 6.2" fill="none" stroke="#e85050" strokeWidth="2" strokeLinecap="round" />
      </g>
      <text x="340" y="230" textAnchor="middle" fill="#fff" fontFamily="Epilogue, sans-serif" fontWeight="900" fontSize="15">Rebuild</text>
      <text x="340" y="250" textAnchor="middle" fill="#A8D5E2" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="11">Drywall, flooring, finish</text>

      {/* Step 4: Done */}
      <g transform="translate(420, 120)">
        <circle cx="40" cy="40" r="40" fill="#DC2626" opacity="0.95" />
        {/* Home icon filled */}
        <path d="M27 41 l13-10 13 10 v15 a2 2 0 01-2 2 h-22 a2 2 0 01-2-2 z" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 58 v-11 h8 v11" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="460" y="230" textAnchor="middle" fill="#fff" fontFamily="Epilogue, sans-serif" fontWeight="900" fontSize="15">Home Again</text>
      <text x="460" y="250" textAnchor="middle" fill="#A8D5E2" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="11">Claim closed, work complete</text>

      {/* Connecting arrows */}
      <path d="M144 160 H177" stroke="#A8D5E2" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
      <path d="M264 160 H297" stroke="#A8D5E2" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
      <path d="M384 160 H417" stroke="#A8D5E2" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />

      {/* Bottom tagline */}
      <text x="260" y="310" textAnchor="middle" fill="#fff" fontFamily="Epilogue, sans-serif" fontWeight="700" fontStyle="italic" fontSize="13" letterSpacing="-0.01em">
        Hire us for one phase, the other, or both.
      </text>
      <text x="260" y="332" textAnchor="middle" fill="#A8D5E2" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="11" opacity="0.75">
        We handle the insurance either way.
      </text>
    </svg>
  );
}
