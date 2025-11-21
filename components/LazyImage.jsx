"use client";

import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt, className = "", imgClassName = "", ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;

    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      {isLoading && (
        <div className="w-full h-full bg-gray-200 animate-pulse absolute inset-0" />
      )}

      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${imgClassName}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default React.memo(LazyImage);
