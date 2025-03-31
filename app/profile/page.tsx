"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useUser } from "@clerk/nextjs";

interface FormData {
  fullName: string;
  dob: string;
  gender: string;
  imageUrl: string;
  fatherName: string;
  motherName: string;
  email: string;
  address: string;
  curriculum: string;
  grade: string;
}

interface ApiResponse<T> {
  message?: string;
  error?: string;
  data?: T;
}

export default function ProfileSection() {
  const { user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dob: "",
    gender: "",
    imageUrl: "",
    fatherName: "",
    motherName: "",
    email: user?.emailAddresses[0]?.emailAddress || "",
    address: "",
    curriculum: "",
    grade: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch("/api/admission");
        if (!res.ok) throw new Error("Failed to fetch profile data");

        const result: ApiResponse<FormData> = await res.json();

        if (!result.data) {
          console.error("Error: No data received");
          return;
        }

        setFormData({
          fullName: result.data.fullName || "",
          dob: result.data.dob || "",
          gender: result.data.gender || "",
          imageUrl: result.data.imageUrl || "",
          fatherName: result.data.fatherName || "",
          motherName: result.data.motherName || "",
          email: result.data.email || user?.emailAddresses[0]?.emailAddress || "",
          address: result.data.address || "",
          curriculum: result.data.curriculum || "",
          grade: result.data.grade || "",
        });
      } catch (err) {
        console.error(err);
        setError("Error fetching profile data.");
      }
    }
    fetchUserData();
  }, [user?.emailAddresses]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

      const result: ApiResponse<FormData> = await response.json();
      if (response.ok) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to save profile.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-blue-800 text-3xl font-bold text-center mb-8">Profile Information</h1>

        {success && <p className="text-green-600 text-center mb-4">Profile saved successfully!</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <Section title="Student Details">
          <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
          <Input label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} />
          <Select label="Gender" name="gender" options={["Male", "Female", "Other"]} value={formData.gender} onChange={handleChange} />
          <Input label="Photograph URL" type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        </Section>

        <Section title="Guardian Details">
          <Input label="Father's Name" name="fatherName" value={formData.fatherName} onChange={handleChange} />
          <Input label="Mother's Name" name="motherName" value={formData.motherName} onChange={handleChange} />
          <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
          <Input label="Address" name="address" value={formData.address} onChange={handleChange} />
        </Section>

        <Section title="Educational Preferences">
          <Select label="Preferred Curriculum" name="curriculum" options={["CBSE", "ICSE", "IB", "State Board"]} value={formData.curriculum} onChange={handleChange} />
          <Input label="Grade Applying For" name="grade" value={formData.grade} onChange={handleChange} />
        </Section>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors" disabled={loading}>
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}

/** ✅ Reusable Components */
interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} className="w-full border rounded-lg px-3 py-2 mt-1" />
  </div>
);

interface SelectProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ label, name, options, value, onChange }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <select name={name} value={value} onChange={onChange} className="w-full border rounded-lg px-3 py-2 mt-1">
      <option value="">Select</option>
      {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-8 p-4 border-2 border-blue-100 rounded-lg">
    <h1 className="text-blue-800 font-semibold text-xl px-2 text-center mb-3"><u>{title}</u></h1>
    <div className="space-y-4 text-gray-700">{children}</div>
  </div>
);
