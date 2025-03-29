interface School {
    id: number;
    name: string;
    address: string;
    city: string;
    facilities: string;
  }
  
  interface ModalProps {
    school: School | null;  // Accepts null when no school is selected
    onClose: () => void;
  }
  
  export default function SchoolDetailsModal({ school, onClose }: ModalProps) {
    if (!school) return null; // Don't render if no school is selected
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold">{school.name}</h2>
          <p className="text-gray-600">{school.address}, {school.city}</p>
          <p className="mt-2"><strong>Facilities:</strong> {school.facilities}</p>
  
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  