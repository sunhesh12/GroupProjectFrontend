"use client";

import { useReducer } from "react";
import type { User } from "@/utils/types/backend";
import { Table } from "@/components/table/view";
import type { TableRowType } from "@/components/table/view";

// TODO: Connect backend

interface ManageProps {
  users: User[];
}

interface Action {
  type: "create" | "update" | "delete" | "select" | "edit" | "clear";
  id?: number;
  payload?: Partial<Record<string, { value: string | number }>>;
}

type Reducer = (state: TableRowType[], action: Action) => TableRowType[];

function prepare(users: User[]): TableRowType[] {
  return users.map(
    (
      {
        id,
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
      },
      index
    ) => ({
      state: {
        id: index,
        selected: false,
        editable: false,
      },
      data: {
        id: { type: "number", value: id },
        full_name: { type: "text", value: Full_name },
        age: { type: "number", value: Age },
        email: { type: "email", value: Email },
        address: { type: "text", value: Address },
        profile_picture: { type: "text", value: Profile_Picture },
        password: { type: "password", value: Password },
        role: { type: "text", value: Role },
        status: { type: "number", value: Status },
        course_id: { type: "text", value: Course_Id },
        created_at: { type: "disabled", value: created_at },
        updated_at: { type: "disabled", value: updated_at },
      },
    })
  );
}

function reducer(state: TableRowType[], action: Action): TableRowType[] {
  switch (action.type) {
    case "create":
      return [
        {
          state: {
            id: state.length ? state[state.length - 1].state.id + 1 : 0,
            selected: false,
            editable: true,
          },
          data: {
            id: { type: "number", value: "" },
            full_name: { type: "text", value: "" },
            age: { type: "number", value: "" },
            email: { type: "email", value: "" },
            address: { type: "text", value: "" },
            profile_picture: { type: "text", value: "" },
            password: { type: "password", value: "" },
            role: { type: "text", value: "" },
            status: { type: "number", value: "" },
            course_id: { type: "text", value: "" },
            created_at: { type: "disabled", value: "" },
            updated_at: { type: "disabled", value: "" },
          },
        },
        ...state,
      ];
    case "update":
      return state.map((row) =>
        row.state.id === action.id
          ? {
              ...row,
              data: {
                ...row.data,
                ...Object.keys(action.payload || {}).reduce(
                  (acc, key) => ({
                    ...acc,
                    [key]: {
                      ...row.data[key],
                      value:
                        action.payload?.[key]?.value ?? row.data[key].value,
                    },
                  }),
                  {}
                ),
              },
            }
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
        row.state.selected
          ? { ...row, state: { ...row.state, editable: true } }
          : row
      );
    case "clear":
      return state.map((row) => ({
        ...row,
        state: { ...row.state, editable: false, selected: false },
      }));
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
  return (
    <div id="usersManage">
      <Table
        rows={state}
        title="Hello table"
        columns={[
          "ID",
          "Full Name",
          "Age",
          "Email",
          "Address",
          "Profile Picture",
          "Password",
          "Role",
          "Status",
          "Course ID",
          "Created At",
          "Updated At",
        ]}
        createAction={() => dispatch({ type: "create" })}
        selectAction={(id: number) => dispatch({ type: "select", id })}
        deleteAction={(id: number) => dispatch({ type: "delete", id })}
        updateAction={(id: number, payload: TableRowType["data"]) =>
          dispatch({ type: "update", id, payload })
        }
        clearAction={() => dispatch({ type: "clear" })}
        editAction={() => dispatch({ type: "edit" })}
        saveAction={() => {console.log('SAVED !: ', state); dispatch({type: "clear"})}}
      />
    </div>
  );
}
