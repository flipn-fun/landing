import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className }: { src: string, alt: string, className: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current.src = src;
            observer.unobserve(imgRef.current);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);


  return (
    <img
      ref={imgRef}
      alt={'FLipN'}
      style={{
        transition: 'opacity 0.3s'
      }}
      loading="lazy"
      className={className}
      onLoad={() => setIsLoaded(true)} 
    />
  );
};

export default LazyImage;