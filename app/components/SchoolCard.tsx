interface SchoolProps {
    school: {
      id: number;
      name: string;
      address: string;
      city: string;
      facilities: string;
    };
    onSelect: (school: SchoolProps["school"]) => void;
  }
  
  export default function SchoolCard({ school, onSelect }: SchoolProps) {
    return (
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-bold">{school.name}</h2>
        <p>{school.address}, {school.city}</p>
        <p>Facilities: {school.facilities}</p>
  
        <button
          onClick={() => onSelect(school)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          View Details
        </button>
      </div>
    );
  }
  