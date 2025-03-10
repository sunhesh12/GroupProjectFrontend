"use server";

import { user } from "@/utils/backend";
import { signUpSchema } from "@/utils/schema";

export default async function signup(formData: FormData) {
  // Convert formData.entries() to an array before using map
  const formDataArray = Array.from(formData.entries()).map(([key, value]) => {
    if (key === "age") return [key, Number(value)];
    return [key, value];
  });

  // Check for form validation error
  const parsedForm = await signUpSchema.safeParseAsync(Object.fromEntries(formDataArray));

  if (!parsedForm.success) {
    console.log(parsedForm.error);
  } else {
    const result = await user.auth.signup(formData);
    console.log(result);
  }
}
