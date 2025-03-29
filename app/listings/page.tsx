"use client";
import { useEffect, useState } from "react";
import SchoolDetailsModal from "../components/SchoolDetailsModal";
import { School } from "../types"; // Import type

export default function ListingsPage() {
  const [schools, setSchools] = useState<School[]>([]); // ✅ Add Type
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null); // ✅ Add Type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/schools")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSchools(data);
        } else {
          setSchools([]); 
        }
      })
      .catch((error) => {
        console.error("Error fetching schools:", error);
        setSchools([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading schools...</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schools.length > 0 ? (
          schools.map((school) => (
            <div key={school.id} className="p-4 border rounded-lg shadow">
              <h2 className="text-xl font-bold">{school.name}</h2>
              <p>{school.address}, {school.city}</p>
              <p><strong>Facilities:</strong> {school.facilities}</p>
              <button
                className="mt-2 p-2 bg-blue-500 text-white rounded"
                onClick={() => setSelectedSchool(school)} 
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>No schools available</p>
        )}
      </div>

      {/* ✅ Pass typed school to modal */}
      {selectedSchool && (
        <SchoolDetailsModal school={selectedSchool} onClose={() => setSelectedSchool(null)} />
      )}
    </div>
  );
}
