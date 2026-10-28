import React from 'react';

/**
 * Formas Poligonais Assimétricas Arredondadas extraídas da arquitetura visual da Pequê (peque.com.br)
 * e combinadas com a paleta vibrante do briefing do Colégio Reinado da Criança.
 */
export const PEQUE_PATHS = {
  // Trapézio inclinado para a direita (usado em blocos de destaque e fotos)
  trapezoidRight:
    'M477.53,99.61c12.36,2.69,18.95,14.62,14.64,26.52L370.39,462.25c-4.31,11.89-18.18,21.62-30.83,21.62H23c-12.65,0-23-10.35-23-23V18.62C0,5.97,10.11-2.18,22.47,0.51L477.53,99.61z',
  // Trapézio inclinado para a esquerda (usado no bloco amarelo e cards altos)
  trapezoidLeft:
    'M431.63,51.62c12.36,2.69,22.47,15.24,22.47,27.89v393.14c0,12.65-10.35,23-23,23H16.46c-12.65,0-19.47-9.73-15.17-21.62L166.76,17.28c4.31-11.89,17.95-19.42,30.31-16.73L431.63,51.62z',
  // Faixa de título angular (Header Ribbon da Pequê)
  ribbonBanner:
    'M471.11,100.17c12.38-2.61,22.5-15.1,22.5-27.75V23c0-12.65-10.35-23-23-23h-454C3.96,0-2.96,9.77,1.22,21.7L51.6,165.35c4.19,11.94,17.74,19.57,30.12,16.96L471.11,100.17z',
  // Trapézio largo com base angulada (Hero Left Block da Pequê)
  heroBlockLeft:
    'M470.64,423.58c12.65,0,23-10.35,23-23V18.74c0-12.65-10.13-20.86-22.5-18.25l-455,95.97C3.76,99.07-2.94,110.97,1.25,122.91l97.84,278.96c4.19,11.94,17.96,21.7,30.61,21.7L470.64,423.58z',
  // Trapézio vertical alto (Hero Right & Seções Bilíngue/Musicalização da Pequê)
  tallVertical:
    'M385.51,0c12.65,0,23,10.35,23,23v454c0,12.65-10.11,20.8-22.47,18.11l-262.75-57.2c-12.36-2.69-24.93-14.95-27.92-27.24L0.64,22.34C-2.36,10.06,5.53,0,18.18,0H385.51z',
};

/**
 * Renderiza uma foto recortada dentro da máscara geométrica da Pequê
 */
export function PequeMaskedImage({
  src,
  fallbackSrc,
  alt,
  variant = 'trapezoidRight',
  viewBox = '0 0 495 485',
  className = '',
  badgeText = '',
  badgeColor = '#FF6B00',
  onClick,
}) {
  const clipId = React.useId();
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const pathD = PEQUE_PATHS[variant] || PEQUE_PATHS.trapezoidRight;

  return (
    <div
      onClick={onClick}
      className={`relative select-none group ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <svg
        viewBox={viewBox}
        className="w-full h-auto drop-shadow-[0_18px_28px_rgba(15,37,55,0.12)] transition-transform duration-500 group-hover:scale-[1.02]"
        aria-label={alt}
      >
        <defs>
          <clipPath id={clipId}>
            <path d={pathD} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect width="100%" height="100%" fill="#E5F5FF" />
          <image
            href={imgSrc}
            onError={() => {
              if (fallbackSrc && imgSrc !== fallbackSrc) {
                setImgSrc(fallbackSrc);
              }
            }}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>

      {badgeText && (
        <span
          style={{ backgroundColor: badgeColor }}
          className="absolute bottom-5 left-6 px-4 py-1.5 rounded-full text-white font-fredoka font-bold text-xs sm:text-sm shadow-lg"
        >
          {badgeText}
        </span>
      )}
    </div>
  );
}

/**
 * Faixa de Título Angular estilo Pequê (Ribbon Banner)
 */
export function PequeRibbonHeader({
  title,
  subtitle,
  fill = '#FF6B00',
  textColor = '#FFFFFF',
  className = '',
}) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 495 185"
        preserveAspectRatio="none"
        className="w-full h-full absolute inset-0 drop-shadow-[0_12px_20px_rgba(15,37,55,0.1)]"
      >
        <path d={PEQUE_PATHS.ribbonBanner} fill={fill} />
      </svg>
      <div
        style={{ color: textColor }}
        className="relative z-10 px-7 sm:px-10 pt-5 pb-9 sm:pt-6 sm:pb-11"
      >
        {subtitle && (
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider opacity-90 mb-1">
            {subtitle}
          </p>
        )}
        <h3 className="font-fredoka text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}

