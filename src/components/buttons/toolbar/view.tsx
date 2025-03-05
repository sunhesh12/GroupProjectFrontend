import Button from "@/components/buttons/view";
import type { ReactNode } from "react";
import styles from "./style.module.css";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ToobarButtonProps {
    children?: ReactNode;
    icon: IconDefinition
}

export default function ToolbarButton({children, icon}: ToobarButtonProps) {
    return (
        <div id="toolbarButtonWrapper">
            <Button icon={icon} className={styles.toolbarButton}>{children}</Button>
        </div>
    )
}