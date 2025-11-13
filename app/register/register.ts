"use server";

import { registerSchema } from "./registerSchema";

// simulate db insert (replace with prisma/drizzle/query)
async function saveUserToDB(data: any) {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

export async function registerAction(formData: FormData) {
  console.log("this should be server",formData)
  const raw = Object.fromEntries(formData.entries());

  const parsed = registerSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      error: parsed.error.flatten().fieldErrors,
      success: false,
    };
  }

  // Save to DB (secured here, not client)
  await saveUserToDB(parsed.data);

  return {
    success: true,
    message: "User registered successfully!",
  };
}