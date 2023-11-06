"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function FilterTodo({ completed }: Readonly<{ completed: boolean }>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.set("completed", String(checked));
    } else {
      params.delete("completed");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-4 flex items-center  ">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        type="checkbox"
        value="true"
        defaultChecked={completed}
        onChange={(e) => {
          handleSearch(e.target.checked);
        }}
      />{" "}
      <span className="pl-4">show not completed todos</span>
    </div>
  );
}
