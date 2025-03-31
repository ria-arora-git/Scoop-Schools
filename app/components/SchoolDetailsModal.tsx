import React from "react";
import { School } from "../types";

interface SchoolDetailsModalProps {
  schools: School[];  
  onClose: () => void;
}

export default function SchoolDetailsModal({ schools, onClose }: SchoolDetailsModalProps) {
  if (!schools || schools.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl flex flex-col space-y-4">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full">
          X
        </button>

        {/* If only one school is selected */}
        {schools.length === 1 ? (
          <div className="flex justify-center items-center flex-col space-y-2">
            <h2 className="text-2xl font-bold">{schools[0].name}</h2>
            <p><strong>Address:</strong> {schools[0].address}, {schools[0].city}</p>
            <p><strong>Facilities:</strong> {schools[0].facilities}</p>
            {schools[0].contact && <p><strong>Contact:</strong> {schools[0].contact}</p>}
            {schools[0].email && <p><strong>Email:</strong> {schools[0].email}</p>}
            {schools[0].website && <p><strong>Website:</strong> <a href={schools[0].website} className="text-blue-500 underline">{schools[0].website}</a></p>}
            {schools[0].description && <p><strong>Description:</strong> {schools[0].description}</p>}
          </div>
        ) : (
          // If multiple schools are selected for comparison
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school) => (
              <div key={school.id} className="border p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{school.name}</h3>
                <p><strong>Address:</strong> {school.address}, {school.city}</p>
                <p><strong>Facilities:</strong> {school.facilities}</p>
                {school.contact && <p><strong>Contact:</strong> {school.contact}</p>}
                {school.email && <p><strong>Email:</strong> {school.email}</p>}
                {school.website && <p><strong>Website:</strong> <a href={school.website} className="text-blue-500 underline">{school.website}</a></p>}
                {school.description && <p><strong>Description:</strong> {school.description}</p>}
              </div>
            ))}
          </div>
        )}

        <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
}
