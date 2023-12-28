import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getDetailStudent(id: number) {
  const student = await prisma.student.findUnique({
    where: {
      id: Number(id),
    },
  });
  return student;
}

const DetailStudentPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  const student = await getDetailStudent(id);
  return (
    <div>
      <h2>Detail student page</h2>
      <div>
        <ul>
          <li>name: {student?.name}</li>
          <li>nim: {student?.nim}</li>
          <li>email: {student?.email}</li>
          <li>age: {student?.age}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailStudentPage;
