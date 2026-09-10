"use client"
import { useState } from "react";

const SERVICE_ZONES = [
  { id: "pawnee", label: "Pawnee", x: 185, y: 145, r: 55, primary: true },
  { id: "eagleton", label: "Eagleton", x: 100, y: 90, r: 38 },
  { id: "ramset", label: "Ramset", x: 110, y: 230, r: 30 },
  { id: "sweetums", label: "Sweetums Hts.", x: 285, y: 210, r: 35 },
  { id: "lil-sebastian", label: "Lil\' Sebastian Park", x: 195, y: 280, r: 35 },
];

export const Map = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg viewBox="0 0 420 360" className="w-full" style={{ fontFamily: "var(--font-body)" }}>
        {/* Paper texture background */}
        <rect width="420" height="360" fill="#ede5d4" rx="6" />
        {/* Grid lines */}
        {[60, 120, 180, 240, 300].map((y) => (
          <line key={y} x1="20" y1={y} x2="400" y2={y} stroke="#c4a882" strokeWidth="0.5" opacity="0.4" />
        ))}
        {[70, 140, 210, 280, 350].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="340" stroke="#c4a882" strokeWidth="0.5" opacity="0.4" />
        ))}

        {/* Road-like paths */}
        <path d="M20 175 Q100 160 200 175 Q300 190 400 170" stroke="#c4a882" strokeWidth="3" fill="none" strokeDasharray="8 4" opacity="0.6" />
        <path d="M185 20 Q195 100 185 175 Q175 250 180 340" stroke="#c4a882" strokeWidth="2.5" fill="none" strokeDasharray="8 4" opacity="0.5" />

        {/* Service zone circles */}
        {SERVICE_ZONES.map((zone) => (
          <g key={zone.id} onMouseEnter={() => setHovered(zone.id)} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
            <circle
              cx={zone.x}
              cy={zone.y}
              r={zone.r}
              fill={zone.primary ? "#2a4a18" : "#5a8e35"}
              opacity={hovered === zone.id ? 0.9 : 0.65}
              style={{ transition: "opacity 0.2s" }}
            />
            <circle
              cx={zone.x}
              cy={zone.y}
              r={zone.r}
              fill="none"
              stroke={zone.primary ? "#c8892a" : "#c4a882"}
              strokeWidth={zone.primary ? 2 : 1.5}
              strokeDasharray={zone.primary ? "none" : "4 3"}
            />
            <text
              x={zone.x}
              y={zone.primary ? zone.y - 2 : zone.y}
              textAnchor="middle"
              fill="#f5f0e8"
              fontSize={zone.primary ? 8.5 : 7}
              fontWeight="600"
              letterSpacing="0.5"
            >
              {zone.label}
            </text>
            {zone.primary && (
              <text x={zone.x} y={zone.y + 10} textAnchor="middle" fill="#c8892a" fontSize="6.5" letterSpacing="0.5">
                HQ
              </text>
            )}
          </g>
        ))}

        {/* Legend */}
        <rect x="20" y="305" width="130" height="44" rx="3" fill="#f5f0e8" stroke="#c4a882" strokeWidth="1" />
        <circle cx="34" cy="319" r="7" fill="#2a4a18" opacity="0.7" />
        <text x="46" y="323" fill="#1a2744" fontSize="7.5" fontFamily="sans-serif">Primary Zone (Pawnee)</text>
        <circle cx="34" cy="337" r="7" fill="#5a8e35" opacity="0.7" stroke="#c4a882" strokeWidth="1" strokeDasharray="3 2" />
        <text x="46" y="341" fill="#1a2744" fontSize="7.5" fontFamily="sans-serif">Extended Coverage</text>

        {/* Compass */}
        <g transform="translate(375, 45)">
          <circle cx="0" cy="0" r="18" fill="#f5f0e8" stroke="#c4a882" strokeWidth="1" />
          <polygon points="0,-13 -5,5 0,2 5,5" fill="#8b2a1a" />
          <polygon points="0,13 -5,-5 0,-2 5,-5" fill="#c4a882" />
          <text x="0" y="-15" textAnchor="middle" fill="#1a2744" fontSize="7" fontWeight="bold">N</text>
        </g>

        {/* Title */}
        <text x="210" y="345" textAnchor="middle" fill="#8b2a1a" fontSize="8.5" fontWeight="700" letterSpacing="1.5">
          PAWNEE COUNTY SERVICE MAP
        </text>
      </svg>
    </div>
  );
}