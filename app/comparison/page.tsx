"use client";

import { useSearchParams } from "next/navigation";
import { School } from "../types";

export default function ComparisonPage() {
  const searchParams = useSearchParams();
  const selectedSchools: School[] = JSON.parse(searchParams.get("selectedSchools") || "[]");

  if (!Array.isArray(selectedSchools) || selectedSchools.length < 2) {
    return <p className="text-red-500 font-bold text-center">Please select at least two schools for comparison.</p>;
  }

  const attributes: (keyof School)[] = ["name", "address", "facilities", "contact", "email", "website", "description"];

  return (
    <div className="p-5 bg-gray-100 min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Compare Schools</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
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
            {attributes.map((key) =>
              selectedSchools.some((school) => school[key]) ? ( // Check if at least one school has this attribute
                <tr key={key} className="border-b">
                  <td className="px-6 py-4 font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                  {selectedSchools.map((school) => (
                    <td key={school.id} className="px-6 py-4">
                      {key === "website" && school[key] ? (
                        <a href={school[key]} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                          {school[key]}
                        </a>
                      ) : (
                        school[key] || "N/A"
                      )}
                    </td>
                  ))}
                </tr>
              ) : null
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
