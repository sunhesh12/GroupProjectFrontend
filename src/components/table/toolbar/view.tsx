"use client";
import { faAdd, faRemove, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import ToolbarButton from "@/components/buttons/toolbar/view";

export function TableToolbar() {
  return (
    <header id="table-toolbar" className={styles.toolbar}>
      <ToolbarButton icon={faAdd}>Add</ToolbarButton>
      <ToolbarButton icon={faCheck}>Select all</ToolbarButton>
      <ToolbarButton icon={faRemove}>Remove</ToolbarButton>
    </header>
  );
}
