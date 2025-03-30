"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SchoolDetailsModal from "../components/SchoolDetailsModal";
import { School } from "../types";

export default function ListingsPage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ city: "", facilities: "" });
  const [comparisonList, setComparisonList] = useState<School[]>([]);

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

  const filteredSchools = schools.filter((school) => {
    return (
      (filters.city === "" || school.city === filters.city) &&
      (filters.facilities === "" || school.facilities.includes(filters.facilities))
    );
  });

  const toggleCompare = (school: School) => {
    setComparisonList((prev) =>
      prev.includes(school)
        ? prev.filter((item) => item !== school)
        : [...prev, school]
    );
  };

  // Create a URL for comparison page
  const comparisonUrl = {
    pathname: "/comparison",
    query: { selectedSchools: JSON.stringify(comparisonList) },
  };

  if (loading) return <p>Loading schools...</p>;

  return (
    <div className="p-5 bg-white">
      {/* Filter Section at the Top */}
      <div className="flex justify-between items-center mb-4 text-black">
        <div>
          <select
            className="p-2 border rounded"
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          >
            <option value="">All Cities</option>
            <option value="City1">City1</option>
            <option value="City2">City2</option>
            {/* Add more cities */}
          </select>
          <select
            className="p-2 border rounded ml-2"
            onChange={(e) => setFilters({ ...filters, facilities: e.target.value })}
          >
            <option value="">All Facilities</option>
            <option value="Playground">Playground</option>
            <option value="Library">Library</option>
            {/* Add more facilities */}
          </select>
        </div>
        {/* Compare Button */}
        <Link href={comparisonUrl}>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            disabled={comparisonList.length < 2}
          >
            Compare Selected Schools
          </button>
        </Link>
      </div>

      {/* School Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white text-black">
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school) => (
            <div key={school.id} className="p-4 border rounded-lg shadow">
              <h2 className="text-xl font-bold">{school.name}</h2>
              <p>{school.address}, {school.city}</p>
              <p><strong>Facilities:</strong> {school.facilities}</p>
              <div className="flex items-center justify-between mt-2">
                <button
                  className="p-2 bg-blue-500 text-white rounded"
                  onClick={() => setSelectedSchool(school)}
                >
                  View Details
                </button>
                <div>
                  <input
                    type="checkbox"
                    checked={comparisonList.includes(school)}
                    onChange={() => toggleCompare(school)}
                  />
                  <label className="ml-1">Compare</label>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No schools available</p>
        )}
      </div>

      {selectedSchool && (
        <SchoolDetailsModal
          schools={comparisonList.length > 0 ? comparisonList : [selectedSchool]} 
          onClose={() => setSelectedSchool(null)}
        />
      )}
    </div>
  );
}
