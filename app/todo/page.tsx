import Link from "next/link";
import { ListTodos } from "./lib/component/list-todos";

interface ListTodosProps {
  searchParams?: {
    completed?: string;
  };
}

export default function TodoPage({ searchParams }: Readonly<ListTodosProps>) {
  return <Link href="/todo/list">Lista cose da fare</Link>;
}
