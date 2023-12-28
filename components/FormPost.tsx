"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC, useEffect } from "react";

type FormPost = {
  name: string;
  nim: number;
  email: string;
  age: number;
};

interface FormPostProps {
  submit: SubmitHandler<z.infer<typeof FormSchema>>;
  isEditing: boolean;
  initialValues: FormPost;
  isLoading: boolean;
}

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "name is required",
  }),
  nim: z.number().min(1, {
    message: "nim is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "email is required",
    })
    .email(),
  age: z.number().min(1, {
    message: "age is required",
  }),
});

const FormPost: FC<FormPostProps> = ({
  submit,
  isEditing,
  initialValues,
  isLoading,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    // Update form default values when initialValues changes
    form.reset(initialValues || {});
  }, [initialValues, form]);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="input name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nim"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIM</FormLabel>
                <FormControl>
                  <Input
                    placeholder="input nim"
                    type="number"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="input email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    placeholder="input age"
                    {...field}
                    type="number"
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {isLoading ? "Please wait..." : isEditing ? "Update" : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormPost;
