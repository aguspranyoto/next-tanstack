import { buttonVariants } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import { PersonStanding, User, UserRound } from "lucide-react";
import Link from "next/link";

const prisma = new PrismaClient();
const DetailPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  const student = await prisma.student.findUnique({
    where: {
      id: Number(id),
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2>Detail student page</h2>
        <Link href="/student" className={buttonVariants()}>
          Back
        </Link>
      </div>
      <div className="w-full flex gap-2 py-6 mx-auto max-w-4xl">
        <div className="w-40 h-40 border-2 rounded-full border-black flex justify-center items-center p-6">
          <User size={140} />
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="w-4/5 p-6 border-2 border-black">
            <div className="flex justify-between">
              <p className="text-xl ">Name</p>
              <p className="text-xl ">{student?.name}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl ">Age</p>
              <p className="text-xl ">{student?.age}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl ">NIM</p>
              <p className="text-xl ">{student?.nim}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl ">Email</p>
              <p className="text-xl ">{student?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
