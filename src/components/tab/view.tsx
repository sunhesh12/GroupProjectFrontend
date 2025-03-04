import { CSSProperties } from "react";
import styles from "./style.module.css";
import TabButton from "./tab-button/view";

interface TabProps {
  tabs: {
    href: string;
    label: string;
  }[];
  style?: CSSProperties;
}

export default function Tab({ tabs, style }: TabProps) {
  return (
    <div id="tabSelector" className={styles.tabSelector} style={style}>
      {tabs.map(({ label, href }, index) => (
        <TabButton key={index} label={label} href={href} />
      ))}
    </div>
  );
}
