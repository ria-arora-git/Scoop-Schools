"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

interface FormData {
  childName: string;
  dob: string;
  gender: string;
  photo: string;
  parentsName: string[];
  contact: string[];
  email: string;
  address: string;
  occupation: string[];
  curriculum: string;
  schools: string[];
  grade: string;
}

export default function AdmissionForm() {
  const router = useRouter();
  const { user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    childName: "",
    dob: "",
    gender: "",
    photo: "",
    parentsName: ["", ""],
    contact: ["", ""],
    email: user?.emailAddresses[0]?.emailAddress || "", // ✅ Auto-fill but editable
    address: "",
    occupation: ["", ""],
    curriculum: "",
    schools: [],
    grade: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (index: number, field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const updatedArray = [...(prev[field] as string[])];
      updatedArray[index] = value;
      return { ...prev, [field]: updatedArray };
    });
  };

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
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => router.push("/profile"), 2000);
      } else {
        setError(result.error || "Failed to save admission data.");
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-blue-800 text-3xl font-bold text-center mb-8">School Admission Form</h1>

        {success && <p className="text-green-600 text-center mb-4">Form submitted successfully! Redirecting...</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <Section title="Student Details">
          <Input label="Full Name" name="childName" value={formData.childName} onChange={handleChange} />
          <Input label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} />
          <Select label="Gender" name="gender" options={["Male", "Female", "Other"]} value={formData.gender} onChange={handleChange} />
          <Input label="Photograph URL" type="url" name="photo" value={formData.photo} onChange={handleChange} />
        </Section>

        <Section title="Guardian Details">
          <Input label="Father's Name" value={formData.parentsName[0]} onChange={(e) => handleArrayChange(0, "parentsName", e.target.value)} />
          <Input label="Mother's Name" value={formData.parentsName[1]} onChange={(e) => handleArrayChange(1, "parentsName", e.target.value)} />
          <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
          <Input label="Address" name="address" value={formData.address} onChange={handleChange} />
        </Section>

        <Section title="Educational Preferences">
          <Select label="Preferred Curriculum" name="curriculum" options={["CBSE", "ICSE", "IB", "State Board"]} value={formData.curriculum} onChange={handleChange} />
          <Input label="Grade Applying For" name="grade" value={formData.grade} onChange={handleChange} />
        </Section>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}

/** ✅ Reusable Components */
const Input = ({ label, name, type = "text", value, onChange }: { label: string; name?: string; type?: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} className="w-full border rounded-lg px-3 py-2 mt-1" />
  </div>
);

const Select = ({ label, name, options, value, onChange }: { label: string; name: string; options: string[]; value: string; onChange: (e: ChangeEvent<HTMLSelectElement>) => void; }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <select name={name} value={value} onChange={onChange} className="w-full border rounded-lg px-3 py-2 mt-1">
      <option value="">Select</option>
      {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8 p-4 border-2 border-blue-100 rounded-lg">
    <h1 className="text-blue-800 font-semibold text-xl px-2 text-center mb-3"><u>{title}</u></h1>
    <div className="space-y-4 text-gray-700">{children}</div>
  </div>
);
