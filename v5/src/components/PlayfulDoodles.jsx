import React from 'react';

/**
 * Ilustrações SVG delicadas e sóbrias para a V5 (Moderno, Criativo e Infantil com Equilíbrio Visual)
 */

  export function CrownDoodle({ className = 'w-7 h-7' }) {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={className}>
        <path
          d="M10 46L15 22L27 33L32 16L37 33L49 22L54 46H10Z"
          fill="#F3C969"
          stroke="#1E2D3D"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <rect
          x="10"
          y="46"
          width="44"
          height="7"
          rx="3.5"
          fill="#E06D44"
          stroke="#1E2D3D"
          strokeWidth="2.5"
        />
        <circle cx="15" cy="18" r="3" fill="#2B7CB8" />
        <circle cx="32" cy="12" r="3.5" fill="#E06D44" />
        <circle cx="49" cy="18" r="3" fill="#3E8E63" />
      </svg>
    );
  }

    export function SunSmileyDoodle({ className = 'w-12 h-12' }) {
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className}>
            <g stroke="#D9A73E" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
              <line x1="40" y1="8" x2="40" y2="15" />
              <line x1="40" y1="65" x2="40" y2="72" />
              <line x1="8" y1="40" x2="15" y2="40" />
              <line x1="65" y1="40" x2="72" y2="40" />
              <line x1="17" y1="17" x2="22" y2="22" />
              <line x1="58" y1="58" x2="63" y2="63" />
              <line x1="63" y1="17" x2="58" y2="22" />
              <line x1="22" y1="58" x2="17" y2="63" />
            </g>
            <circle
              cx="40"
              cy="40"
              r="18"
              fill="#FDF3D7"
              stroke="#D9A73E"
              strokeWidth="2.5"
            />
            <circle cx="34" cy="38" r="2" fill="#1E2D3D" />
            <circle cx="46" cy="38" r="2" fill="#1E2D3D" />
            <path
              d="M34 45C36 47.5 44 47.5 46 45"
              stroke="#1E2D3D"
              strokeWidth="2"
              strokeLinecap="round"
            />
        </svg>
      );
    }

      export function PaperPlaneDoodle({ className = 'w-10 h-10' }) {
        return (
          <svg viewBox="0 0 64 64" fill="none" className={className}>
            <path
              d="M8 30L56 12L41 52L30 37L8 30Z"
              fill="#E3F0FA"
              stroke="#2B7CB8"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path
              d="M56 12L30 37V49L36 41"
              fill="#C5E0F5"
              stroke="#2B7CB8"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

        export function RainbowStickerDoodle({ className = 'w-14 h-10' }) {
          return (
            <svg viewBox="0 0 96 64" fill="none" className={className}>
              <path
                d="M16 50C16 30 30 16 48 16C66 16 80 30 80 50"
                stroke="#E06D44"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M24 50C24 35 35 24 48 24C61 24 72 35 72 50"
                stroke="#F3C969"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                d="M32 50C32 40 39 32 48 32C57 32 64 40 64 50"
                stroke="#2B7CB8"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.85"
              />
              <circle cx="20" cy="50" r="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="76" cy="50" r="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            </svg>
          );
        }
