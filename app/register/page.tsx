"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterInput } from "./registerSchema";
import { registerAction } from "./register";
import { useState, useTransition } from "react";
import { FormInput } from "./FormInput";

console.log('⭐️⭐️⭐️Heavy Devloper⭐️⭐️⭐️')

export default function RegisterPage() {
  const [serverErrors, setServerErrors] = useState<any>({});
  const [successMsg, setSuccessMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (values: RegisterInput) => {
    setSuccessMsg("");
    setServerErrors({});

    startTransition(async () => {
      const result = await registerAction(new FormData(document.querySelector("form")!));

      if (result?.error) setServerErrors(result?.error);
      // if (result?.success) setSuccessMsg(result?.success);
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg space-y-4">
      <h1 className="text-2xl font-semibold">Register</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <FormInput
          label="Name"
          {...register("name")}
          error={errors.name?.message || serverErrors.name?.[0]}
        />

        <FormInput
          label="Email"
          {...register("email")}
          error={errors.email?.message || serverErrors.email?.[0]}
        />

        <FormInput
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message || serverErrors.password?.[0]}
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-full p-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
        >
          {isPending ? "Submitting..." : "Register"}
        </button>
      </form>

      {successMsg && (
        <p className="text-green-600 font-medium">{successMsg}</p>
      )}
    </div>
  );
}
