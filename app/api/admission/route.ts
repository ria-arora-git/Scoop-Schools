import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const newAdmission = await prisma.user.create({
      data: {
        childName: data.childName,
        dob: data.dob,
        gender: data.gender,
        photo: data.photo,
        fatherName: data.parentsName?.[0] || null,
        motherName: data.parentsName?.[1] || null,
        contact1: data.contact?.[0] || "",
        contact2: data.contact?.[1] || "",
        email: data.email,
        address: data.address,
        curriculum: data.curriculum,
        grade: data.grade,
      },
    });

    return NextResponse.json({ message: "Admission submitted successfully!", data: newAdmission }, { status: 200 });
  } catch (error) {
    console.error("Error saving admission data:", error);
    return NextResponse.json({ error: "Failed to save admission data." }, { status: 500 });
  }
}
