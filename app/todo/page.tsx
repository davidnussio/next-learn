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
  return <ListTodos completed={completed} />;
}
