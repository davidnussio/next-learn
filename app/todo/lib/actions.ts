"use server";

import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getAuthSession } from "./auth";

const TodoSchema = z.object({
  id: z.string(),
  authorId: z.string(),
  title: z.string().min(1),
  completed: z.boolean(),
  date: z.string(),
});

const CreateTodo = TodoSchema.pick({ title: true });
const CompletedTodo = TodoSchema.pick({ id: true, completed: true });
const DeleteTodo = TodoSchema.pick({ id: true });

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

export async function createTodo(prevState: any, formData: FormData) {
  const validatedFields = CreateTodo.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Todo.",
    };
  }

  const { title } = validatedFields.data;

  try {
    const session = await getAuthSession();
    await prisma.todo.create({
      data: {
        title,
        authorId: session.user.id,
        completed: false,
      },
    });
  } catch (e) {
    console.log(e);
    return {
      errors: [],
      message: "Database Error: Failed to Create Todo.",
    };
  }

  revalidatePath("/todo/list");
  redirect("/todo/list");
}

export async function changeCompleted(id: string, formData: FormData) {
  const completed = formData.get("completed") === "true";

  const validatedFields = CompletedTodo.safeParse({
    id,
    completed,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Todo.",
    };
  }

  const { data } = validatedFields;

  try {
    const session = await getAuthSession();

    await prisma.todo.update({
      where: {
        id: data.id,
        authorId: session.user.id,
      },
      data: {
        completed: data.completed,
      },
    });
  } catch (e) {
    return {
      errors: [],
      message: "Database Error: Failed to Update Todo.",
    };
  }

  revalidatePath("/todo/list");
  // redirect("/todo/list");
}

export async function deleteTodo(id: string) {
  const validatedFields = DeleteTodo.safeParse({
    id,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Todo.",
    };
  }

  const { data } = validatedFields;
  try {
    const session = await getAuthSession();

    await prisma.todo.delete({
      where: {
        id: data.id,
        authorId: session.user.id,
      },
    });
  } catch (e) {
    return {
      errors: [],
      message: "Database Error: Failed to Update Todo.",
    };
  }
  revalidatePath("/todo/list");
  // redirect("/todo/list");
}
