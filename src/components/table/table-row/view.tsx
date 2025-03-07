"use client";
import styles from "./style.module.css";
import type { TableRowType } from "../view";

interface TableRowProps {
  tableRow: TableRowType;
  selectAction: (id: number) => void;
}

export function TableRow({ tableRow, selectAction }: TableRowProps) {
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
      {Object.keys(tableRow.data).map((key, index) => (
        <td key={index}>
          {String(tableRow.data[key as keyof typeof tableRow.data].value)}
        </td>
      ))}
    </tr>
  );
}

interface EditableTableRowProps {
  selectAction: (id: number) => void;
  tableRow: TableRowType;
  updateAction: (id: number, payload: TableRowType["data"]) => void;
}

export function EditableTableRow({
  selectAction,
  updateAction,
  tableRow,
}: EditableTableRowProps) {
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
      {Object.keys(tableRow.data).map((field, index) => {
        const fieldProps = tableRow.data[field as keyof typeof tableRow];
        return (
          <td key={index}>
            {fieldProps.type !== "disabled" ? (
              <input
                type={fieldProps.type}
                name={field}
                defaultValue={fieldProps.value}
                onChange={(e) => {
                  tableRow.data[field].value = e.target.value;
                  updateAction(tableRow.state.id, {...tableRow.data});
                }}
              />
            ) : (
              fieldProps.value
            )}
          </td>
        );
      })}
    </tr>
  );
}
