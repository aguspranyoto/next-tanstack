import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  // delete student from db
  const student = await prisma.student.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json("Deleted", { status: 200 });
}
