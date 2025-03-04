/*
	Contains all the backend related configurations and functions
*/

import type {
  APIResponse,
  User,
  Module,
  Course,
  UserWithToken,
  ModuleWithCourses
} from "@/utils/types/backend";

export const url = process.env.BACKEND_URL;

const user = {
  auth: {
    signup: async (formData: FormData) => {
      const request = await fetch(`${url}/api/v1/users/auth/signup`, {
        method: "POST",
        body: formData,
      });

      if (request.status === 200) {
        // Server succeed in creating user
        try {
          const result = (await request.json()) as APIResponse<UserWithToken>;
          return result;
        } catch (e) {
          console.log("Error !", e);
        }
      } else if (request.status === 422) {
        // Request has missing fields
        const result = (await request.json()) as APIResponse<UserWithToken>;
        return result;
      } else if (request.status === 500) {
        // Error occured in the database
        const result = (await request.json()) as APIResponse<UserWithToken>;
        return result;
      } else {
        // Any unknown error
        const result = (await request.json()) as APIResponse<UserWithToken>;
        return result;
      }
    },

    signin: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const request = await fetch(`${url}/api/v1/users/auth/signin`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (request.status === 200) {
        const result = (await request.json()) as APIResponse<UserWithToken>;
        return result;
      } else if (request.status === 422) {
        const result = (await request.json()) as APIResponse<UserWithToken>;
        return result;
      } else if (request.status === 500) {
        const result = (await request.json()) as APIResponse<UserWithToken>;
        return result;
      } else {
        const result = (await request.json()) as APIResponse<UserWithToken>;
        return result;
      }
    },
    signout: async (formData: FormData) => {},
  },
  get: async (id: string) => {
    try {
      const request = await fetch(`${url}/api/v1/users/${id}`);
      if (request.status === 200) {
        const result = (await request.json()) as APIResponse<User>;
        return result;
      } else if (request.status === 422) {
        const result = (await request.json()) as APIResponse<User>;
        return result;
      } else if (request.status === 500) {
        const result = (await request.json()) as APIResponse<User>;
        return result;
      } else {
        const result = (await request.json()) as APIResponse<User>;
        return result;
      }
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
  },
  getAll: async () => {
    try {
      const request = await fetch(`${url}/api/v1/users/`);
      if (request.status === 200) {
        const result = (await request.json()) as APIResponse<User[]>;
        return result;
      } else if (request.status === 422) {
        const result = (await request.json()) as APIResponse<User[]>;
        return result;
      } else if (request.status === 500) {
        const result = (await request.json()) as APIResponse<User[]>;
        return result;
      } else {
        const result = (await request.json()) as APIResponse<User[]>;
        return result;
      }
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
  },
  getStudents: async () => {
    try {
      const request = await fetch(`${url}/api/v1/users/students`);
      if (request.status === 200) {
        const result = (await request.json()) as APIResponse<User[]>;
        return result;
      } else if (request.status === 422) {
        const result = (await request.json()) as APIResponse<User[]>;
        return result;
      } else if (request.status === 500) {
        const result = (await request.json()) as APIResponse<User[]>;
        return result;
      } else {
        const result = (await request.json()) as APIResponse<User[]>;
        return result;
      }
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
  }
};

const modules = {
  getAll: async () => {
    try {
      const request = await fetch(`${url}/api/v1/modules`);
      if (request.status === 200) {
        const result = (await request.json()) as APIResponse<ModuleWithCourses[]>;
        return result;
      } else if (request.status === 422) {
        const result = (await request.json()) as APIResponse<ModuleWithCourses[]>;
        return result;
      } else if (request.status === 500) {
        const result = (await request.json()) as APIResponse<ModuleWithCourses[]>;
        return result;
      } else {
        const result = (await request.json()) as APIResponse<ModuleWithCourses[]>;
        return result;
      }
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
  },
};

Object.freeze(modules);
Object.freeze(user);

export { user, modules };
