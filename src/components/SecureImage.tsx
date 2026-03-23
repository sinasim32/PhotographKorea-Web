import React from 'react';

interface SecureImageProps {
  src: string;
  alt: string;
  className?: string;
  watermark?: string;
  objectFit?: 'cover' | 'contain' | 'scale-down';
}

const SecureImage: React.FC<SecureImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  watermark = "ⓒ Photograph Korea",
  objectFit = "cover"
}) => {
  const preventActions = (e: React.MouseEvent | React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className={`relative overflow-hidden select-none ${className}`}
      onContextMenu={preventActions}
    >
      {/* Actual Image */}
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto pointer-events-none ${
          objectFit === 'cover' ? 'object-cover' : 
          objectFit === 'contain' ? 'object-contain' : 'object-scale-down'
        }`}
        onDragStart={preventActions}
      />

      {/* Transparent Protective Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-transparent"
        onContextMenu={preventActions}
        onDragStart={preventActions}
      />

      {/* Programmatic Watermark */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
        <span className="serif text-[10px] md:text-xs text-white/30 tracking-widest uppercase font-light drop-shadow-sm">
          {watermark}
        </span>
      </div>
    </div>
  );
};

export default SecureImage;
