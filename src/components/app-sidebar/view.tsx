import styles from "./style.module.css";
import Image from "next/image";
import SidebarLink from "./sidebar-link/view";
import InputField from "@/components/input/view";

export default function AppSidebar() {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.sidebarHeaderContainer}>
        <div>
          <Image
            src="/unilogo.webp"
            alt="Logo of University Of Sri Jayewardenepura"
            width="40"
            height="35"
          />
        </div>
        <div>
          <h2 className={styles.sidebarHeader}>Learning management system</h2>
          <h3 className={styles.sidebarSubHeader}>Faculty of computing</h3>
        </div>
      </header>
      <form className={styles.searchForm}>
        <InputField
          type="text"
          backgroundColor="#141414"
          borderColor="#343434"
          color="white"
          name="Search anything"
          placeholder="Search"
        />
      </form>
      <nav className={styles.nav}>
        <header>
          <h2 className={styles.navHeader}>Navigation</h2>
        </header>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <SidebarLink
              icon="/icons/home.svg"
              alt="An icon of a home"
              href="/app/dashboard"
            >
              Dashboard
            </SidebarLink>
          </li>
          <li className={styles.navItem}>
            <SidebarLink
              icon="/icons/calendar.svg"
              alt="An icon of a calendar"
              href="/app/calendar"
            >
              Calendar
            </SidebarLink>
          </li>
          <li className={styles.navItem}>
            <SidebarLink
              icon="/icons/book.svg"
              alt="An icon of a book"
              href="/app/courses"
            >
              Courses
            </SidebarLink>
          </li>
          <li className={styles.navItem}>
            <SidebarLink
              icon="/icons/exams.svg"
              alt="An icon of a exam"
              href="/app/examinations"
            >
              Examinations
            </SidebarLink>
          </li>
          <li className={styles.navItem}>
            <SidebarLink
              icon="/icons/message.svg"
              alt="An icon of with a letter"
              href="/app/messages"
            >
              Messages
            </SidebarLink>
          </li> 
          <div id="profile-data" className={styles.profileContainer}>
            <SidebarLink
              icon="/icons/gear-solid.svg"
              alt="An icon of a cog wheel"
              href="/app/settings"
            >
              Settings
            </SidebarLink>
            <div className={styles.profile}>
              <div id="profile-pic">
                <SidebarLink
                  icon="/profile-pic.jpg"
                  alt="An image of a person"
                  href="/app/profile"
                  dimensions={{ width: 30, height: 30 }}
                  rounded={true}
                >
                  <div className={styles.username}>W.D.Y.R.Kalhara</div>
                  <div className={styles.email}>kalharaweragala@gmail.com</div>
                </SidebarLink>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </aside>
  );
}
