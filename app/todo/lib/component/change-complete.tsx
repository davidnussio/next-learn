"use client";

import { useRef } from "react";
import { changeCompleted } from "../actions";

type ChangeCompletedProps = {
  id: string;
  completed: boolean;
};

export function ChangeCompleted({ id, completed }: ChangeCompletedProps) {
  const ref = useRef<HTMLFormElement>(null);
  const changeCompletedWithId = changeCompleted.bind(null, id);

  return (
    <form ref={ref} action={changeCompletedWithId}>
      <p>
        <input
          id="completed"
          name="completed"
          // disabled={mutation.isLoading}
          className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          type="checkbox"
          value="true"
          defaultChecked={completed}
          onChange={() => ref.current?.requestSubmit()}
        />
      </p>
    </form>
  );
}
