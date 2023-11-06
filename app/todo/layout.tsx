import AddTodo from "./lib/component/add-todo";
import { FilterTodo } from "./lib/component/filter-todo";

export default function Layout({
  searchParams,
  children,
}: Readonly<{
  searchParams?: {
    completed?: string;
  };
  children: React.ReactNode;
}>) {
  const completed = searchParams?.completed === "true";
  return (
    <div className="mx-auto flex max-w-xl flex-col rounded p-4 shadow-2xl shadow-white/20">
      <h1 className="py-4 text-3xl">Todo List</h1>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <AddTodo />
        <FilterTodo completed={completed} />
      </div>
      {children}
    </div>
  );
}
