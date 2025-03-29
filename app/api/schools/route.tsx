import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const schools = await prisma.school.findMany();
    console.log("Fetched schools:", schools); // Debug log

    return NextResponse.json(schools);
  } catch (error) {
    console.error("❌ Error fetching schools:", error);
    return NextResponse.json({ error: "Failed to fetch schools", details: error }, { status: 500 });
  }
}
