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
        "rounded p-4 md:p-6"
        // "mutation.isLoading "? "animate-pulse bg-white/20" : "bg-white/10"
      )}>
      <div className="flex space-x-4">
        <ChangeCompleted id={todo.id} completed={todo.completed} />
        <div
          className={cn("grow", {
            "line-through": todo.completed,
          })}>
          {todo.title}
          <div className="flex text-xs gap-1 text-gray-700">
            <TimeFormat date={todo.createdAt} />
            <DateFormat date={todo.createdAt} />
          </div>
        </div>
        <div
          className={cn("", {
            "line-through": todo.completed,
          })}></div>
        <DeleteTodo id={todo.id} />
      </div>
    </li>
  );
}
