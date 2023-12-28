import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;

  const student = await prisma.student.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(student, { status: 200 });
}
