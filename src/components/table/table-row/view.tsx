"use client";
import styles from "./style.module.css";
import type { Fields } from "../view";
import type { Row } from "../view";

interface TableRowProps<T extends object> {
  row: T;
  id: number;
  selectAction: (id: number) => void;
}

export function TableRow<T extends object>({
  row,
  selectAction,
  id,
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
              selectAction(id);
            }
          }}
        />
      </td>
      {Object.keys(row).map((key, index) => (
        <td key={index}>{String(row[key as keyof typeof row])}</td>
      ))}
    </tr>
  );
}

interface EditableTableRowProps {
  id: number;
  fields: Fields;
  selectAction: (id: number) => void;
}

export function EditableTableRow({
  fields,
  selectAction,
  id,
}: EditableTableRowProps) {
  return (
    <tr className={styles.courseTableRow}>
      <td>
        <input
          type="checkbox"
          value="1"
          name="selected"
          onChange={(e) => {
            if (e.target.checked) {
              selectAction(id);
            }
          }}
        />
      </td>
      {fields.map((field, index) =>
        field.type !== "disabled" ? (
          <td key={index}>
            <input
              type={field.type}
              name={field.name}
              defaultValue={field.default}
            />
          </td>
        ) : (
          <td key={index}>{field.default}</td>
        )
      )}
    </tr>
  );
}
