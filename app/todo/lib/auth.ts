import { auth } from "@/auth";

export const getAuthSession = async () => {
  const session = await auth();

  if (!session?.user.id) {
    throw new Error("User not authenticated");
  }

  return session;
};
