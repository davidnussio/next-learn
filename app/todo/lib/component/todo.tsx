import { cn } from "@/app/ui/utils";
import { Todo as TodoType } from "@prisma/client";
import { TimeFormat } from "./time-format";
import { ChangeCompleted } from "./change-complete";
import { DateFormat } from "./data-format";
import { DeleteTodo } from "./delete-todo";

export default function Todo(todo: Readonly<TodoType>) {
  return (
    <li
      className={cn(
        "rounded py-4"
        // "mutation.isLoading "? "animate-pulse bg-white/20" : "bg-white/10"
      )}>
      <div className="flex space-x-4 px-2">
        <ChangeCompleted id={todo.id} completed={todo.completed} />
        <div
          className={cn("grow", {
            "line-through": todo.completed,
          })}>
          {todo.title}
        </div>
        <div
          className={cn("", {
            "line-through": todo.completed,
          })}>
          <div className="flex flex-col items-center text-xs">
            <TimeFormat date={todo.createdAt} />
            <DateFormat date={todo.createdAt} />
          </div>
        </div>
        <DeleteTodo id={todo.id} />
      </div>
    </li>
  );
}
