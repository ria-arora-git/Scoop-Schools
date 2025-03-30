// import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     try {
//       const { email, contact, childName, dob, gender, photo, parentsName, address, occupation, curriculum, schools, grade } = req.body;

//       const newUser = await prisma.user.create({
//         data: {
//           email,
//           contact,
//           childName,
//           dob: new Date(dob),
//           gender,
//           photo,
//           parentsName,
//           address,
//           occupation,
//           curriculum,
//           schools,
//           grade,
//         },
//       });

//       return res.status(201).json({ message: "User created successfully!", user: newUser });
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//           return res.status(500).json({ error: error.message });
//         }
//         return res.status(500).json({ error: "An unknown error occurred" });
//       } 
//     }      

//   res.setHeader("Allow", ["POST"]);
//   res.status(405).end(`Method ${req.method} Not Allowed`);
// }
