"use client";
import FormPost from "@/components/FormPost";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";

type FormPost = {
  id: number;
  name: string;
  nim: number;
  email: string;
  age: number;
};

const EditPage = () => {
  const handleEditPost: SubmitHandler<FormPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2>Edit page</h2>
        <Link href="/student" className={buttonVariants()}>
          Back
        </Link>
      </div>
      <FormPost submit={handleEditPost} isEditing={true} />
    </div>
  );
};

export default EditPage;
