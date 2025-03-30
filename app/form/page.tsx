"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    gender: "",
    photo: "",
    parentsName: ["", ""],
    contact: ["", ""],
    email: "",
    address: "",
    occupation: ["", ""],
    curriculum: "",
    schools: [] as string[],
    grade: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handles basic input and select fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles array fields (parentsName & occupation)
  const handleArrayChange = (index: number, field: "parentsName" | "occupation", value: string) => {
    setFormData((prev) => {
      const updatedArray = [...prev[field]];
      updatedArray[index] = value;
      return { ...prev, [field]: updatedArray };
    });
  };

  // Handles form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setFormData({
          childName: "",
          dob: "",
          gender: "",
          photo: "",
          parentsName: ["", ""],
          contact: ["", ""],
          email: "",
          address: "",
          occupation: ["", ""],
          curriculum: "",
          schools: [],
          grade: "",
        });
      } else {
        setError("Failed to save admission data. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-blue-800 mb-8 text-3xl font-bold text-center">School Admission Form</h1>

        {success && <p className="text-green-600 text-center mb-4">Form submitted successfully!</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        {/* Student Details */}
        <h1 className="text-blue-800 font-semibold text-xl px-2 text-center mb-3"><u>Student Details</u></h1>
        <div className="mb-8 p-4 border-2 border-blue-100 rounded-lg">
          <div className="space-y-4 text-gray-700">
            <Input label="Full Name" name="childName" value={formData.childName} onChange={handleChange} />
            <Input label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} />
            <Select label="Gender" name="gender" options={["Male", "Female", "Other"]} value={formData.gender} onChange={handleChange} />
            <Input label="Photograph URL" type="url" name="photo" value={formData.photo} onChange={handleChange} />
          </div>
        </div>

        {/* Guardian Details */}
        <h1 className="text-blue-800 font-semibold px-2 text-xl text-center mb-5"><u>Guardian Details</u></h1>
        <div className="mb-8 p-4 border-2 border-blue-100 rounded-lg">
          <div className="space-y-4 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Father's Name" value={formData.parentsName[0]} onChange={(e) => handleArrayChange(0, "parentsName", e.target.value)} />
              <Input label="Mother's Name" value={formData.parentsName[1]} onChange={(e) => handleArrayChange(1, "parentsName", e.target.value)} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Father's Occupation" value={formData.occupation[0]} onChange={(e) => handleArrayChange(0, "occupation", e.target.value)} />
              <Input label="Mother's Occupation" value={formData.occupation[1]} onChange={(e) => handleArrayChange(1, "occupation", e.target.value)} />
            </div>
            <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <Input label="Address" name="address" value={formData.address} onChange={handleChange} />
          </div>
        </div>

        {/* Educational Preferences */}
        <h1 className="text-blue-800 font-semibold px-2 text-xl text-center mb-3"><u>Educational Preferences</u></h1>
        <div className="mb-8 p-4 border-2 border-blue-100 rounded-lg">
          <div className="space-y-4 text-gray-700">
            <Select label="Preferred Curriculum" name="curriculum" options={["CBSE", "ICSE", "IB", "State Board"]} value={formData.curriculum} onChange={handleChange} />
            <Input label="Grade Applying For" name="grade" value={formData.grade} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}

// ✅ Input Component with TypeScript
type InputProps = {
  label: string;
  name?: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label className="block text-sm text-blue-600 mb-1">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border-2 border-blue-100 rounded-md focus:border-blue-400 outline-none"
    />
  </div>
);

// ✅ Select Component with TypeScript
type SelectProps = {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ label, name, options, value, onChange }) => (
  <div>
    <label className="block text-sm text-blue-600 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border-2 border-blue-100 rounded-md focus:border-blue-400 outline-none bg-white"
    >
      <option value="">Select...</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);
