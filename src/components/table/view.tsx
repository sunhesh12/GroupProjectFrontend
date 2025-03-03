"use client";
import { CSSProperties, ReactNode } from "react";
import styles from "./style.module.css";

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
    <table className={styles.courseTable}>
      <thead>
      <tr className={styles.courseTableHeader} style={tabl eHeaderStyles}>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.courseTableBody}>{children}</tbody>
    </table>
  );
}
