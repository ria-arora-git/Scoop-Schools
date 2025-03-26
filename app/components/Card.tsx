
import React from "react";

interface CardProps {
  schoolName: string;
  location: string;
  description: string;
  onDetailsClick: () => void;
}

const Card: React.FC<CardProps> = ({ schoolName, location, description, onDetailsClick }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{schoolName}</h3>
      <p className="text-gray-600 mb-4">Location: {location}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
        onClick={onDetailsClick}
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
