"use client";
import { useEffect, useState } from "react";

interface School {
  id: string;
  name: string;
  address: string;
  city: string;
  facilities: string;
}

export default function ListingsPage() {
  const [schools, setSchools] = useState<School[]>([]); // Explicitly define type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/schools")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched schools:", data); // Debugging log
        if (Array.isArray(data)) {
          setSchools(data as School[]); // Type assertion
        } else {
          setSchools([]); // Prevent errors if API response is invalid
        }
      })
      .catch((error) => {
        console.error("Error fetching schools:", error);
        setSchools([]); // Fallback to empty array
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading schools...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {schools.length > 0 ? (
        schools.map((school) => (
          <div key={school.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold">{school.name}</h2>
            <p>{school.address}, {school.city}</p>
            <p><strong>Facilities:</strong> {school.facilities}</p>
            <button className="mt-2 p-2 bg-blue-500 text-white rounded">View Details</button>
          </div>
        ))
      ) : (
        <p>No schools available</p>
      )}
    </div>
  );
}
