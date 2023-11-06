import AddTodo from "./lib/component/add-todo";
import { FilterTodo } from "./lib/component/filter-todo";
import { ListTodos } from "./lib/component/list-todos";

interface ListTodosProps {
  searchParams?: {
    completed?: string;
  };
}

export default function TodoPage({ searchParams }: Readonly<ListTodosProps>) {
  const completed = searchParams?.completed === "true";
  return (
    <div className="mx-auto flex max-w-xl flex-col rounded p-4 shadow-2xl shadow-white/20">
      <h1 className="py-4 text-3xl">Todo List</h1>
      <AddTodo />
      <FilterTodo completed={completed} />
      <ListTodos completed={completed} />
    </div>
  );
}
