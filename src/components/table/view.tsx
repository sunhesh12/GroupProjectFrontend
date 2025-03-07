"use client";
import { useState } from "react";
import styles from "./style.module.css";
import { TableToolbar } from "./toolbar/view";
import { TableRow, EditableTableRow } from "./table-row/view";

export type Row<T> = {
  state: { id: number; selected: boolean; editable: boolean };
  data: T;
};

interface TableProps<T extends object> {
  title: string;
  rows: Row<T>[];
  config: TableConfig;
  createAction: () => void;
  updateAction: (id: number) => void;
  deleteAction: (id: number) => void;
  selectAction: (id: number) => void;
  editAction: (id: number) => void;
}

// Null is set to make a field uneditable
export type Fields = {
  type: "number" | "email" | "text" | "tel" | "disabled" | "password";
  name: string;
  default?: string;
}[];

interface TableConfig {
  columns: Fields;
}

export interface RowState {
  id: number;
  selected: boolean;
  edited: boolean;
}

export function Table<T extends object>({
  title,
  rows,
  createAction,
  deleteAction,
  updateAction,
  selectAction,
  config,
}: TableProps<T>) {
  // Tracking all the rows inside the table
  return (
    <div id="tableWrapper" className={styles.wrapper}>
      <TableToolbar
        title={title}
        createAction={createAction}
        updateAction={updateAction}
        deleteAction={deleteAction}
      />
      <table className={styles.courseTable}>
        {/* HEADER */}
        <thead>
          <tr className={styles.courseTableHeader}>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            {Object.keys(rows[0].data).map((key, index) => (
              <th key={index}>{String(key)}</th>
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
                fields={config.columns}
                id={row.state.id}
                selectAction={selectAction}
              />
            ) : (
              <TableRow
                key={index}
                row={row.data}
                id={row.state.id}
                selectAction={selectAction}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
