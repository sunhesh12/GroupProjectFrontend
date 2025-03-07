"use client";
import { useState } from "react";
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

interface TableProps {
  title: string;
  rows: TableRowType[];
  columns: string[];
  saveAction: () => void;
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
  columns
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
            {columns.map((column, index) => (
              <th key={index}>{String(column)}</th>
            ))}
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
