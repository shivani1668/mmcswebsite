import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

const admissionSchema = z.object({
  studentName: z.string(),
  fatherName: z.string(),
  motherName: z.string(),
  dateOfBirth: z.string(),
  gender: z.string(),
  className: z.string(),
  phone: z.string(),
  email: z.string().optional(),
  address: z.string(),
  previousSchool: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = admissionSchema.parse(body);

    const admission = await db.admissionForm.create({
      data: {
        ...validatedData,
        dateOfBirth: new Date(validatedData.dateOfBirth),
      },
    });

    return NextResponse.json(admission, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const admissions = await db.admissionForm.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(admissions);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
