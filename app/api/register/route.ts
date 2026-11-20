import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const { name, email, phone, password, role } = await req.json();

        if (!name || !password || (!email && !phone)) {
            return new NextResponse("Missing fields", { status: 400 });
        }

        // Check if user already exists
        const existingUser = await db.user.findFirst({
            where: {
                OR: [
                    ...(email ? [{ email }] : []),
                    ...(phone ? [{ phone }] : []),
                ],
            },
        });

        if (existingUser) {
            return new NextResponse("User already exists", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await db.user.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
                role: role.toUpperCase(),
                aukierProfile: role.toUpperCase() === "AUKIER" ? {
                    create: {}
                } : undefined,
            },
            include: {
                aukierProfile: true,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error("Registration error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
