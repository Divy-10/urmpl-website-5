import { useState } from 'react';
import './SmartImage.css';

/**
 * Image with a graceful fallback: if the photo cannot load (offline
 * presentation, blocked CDN), a neutral branded panel is shown instead
 * of a broken-image icon.
 */
export default function SmartImage({ image, className = '', eager = false, position, ...rest }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (!image || failed) {
    return (
      <div className={`smart-img smart-img--fallback ${className}`} role="img" aria-label={image?.alt || ''}>
        <span>URMPL</span>
      </div>
    );
  }

  return (
    <div className={`smart-img ${loaded ? 'is-loaded' : ''} ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        style={position ? { objectPosition: position } : undefined}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        {...rest}
      />
    </div>
  );
}
