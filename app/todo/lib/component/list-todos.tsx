import { getTodos } from "../data";
import Todo from "./todo";

export async function ListTodos({
  completed,
}: Readonly<{ completed: boolean }>) {
  const todos = await getTodos(completed);

  // const filteredTodos = (todos: TodoSerialize[]) =>
  //   filter ? todos?.filter((todo) => !todo.completed || todo.saving) : todos;

  return (
    <>
      <div className="mb-4">
        {/* <button
          type="button"
          className="disabled:text-white-300 w-full rounded border-2 border-purple-500 bg-white/10 p-2 disabled:bg-white/40"
          onClick={applyFilter}>
          {filter ? "Show only incomplete todos" : "Show all todo"}
        </button> */}
      </div>
      <ul className="flex flex-col space-y-2">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
