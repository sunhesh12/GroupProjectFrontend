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
  Full_Name: string;
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
};

Object.freeze(user);

export { user };
