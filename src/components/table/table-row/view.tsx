"use client";
import styles from "./style.module.css";
import type { TableColumnType, TableRowType } from "../view";

interface TableRowProps<T> {
  tableColumns: TableColumnType<T>[];
  tableRow: TableRowType<T>;
  selectAction: (id: number) => void;
}

export function TableRow<T>({
  tableRow,
  tableColumns,
  selectAction,
}: TableRowProps<T>) {
  return (
    <tr className={styles.courseTableRow}>
      <td>
        <input
          type="checkbox"
          value="1"
          name="selected"
          onChange={(e) => {
            if (e.target.value === "1") {
              selectAction(tableRow.state.id);
            }
          }}
          checked={tableRow.state.selected}
        />
      </td>
      {tableColumns.map((column, index) => (
        <td key={index}>{String(tableRow.data[column.inputName])}</td>
      ))}
    </tr>
  );
}

interface EditableTableRowProps<T> {
  selectAction: (id: number) => void;
  tableRow: TableRowType<T>;
  tableColumns: TableColumnType<T>[];
  updateAction: (id: number, payload: T) => void;
}

export function EditableTableRow<T>({
  selectAction,
  updateAction,
  tableRow,
  tableColumns,
}: EditableTableRowProps<T>) {
  return (
    <tr className={styles.courseTableRow}>
      <td>
        <input
          type="checkbox"
          value="1"
          name="selected"
          onChange={(e) => {
            if (e.target.value === "1") {
              selectAction(tableRow.state.id);
            }
          }}
          checked={tableRow.state.selected}
        />
      </td>
      {tableColumns.map((column, index) => {
        return (
          <td key={index}>
            {column.type !== "disabled" ? (
              <input
                type={column.type}
                name={`${tableRow.state.id}-${column.name}`}
                defaultValue={tableRow.data[column.inputName] as string}
                onChange={(e) => {
                  updateAction(tableRow.state.id, {
                    ...tableRow.data,
                    [column.inputName]: e.target.value,
                  });
                }}
              />
            ) : (
              (tableRow.data[column.inputName] as string)
            )}
          </td>
        );
      })}
    </tr>
  );
}
