import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    outlined: 'bg-transparent border-2 border-gray-300 hover:border-blue-500',
    filled: 'bg-gray-50 border border-gray-200',
  };
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const interactiveClasses = onClick ? 'cursor-pointer hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${interactiveClasses} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;


