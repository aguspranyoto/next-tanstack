import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import * as z from "zod";

const prisma = new PrismaClient();

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "name is required",
  }),
  nim: z.number().min(1, {
    message: "nim is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "email is required",
    })
    .email(),
  age: z.number().min(1, {
    message: "age is required",
  }),
});

export async function GET() {
  const data = await prisma.student.findMany();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, nim, email, age } = FormSchema.parse(body);
  const data = await prisma.student.create({
    data: {
      name,
      nim,
      email,
      age,
    },
  });
  return NextResponse.json(data);
}
