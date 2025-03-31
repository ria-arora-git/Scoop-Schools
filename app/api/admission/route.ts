import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//  Profile Data Submission (POST)
export async function POST(req: Request) {
  try {
    const user = await currentUser(); 
    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();


    const cleanedData = {
      fullName: data.childName || null,
      dob: data.dob || null,
      gender: data.gender || null,
      imageUrl: data.imageUrl || null,
      fatherName: data.fatherName || null,
      motherName: data.motherName || null,
      email: data.email || null,
      address: data.address || null,
      curriculum: data.curriculum || null,
      grade: data.grade || null,
    };
    const updatedUser = await prisma.user.upsert({
      where: { clerkId: user.id },
      update: cleanedData,
      create: { clerkId: user.id, ...cleanedData },
    });

    return NextResponse.json({ message: "Profile saved successfully", data: updatedUser });
  } catch (error) {
    console.error("Error saving profile:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Fetch User Profile (GET)
export async function GET() {
  try {
    const user = await currentUser(); 
    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userProfile = await prisma.user.findUnique({ where: { clerkId: user.id } });

    if (!userProfile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json({ data: userProfile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
