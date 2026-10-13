import { useState } from 'react';
import { siteData } from '../data/siteData.js';

export default function Photo({ image, className = '', priority = false, fit = 'cover', showLabel = true }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const failed = failedSrc === image.src;
  return (
    <div className={`photo ${image.placeholder ? 'photo--placeholder' : ''} ${className}`} style={{ '--photo-position': image.position ?? '50% 50%', '--photo-fit': fit }}>
      {!failed && <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" onError={() => setFailedSrc(image.src)} />}
      {(image.placeholder || failed) && showLabel && <span className="photo__label"><span className="photo__mark" aria-hidden="true" />{failed ? siteData.ui.photoUnavailable : image.label}<small>{siteData.ui.photoPending}</small></span>}
    </div>
  );
}
