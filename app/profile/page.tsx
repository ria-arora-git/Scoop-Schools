"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

type UserProfile = {
  name?: string;
  email?: string;
};

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(`/api/profile?clerkId=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching profile:", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (!isLoaded || loading) return <p>Loading...</p>;
  if (!user) return <p>Please log in</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        
        <h2 className="text-xl font-semibold">{profile?.name || "No Name"}</h2>
        <p className="text-gray-500">{profile?.email || "No Email"}</p>
        <p className="text-gray-500">Clerk ID: {user.id}</p>

        <div className="mt-4">
          <button
            onClick={() => alert("Edit Profile Clicked")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
