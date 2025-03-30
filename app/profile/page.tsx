"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

interface UserProfile {
  childName: string;
  dob: string;
  gender: string;
  photo: string;
  fatherName: string;
  motherName: string;
  fatherOccupation: string;
  motherOccupation: string;
  contact1: string;
  contact2: string;
  email: string;
  address: string;
  curriculum: string;
  school1: string;
  school2: string;
  grade: string;
}

export default function ProfilePage() {
  const { user } = useUser(); 
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.emailAddresses[0]?.emailAddress) return;

    const fetchProfileData = async () => {
      try {
        const email = user.emailAddresses[0].emailAddress;
        const response = await fetch(`/api/user?email=${email}`);

        const data = await response.json();
        if (response.ok) {
          setProfileData(data);
        } else {
          setError(data.error || "Failed to fetch profile data.");
        }
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user]);

  if (loading) return <p className="text-center text-gray-600">Loading profile...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!profileData) return <p className="text-center text-gray-600">No profile data found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-800">Profile</h1>
      <div className="mt-6 space-y-4">
        <p><strong>Full Name:</strong> {profileData.childName}</p>
        <p><strong>Date of Birth:</strong> {new Date(profileData.dob).toDateString()}</p>
        <p><strong>Gender:</strong> {profileData.gender}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Contact:</strong> {profileData.contact1}, {profileData.contact2}</p>
        <p><strong>Address:</strong> {profileData.address}</p>
        <p><strong>Father Name:</strong> {profileData.fatherName}</p>
        <p><strong>Mother Name:</strong> {profileData.motherName}</p>
        <p><strong>Father Occupation:</strong> {profileData.fatherOccupation}</p>
        <p><strong>Mother Occupation:</strong> {profileData.motherOccupation}</p>
        <p><strong>Preferred Curriculum:</strong> {profileData.curriculum}</p>
        <p><strong>Grade Applying For:</strong> {profileData.grade}</p>
        <p><strong>Previous Schools:</strong> {profileData.school1}, {profileData.school2}</p>
      </div>
    </div>
  );
}
