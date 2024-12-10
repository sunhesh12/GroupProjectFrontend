import Image from "next/image";

// Styles
import styles from "@/app/page.module.css";

// Fonts
import HeroLarge from "@/components/hero/large/view";


export default function HomePage() {
  return (
    <>
      <div className={styles.heroContainer}>
        <HeroLarge />
      </div>
    </>
  );
}
