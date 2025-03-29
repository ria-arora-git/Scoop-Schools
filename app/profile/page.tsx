import { getAuth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export default async function ProfilePage({ req }: { req: NextRequest }) {
  const { userId } = getAuth(req); // ✅ Use getAuth(req)

  if (!userId) return <p>Please log in</p>;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  return (
    <div>
      <h1>Your Profile</h1>
      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}
