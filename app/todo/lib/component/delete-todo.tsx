"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteTodo } from "../actions";
import { Button } from "@/app/ui/button";

type DeleteTodoProps = {
  id: string;
};

export function DeleteTodo({ id }: Readonly<DeleteTodoProps>) {
  const deleteTodoWithId = deleteTodo.bind(null, id);

  return (
    <form action={deleteTodoWithId}>
      <Button type="submit">
        <TrashIcon width={24} />
      </Button>
    </form>
  );
}
