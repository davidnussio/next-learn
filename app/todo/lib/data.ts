import { prisma } from "@/app/lib/prisma";
import { getAuthSession } from "./auth";

export async function getTodos(completed?: boolean) {
  const session = await getAuthSession();

  const data = await prisma.todo.findMany({
    where: {
      authorId: session.user.id,
      ...(completed ? { completed: false } : undefined),
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
