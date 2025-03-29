import { PrismaClient, Prisma } from "@prisma/client";
import * as XLSX from "xlsx";
import path from "path";

const prisma = new PrismaClient();

// Use Prisma's predefined type for batch inserts
type SchoolData = Prisma.SchoolCreateManyInput;

async function importSchools() {
  const filePath = path.join(__dirname, "../schools.xlsx");

  // Read the Excel file
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // 🔹 Define type for `data` to avoid TypeScript errors
  const data: Record<string, string | undefined>[] = XLSX.utils.sheet_to_json(sheet);

  // 🔹 Ensure `data.map()` correctly matches `SchoolData[]`
  const schools: SchoolData[] = data.map((row): SchoolData => ({
    name: row["School Name"] ?? "Unnamed School",
    address: row["Address"] ?? "No Address",
    city: row["City"] ?? "Unknown City",
    facilities: row["Facilities"] ?? "Not Available",
    contact: row["Contact"] ?? null,
    email: row["Email"] ?? null,
    website: row["Website"] ?? null,
    description: row["Description"] ?? null,
  }));

  try {
    if (schools.length === 0) {
      console.log("⚠️ No valid school data found in the file.");
      return;
    }

    await prisma.school.createMany({
      data: schools, // ✅ Type-safe!
      skipDuplicates: true,
    });

    console.log(`✅ Successfully imported ${schools.length} schools!`);
  } catch (error) {
    console.error("❌ Error inserting data into Prisma:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
importSchools();
