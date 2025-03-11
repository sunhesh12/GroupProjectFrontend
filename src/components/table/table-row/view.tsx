"use client";
import styles from "./style.module.css";
import type { TableColumnType, TableRowType } from "../view";

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
  tableColumns: TableColumnType[];
  updateAction: (id: number, payload: TableRowType["data"]) => void;
}

export function EditableTableRow({
  selectAction,
  updateAction,
  tableRow,
  tableColumns,
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
      {tableColumns.map((column, index) => {
        return (
          <td key={index}>
            {column.type !== "disabled" ? (
              <input
                type={column.type}
                name={column.name}
                defaultValue={tableRow.data[""]}
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
