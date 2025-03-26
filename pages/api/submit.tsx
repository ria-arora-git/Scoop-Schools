import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

// Define TypeScript type for response data
type ResponseData = {
  success?: boolean;
  error?: string;
  data?: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: "Both name and email are required." });
    }

    try {
      const newUser = await prisma.user.create({
        data: { name, email },
      });

      return res.status(200).json({ success: true, data: newUser });
    } catch (error: unknown) {
      console.error("Error creating user:", error);

      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        return res.status(400).json({ error: "Email already exists." });
      }

      return res.status(500).json({ error: "Internal Server Error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} is not allowed.` });
  }
}
