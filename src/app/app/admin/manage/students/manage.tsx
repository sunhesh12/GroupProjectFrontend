"use client";
import { useReducer } from "react";
import type { User } from "@/utils/types/backend";
import { Table } from "@/components/table/view";

interface ManageProps {
  users: User[];
}

interface TableRow {
  state: {
    id: number;
    selected: boolean;
    editable: boolean;
  };
  data: {
    Id: string;
    "Full Name": string;
    Age: string;
    Email: string;
    Address: string;
    "Profile Picture": string;
    Password: string;
    Role: string;
    Status: string;
    "Course Id": string;
    "updated at": string;
    "created at": string;
  };
}

interface Action {
  type: "create" | "update" | "delete" | "select" | "edit";
  id?: number;
  payload?: TableRow["data"];
}

type Reducer = (state: TableRow[], action: Action) => TableRow[];

function prepare(users: User[]): TableRow[] {
  return users.map(
    (
      {
        Full_name,
        Age,
        Email,
        Address,
        Profile_Picture,
        Password,
        Role,
        Status,
        Course_Id,
        updated_at,
        created_at,
        id,
      },
      index
    ) => ({
      state: {
        id: index,
        selected: false,
        editable: false,
      },
      data: {
        Id: id,
        "Full Name": Full_name,
        Age: Age,
        Email: Email,
        Address: Address,
        "Profile Picture": Profile_Picture,
        Password: Password,
        Role: Role,
        Status: Status,
        "Course Id": Course_Id,
        "updated at": updated_at,
        "created at": created_at,
      },
    })
  );
}

function reducer(state: TableRow[], action: Action): TableRow[] {
  switch (action.type) {
    case "create":
      return [
        {
          state: {
            id: state.length ? state[state.length - 1].state.id + 1 : 0,
            selected: false,
            editable: true,
          }, // Temporary ID
          data: {
            Id: "",
            "Full Name": "",
            Age: "",
            Email: "",
            Address: "",
            "Profile Picture": "",
            Password: "",
            Role: "",
            Status: "",
            "Course Id": "",
            "updated at": "",
            "created at": "",
          },
        },
        ...state,
      ];
    case "update":
      return state.map((row) =>
        row.state.id === action.id
          ? { ...row, data: { ...row.data, ...action.payload } }
          : row
      );
    case "delete":
      return state.filter((row) => row.state.id !== action.id);
    case "select":
      return state.map((row) =>
        row.state.id === action.id
          ? { ...row, state: { ...row.state, selected: !row.state.selected } }
          : row
      );
    case "edit":
      return state.map((row) =>
        row.state.id === action.id
          ? { ...row, state: { ...row.state, editable: true } }
          : row
      );
    default:
      throw new Error("Invalid action type");
  }
}

export default function Manage({ users }: ManageProps) {
  const [state, dispatch] = useReducer<Reducer, User[]>(
    reducer,
    users,
    prepare
  );
  console.log(state);
  return (
    <div id="usersManage">
      <Table
        rows={state}
        title="Hello table"
        createAction={() => dispatch({ type: "create" })}
        selectAction={(id: number) => dispatch({ type: "select", id })}
        deleteAction={(id: number) => dispatch({ type: "delete", id })}
        updateAction={(id: number) => dispatch({ type: "update", id })}
        editAction={(id: number) => dispatch({ type: "edit", id })}
        config={{
          columns: [
            { type: "number", name: "id" },
            { type: "text", name: "full_name" },
            { type: "number", name: "age" },
            { type: "email", name: "email" },
            { type: "text", name: "address" },
            { type: "text", name: "profile_picture" },
            { type: "password", name: "password" },
            { type: "text", name: "role" },
            { type: "number", name: "status" },
            { type: "text", name: "course_id" },
            { type: "disabled", name: "created_at" },
            { type: "disabled", name: "updated_at" },
          ],
        }}
      />
    </div>
  );
}
