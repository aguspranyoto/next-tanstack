"use client";
import FormPost from "@/components/FormPost";
import { Button, buttonVariants } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

type FormPost = {
  name: string;
  nim: number;
  email: string;
  age: number;
};

const CreatePage = () => {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormPost> = (data) => {
    createPost(data);
  };

  const { mutate: createPost } = useMutation({
    mutationFn: (newPost: FormPost) => {
      return axios.post("/api/student", newPost);
    },
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: () => {
      console.log("success");
      router.push("/student");
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2>Create page</h2>
        <Link href="/student" className={buttonVariants()}>
          Back
        </Link>
      </div>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;
