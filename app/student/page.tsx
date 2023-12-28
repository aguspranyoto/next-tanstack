import { PrismaClient } from "@prisma/client";
import { DataTable } from "./data-table";
import { Student, columns } from "./columns";
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
        <DataTable columns={columns} data={students} />
      </div>
    </div>
  );
};

export default StudentPage;
