"use client";

import { useSearchParams } from "next/navigation";
import { School } from "../types";

export default function ComparisonPage() {
  const searchParams = useSearchParams();
  const selectedSchools: School[] = JSON.parse(searchParams.get("selectedSchools") || "[]");

  if (selectedSchools.length < 2) {
    return <p className="text-red-500 font-bold text-center">Please select at least two schools for comparison.</p>;
  }

  return (
    <div className="p-5 bg-gray-100 min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Compare Schools</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-4 border-b-2 text-left">Attribute</th>
              {selectedSchools.map((school) => (
                <th key={school.id} className="px-6 py-4 border-b-2 text-left">
                  <h3 className="text-lg font-semibold">{school.name}</h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Name</td>
              {selectedSchools.map((school) => (
                <td key={school.id} className="px-6 py-4">{school.name}</td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Address</td>
              {selectedSchools.map((school) => (
                <td key={school.id} className="px-6 py-4">{school.address}, {school.city}</td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Facilities</td>
              {selectedSchools.map((school) => (
                <td key={school.id} className="px-6 py-4">{school.facilities}</td>
              ))}
            </tr>
            {selectedSchools[0].contact && (
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold">Contact</td>
                {selectedSchools.map((school) => (
                  <td key={school.id} className="px-6 py-4">{school.contact}</td>
                ))}
              </tr>
            )}
            {selectedSchools[0].email && (
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold">Email</td>
                {selectedSchools.map((school) => (
                  <td key={school.id} className="px-6 py-4">{school.email}</td>
                ))}
              </tr>
            )}
            {selectedSchools[0].website && (
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold">Website</td>
                {selectedSchools.map((school) => (
                  <td key={school.id} className="px-6 py-4">
                    <a href={school.website} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                      {school.website}
                    </a>
                  </td>
                ))}
              </tr>
            )}
            {selectedSchools[0].description && (
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold">Description</td>
                {selectedSchools.map((school) => (
                  <td key={school.id} className="px-6 py-4">{school.description}</td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-8">
        <button
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={() => window.history.back()}
        >
          Back to Listings
        </button>
      </div>
    </div>
  );
}
