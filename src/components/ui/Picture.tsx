import React from 'react';

interface PictureProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
}

/**
 * Responsive image component with WebP/AVIF support
 * Falls back to original format if optimized versions don't exist
 * 
 * Usage:
 *   <Picture src="/assets/profile.jpg" alt="Profile photo" />
 * 
 * This will try to load:
 *   1. /assets/optimized/profile.avif (best compression)
 *   2. /assets/optimized/profile.webp (good compression)
 *   3. /assets/profile.jpg (fallback)
 */
export const Picture: React.FC<PictureProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
}) => {
  // Generate paths for optimized formats
  const getOptimizedPath = (format: string): string => {
    const lastDot = src.lastIndexOf('.');
    const base = lastDot > 0 ? src.slice(0, lastDot) : src;
    const optimizedBase = base.replace('/assets/', '/assets/optimized/');
    return `${optimizedBase}.${format}`;
  };

  const avifSrc = getOptimizedPath('avif');
  const webpSrc = getOptimizedPath('webp');

  return (
    <picture>
      {/* AVIF - best compression */}
      <source srcSet={avifSrc} type="image/avif" />
      {/* WebP - good compression with wide support */}
      <source srcSet={webpSrc} type="image/webp" />
      {/* Fallback to original */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}

      />
    </picture>
  );
};

/**
 * Simple optimized image with just WebP fallback
 * Use this if AVIF is not needed
 */
export const OptimizedImage: React.FC<PictureProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
}) => {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
      />
    </picture>
  );
};
