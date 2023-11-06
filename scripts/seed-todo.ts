import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  try {
    await prisma.todo.createMany({
      data: [
        {
          authorId: "410544b2-4001-4271-9855-fec4b6a6442a",
          title: "Learn Next.js",
          completed: false,
        },
        {
          authorId: "410544b2-4001-4271-9855-fec4b6a6442a",
          title: "Learn React",
          completed: false,
        },
        {
          authorId: "410544b2-4001-4271-9855-fec4b6a6442a",
          title: "Learn GraphQL",
          completed: false,
        },
        {
          authorId: "410544b2-4001-4271-9855-fec4b6a6442a",
          title: "Learn Prisma",
          completed: false,
        },
        {
          authorId: "410544b2-4001-4271-9855-fec4b6a6442a",
          title: "Learn TypeScript",
          completed: false,
        },
        {
          authorId: "410544b2-4001-4271-6666-fec4b6a6442a",
          title: "Nothing to do",
          completed: false,
        },
      ],
    });
    console.log("Seeding successful!");

    const data = await prisma.todo.findMany();
    console.log(data);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
