"use client";
import styles from "./style.module.css";
import { TableToolbar } from "./toolbar/view";
import { EditableTableRow, TableRow } from "./table-row/view";

export interface TableRowType {
  state: {
    id: number;
    selected: boolean;
    editable: boolean;
  };
  data: Record<
    string,
    {
      type: string;
      value: string | number;
    }
  >;
}

export interface TableColumnType {
    name: string;
    type: "number" | "email" | "text" | "tel" | "disabled" | "password";
    inputName?: string;
}

interface TableProps {
  title: string;
  rows: TableRowType[];
  columns: TableColumnType[];
  saveAction: () => Promise<any>;
  createAction: () => void;
  updateAction: (id: number, payload: TableRowType["data"]) => void;
  deleteAction: (id: number) => void;
  selectAction: (id: number) => void;
  clearAction: () => void;
  editAction: () => void;
}

// Null is set to make a field uneditable
export type Fields = {
  type: "number" | "email" | "text" | "tel" | "disabled" | "password";
  name: string;
  default?: string;
}[];

export interface RowState {
  id: number;
  selected: boolean;
  edited: boolean;
}

export function Table({
  title,
  rows,
  createAction,
  deleteAction,
  updateAction,
  selectAction,
  editAction,
  clearAction,
  saveAction,
  columns,
}: TableProps) {
  // Tracking all the rows inside the table
  return (
    <div id="tableWrapper" className={styles.wrapper}>
      <TableToolbar
        title={title}
        createAction={createAction}
        deleteAction={deleteAction}
        editAction={editAction}
        clearAction={clearAction}
        saveAction={saveAction}
      />
      <table className={styles.courseTable}>
        {/* HEADER */}
        <thead>
          <tr className={styles.courseTableHeader}>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            {columns.map(({name}, index) => {
              return <th key={index}>{name}</th>;
            })}
          </tr>
        </thead>
        {/* BODY */}
        <tbody className={styles.courseTableBody}>
          {/* Any extra added fields
          {rows.map(
            (entry, index) =>
              config?.columns && (
                <EditableTableRow
                  key={index}
                  fields={config?.columns}
                  id={entry}
                  selectAction={selectAction}
                />
              )
          )} */}
          {/* Fields externally provided */}
          {rows.map((row, index) =>
            row.state.editable === true ? (
              <EditableTableRow
                key={index}
                selectAction={selectAction}
                tableRow={row}
                tableColumn={columns}
                updateAction={updateAction}
              />
            ) : (
              <TableRow
                key={index}
                tableRow={row}
                selectAction={selectAction}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
