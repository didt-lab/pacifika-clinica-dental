import React from 'react';

interface StatsCardProps {
  number: string;
  label: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  number,
  label,
  className = '',
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{number}</div>
      <div className="text-blue-100">{label}</div>
    </div>
  );
};

export default StatsCard;


