import React from 'react';
import Card from './Card';

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience?: string;
  photo?: string;
  className?: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  experience,
  photo,
  className = '',
}) => {
  return (
    <Card 
      variant="elevated" 
      padding="lg" 
      className={`group hover:-translate-y-2 ${className}`}
    >
      <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
        {photo ? (
          <img 
            src={photo} 
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-2">👨‍⚕️</div>
            <p className="text-gray-600 font-medium">Foto profesional</p>
          </div>
        )}
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary-500 font-semibold mb-2">{specialty}</p>
        {experience && (
          <p className="text-gray-600 text-sm mb-3">{experience} • English spoken</p>
        )}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>⭐</span>
          <span>Experiencia certificada</span>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;
