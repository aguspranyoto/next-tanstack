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
      <h2>Student page</h2>
      <div>
        <DataTable
          columns={columns}
          data={students}
          link="/student/create"
          button="Create"
        />
      </div>
    </div>
  );
};

export default StudentPage;
