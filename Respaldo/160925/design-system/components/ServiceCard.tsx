import React from 'react';
import Card from './Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  onClick,
  className = '',
}) => {
  return (
    <Card 
      variant="elevated" 
      padding="md" 
      onClick={onClick}
      className={`group hover:-translate-y-1 ${className}`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      <button className="text-primary-500 hover:text-primary-600 font-medium text-sm underline underline-offset-4 group-hover:no-underline">
        Leer más →
      </button>
    </Card>
  );
};

export default ServiceCard;
