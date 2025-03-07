"use client";
import { faAdd, faRemove, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import NobgButton from "@/components/buttons/nobg/view";

interface TableToolbarProps {
  title: string;
  createAction: () => void;
  updateAction: (id: number) => void;
  deleteAction: (id: number) => void;
}

export function TableToolbar({
  title,
  createAction,
  updateAction,
  deleteAction,
}: TableToolbarProps) {
  return (
    <header id="tableToolbar" className={styles.toolbar}>
      <h3>Student details</h3>
      <div id="toolbar-buttons" className={styles.toolbarButtons}>
        <NobgButton icon={faAdd} onClick={() => createAction()}>Add</NobgButton>
        <NobgButton icon={faCheck} onClick={() => false}>
          Select all
        </NobgButton>
        <NobgButton icon={faRemove} onClick={() => false}>
          Remove
        </NobgButton>
      </div>
    </header>
  );
}
