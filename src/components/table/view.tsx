"use client";
import { CSSProperties, ReactNode } from "react";
import styles from "./style.module.css";
import { TableToolbar } from "./toolbar/view";

interface TableProps {
  columns: string[];
  children: ReactNode;
}

interface TableRowProps {
  values: string[];
}

export function TableRow({ values }: TableRowProps) {
  const tableRowStyles: CSSProperties = {
    gridTemplateColumns: `repeat(${values.length}, minmax(200px, 1fr))`,
  };
  return (
    <tr className={styles.courseTableRow} style={tableRowStyles}>
      {values.map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
}

export function Table({ columns, children }: TableProps) {
  const tableHeaderStyles: CSSProperties = {
    gridTemplateColumns: `repeat(${columns.length}, minmax(200px, 1fr))`,
  };
  return (
    <div id="tableAndToolbar">
      <TableToolbar />
      <div id="tableWrapper" className={styles.wrapper}>
        <table className={styles.courseTable}>
          <thead>
            <tr className={styles.courseTableHeader} style={tableHeaderStyles}>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.courseTableBody}>{children}</tbody>
        </table>
      </div>
    </div>
  );
}
