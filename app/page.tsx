import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const HomePage = async () => {
  return <div>Home Page</div>;
};

export default HomePage;
