import { getAuth } from "@clerk/nextjs/server";  
import { NextRequest } from "next/server";  
import prisma from "@/lib/prisma"; // ✅ Use singleton Prisma instance  

export async function POST(req: NextRequest) {  
    try {  
        const { userId } = getAuth(req); // ✅ Correct function for Clerk auth  

        if (!userId) return new Response("Unauthorized", { status: 401 });

        const data = await req.json();  
        const userData = await prisma.user.upsert({  
            where: { clerkId: userId },  
            update: { ...data },  
            create: { clerkId: userId, ...data },  
        });  

        return new Response(JSON.stringify(userData), { status: 200 });  
    } catch (error) {  
        console.error("Error saving data:", error);  
        return new Response("Error saving data", { status: 500 });  
    }  
}
