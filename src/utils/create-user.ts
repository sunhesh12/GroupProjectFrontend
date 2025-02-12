import routes from "@/utils/backend/routes";
export default async function createUser(formData: FormData) {
  const request = await fetch(routes.users.create, {
    method: "POST",
    body: formData,
  });

  if (request.status === 200) {
    // Server succeed in creating user
    try {
      const result = await request.json();
      return result;
    } catch (e) {
      console.log("Error !", e);
    }
  } else if (request.status === 422) {
    // Request has missing fields
    const result = await request.json();
    return result;
  } else if (request.status === 500) {
    // Error occured in the database
    const result = await request.json();
    return result;
  } else {
    // Any unknown error
    return {
      error: "Something went wrong",
    };
  }
}
