"use client";
import FormPost from "@/components/FormPost";
import { buttonVariants } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

type FormPost = {
  name: string;
  nim: number;
  email: string;
  age: number;
};

const EditPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const router = useRouter();

  const { data: dataEdit, isLoading } = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const res = await axios.get(`/api/student/edit/${id}`);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: (newData: FormPost) => {
      return axios.put(`/api/student/edit/${id}`, newData);
    },
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Student updated successfully",
        className: "bg-green-500 text-white",
      });
      router.push("/student");
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<FormPost> = (data) => {
    mutation.mutate(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between">
        <h2>Edit page</h2>
        <Link href="/student" className={buttonVariants()}>
          Back
        </Link>
      </div>
      <FormPost
        submit={handleEditPost}
        isEditing={true}
        isLoading={mutation.isPending}
        initialValues={dataEdit}
      />
    </div>
  );
};

export default EditPage;
