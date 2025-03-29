import React from "react";
import { School } from "../types"; // Import the School type

interface SchoolDetailsModalProps {
  school: School | null;
  onClose: () => void;
}

export default function SchoolDetailsModal({ school, onClose }: SchoolDetailsModalProps) {
  if (!school) return null; // Prevent rendering if no school is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl font-bold">{school.name}</h2>
        <p><strong>Address:</strong> {school.address}, {school.city}</p>
        <p><strong>Facilities:</strong> {school.facilities}</p>
        {school.contact && <p><strong>Contact:</strong> {school.contact}</p>}
        {school.email && <p><strong>Email:</strong> {school.email}</p>}
        {school.website && <p><strong>Website:</strong> <a href={school.website} className="text-blue-500 underline">{school.website}</a></p>}
        {school.description && <p><strong>Description:</strong> {school.description}</p>}
        
        <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded">Close</button>
      </div>
    </div>
  );
}
