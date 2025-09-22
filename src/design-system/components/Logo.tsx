import React from 'react';
import { logoConfig, getLogoClasses } from '../config/logo';

interface LogoProps {
  location?: 'header' | 'footer' | 'hero' | 'card';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
  location = 'header',
  size,
  className = '',
  onClick,
}) => {
  // Si se especifica un tamaño, usar ese; si no, usar el de la ubicación
  const logoSize = size || logoConfig.locations[location].size;
  const sizeClass = logoConfig.sizes[logoSize as keyof typeof logoConfig.sizes];
  const baseClass = logoConfig.locations[location].className;
  
  const classes = `${sizeClass} ${baseClass} ${className}`;
  
  return (
    <img 
      src={logoConfig.src}
      alt={logoConfig.alt}
      className={classes}
      onClick={onClick}
    />
  );
};

export default Logo;
