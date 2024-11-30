// navItems.ts
import Image from "next/image";

const size = 30;

export const navItems = [
  {
    icon: (
      <Image
        src="/Dashboard.ico"
        alt="Dashboard Icon"
        width={size}
        height={size}
      />
    ),
    label: "Dashboard",
    link: "/../student/dashboard",
  },
  {
    icon: (
      <Image
        src="/Calander.ico"
        alt="Calendar Icon"
        width={size}
        height={size}
      />
    ),
    label: "Calendar",
    link: "#",
  },
  {
    icon: (
      <Image
        src="/Course.ico"
        alt="Course Icon"
        width={size}
        height={size}
      />
    ),
    label: "Course",
    link: "/../student/course",
  },
  {
    icon: (
      <Image
        src="/Examination.ico"
        alt="Examination Icon"
        width={size}
        height={size}
      />
    ),
    label: "Examination",
    link: "",
  },
  {
    icon: (
      <Image
        src="/Message.ico"
        alt="Message Icon"
        width={size}
        height={size}
      />
    ),
    label: "Message",
    link: "/../student/messages",
  },
];
