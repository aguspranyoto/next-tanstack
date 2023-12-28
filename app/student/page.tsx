import { PrismaClient } from "@prisma/client";
import { DataTable } from "./data-table";
import { Student, columns } from "./columns";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
const prisma = new PrismaClient();
async function getStudents(): Promise<Student[]> {
  const student = await prisma.student.findMany();
  return student;
}

const StudentPage = async () => {
  const students = await getStudents();

  return (
    <div>
      <div className="flex justify-between">
        <h2>Student page</h2>
        <Link href="/student/create" className={buttonVariants()}>
          Create
        </Link>
      </div>
      <div>
        <DataTable columns={columns} data={students} />
      </div>
    </div>
  );
};

export default StudentPage;
