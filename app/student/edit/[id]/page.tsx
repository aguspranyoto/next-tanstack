import FormPost from "@/components/FormPost";
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
      <h2>Edit page</h2>
      <FormPost submit={handleEditPost} isEditing={true} />
    </div>
  );
};

export default EditPage;
