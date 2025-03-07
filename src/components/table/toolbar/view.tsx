"use client";
import {
  faAdd,
  faRemove,
  faCheck,
  faPenToSquare,
  faFloppyDisk,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import NobgButton from "@/components/buttons/nobg/view";
import type { TableRowType } from "../view";

interface TableToolbarProps {
  title: string;
  createAction: () => void;
  clearAction: () => void;
  deleteAction: (id: number) => void;
  editAction: () => void;
  saveAction: () => void;
}

export function TableToolbar({
  title,
  createAction,
  deleteAction,
  clearAction,
  editAction,
  saveAction,
}: TableToolbarProps) {
  return (
    <header id="tableToolbar" className={styles.header}>
      <div className={styles.toolbar}>
        <h3>Student details</h3>
        <div id="toolbar-buttons" className={styles.toolbarButtons}>
          <NobgButton icon={faFloppyDisk} onClick={() => saveAction()}>
            Save
          </NobgButton>
          <NobgButton icon={faXmark} onClick={() => clearAction()}>
            Clear
          </NobgButton>
          <NobgButton icon={faPenToSquare} onClick={() => editAction()}>
            Edit
          </NobgButton>
          <NobgButton icon={faAdd} onClick={() => createAction()}>
            Add
          </NobgButton>
          <NobgButton icon={faCheck} onClick={() => false}>
            Select all
          </NobgButton>
          <NobgButton icon={faTrash} onClick={() => false}>
            Remove
          </NobgButton>
        </div>
      </div>
    </header>
  );
}
