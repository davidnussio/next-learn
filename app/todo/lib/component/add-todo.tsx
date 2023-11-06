"use client";

import { Button } from "@/app/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "../actions";
import { useRef } from "react";

export default function AddTodo() {
  const initialState = { message: null, errors: {} };
  const status = useFormStatus();
  const [state, dispatch] = useFormState(createTodo, initialState);
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        dispatch(formData);
        console.log(ref.current?.reset);
        ref.current?.reset();
      }}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Invoice title */}
        <div className="mb-4">
          <div className="flex items-baseline gap-4">
            <label htmlFor="title" className="sr-only">
              Todo title
            </label>
            <div className="relative rounded-md flex-grow">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter what you need to do..."
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <Button type="submit" disabled={status.pending}>
                Create Todo
              </Button>
            </div>
          </div>
          {state?.errors?.title ? (
            <div
              id="title-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500">
              {state.errors.title.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {state?.message ? (
          <div
            id="completed-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500">
            {state.message}
          </div>
        ) : null}
      </div>
    </form>
  );
}
