/*
	Contains all the backend related configurations and functions
*/

export const url = process.env.BACKEND_URL;

export type APIResponse<PayloadType> = {
  version: string;
  payload?: PayloadType;
  message: string;
  success: boolean;
  status: number;
  errors?: string[];
};

export interface User {
  Full_name: string;
  Age: string;
  Email: string;
  Mobile_No: string;
  Address: string;
  Profile_Picture: string;
  Password: string;
  Role: string;
  Status: string;
  Course_Id: string;
  updated_at: string;
  created_at: string;
  id: string;
}

export interface Module {
  id: string,
  module_name: string;
  credit_value: string;
  practical_exam_count: string | null;
  writing_exam_count: string | null;
  course_id: string;
  created_at: string | null;
  updated_at: string | null;
}

export type UserWithToken = {
  user: User;
  token: string;
};

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
      password
    }: {
      email: string;
      password: string;
    }) => {
      const request = await fetch(`${url}/api/v1/users/auth/signin`, {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        } 
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
      if(request.status === 200) {
        const result = (await request.json()) as APIResponse<User>;
        return result;
      } else if(request.status === 422) {
        const result = (await request.json()) as APIResponse<User>;
        return result;
      } else if(request.status === 500) {
        const result = (await request.json()) as APIResponse<User>;
        return result;
      } else {
        const result = (await request.json()) as APIResponse<User>;
        return result;
      }
    } catch(error) {
      console.log("Error while fetching data: ", error);
    }
  }
};

const modules = {
  getAll: async () => {
    try {
      const request = await fetch(`${url}/api/v1/modules`);
      if(request.status === 200) {
        const result = (await request.json()) as APIResponse<Module[]>;
        return result;
      } else if(request.status === 422) {
        const result = (await request.json()) as APIResponse<Module[]>;
        return result;
      } else if(request.status === 500) {
        const result = (await request.json()) as APIResponse<Module[]>;
        return result;
      } else {
        const result = (await request.json()) as APIResponse<Module[]>;
        return result;
      }
    } catch(error) {
      console.log("Error while fetching data: ", error);
    }
  }
}

Object.freeze(modules);
Object.freeze(user);

export { user, modules };
