export function studentDasboarddb() {
  return {
    userName: "Anura",
    notifications: [
      {
        heading: "Assignment Deadline",
        text: "Complete these urgent assignments before their deadline ends.",
        link: "/#",
      },
      {
        heading: "Event Reminder",
        text: "Don't miss the upcoming workshop this Friday.",
        link: "/#",
      },
    ],
    cartData: [
      {
        src: "/login.ico",
        headerText: "Create a study group",
        cartText:
          "Collaborate with your friends by making study groups to share resources",
        Link: "#",
      },
      {
        src: "/login.ico",
        headerText: "Explore courses",
        cartText:
          "View the list of courses that need to be studied in within the semester",
        Link: "#",
      },
      {
        src: "/login.ico",
        headerText: "Complete an assignment",
        cartText: "Organize your semester by setting new tasks in the calendar",
        Link: "#",
      },
      {
        src: "/login.ico",
        headerText: "Set the semester plan",
        cartText: "Organize your semester by setting new tasks in the calendar",
        Link: "#",
      },
    ],
    tasks: [
      {
        title: "Submit Assignment",
        time: "9:00 A.M.",
        imageSrc: "/task.gif",
        link: "#",
      },
      {
        title: "Attend Workshop",
        time: "11:00 A.M.",
        imageSrc: "/task.gif",
        link: "#",
      },
      {
        title: "Complete Project",
        time: "2:00 P.M.",
        imageSrc: "/task.gif",
        link: "#",
      },
      {
        title: "Prepare Presentation",
        time: "4:00 P.M.",
        imageSrc: "/task.gif",
        link: "#",
      },
      {
        title: "Weekly Review",
        time: "6:00 P.M.",
        imageSrc: "/task.gif",
        link: "#",
      },
    ],
    Academic_Perfonce: [
      { GPA: "3.5", improveGpaLink: "#", examResultLink: "#" },
    ],
  };
}

export interface Course {
  id: number;
  name: string;
  semester: string;
  imageUrl: string;
  completion: number;
  link: string;
}

export const courses: Course[] = [
  {
    id: 1,
    name: "CSE1011 - Introduction to software engineering",
    semester: "Semester 03",
    imageUrl: "/courseCart.jpeg",
    completion: 20,
    link: "#",
  },
  {
    id: 2,
    name: "CSE1022 - Data Structures and Algorithms",
    semester: "Semester 02",
    imageUrl: "/courseCart.jpeg",
    completion: 50,
    link: "#",
  },
  {
    id: 3,
    name: "CSE1033 - Database Management Systems",
    semester: "Semester 01",
    imageUrl: "/courseCart.jpeg",
    completion: 75,
    link: "#",
  },
  {
    id: 4,
    name: "CSE1044 - Operating Systems",
    semester: "Semester 04",
    imageUrl: "/courseCart.jpeg",
    completion: 10,
    link: "#",
  },
  {
    id: 5,
    name: "CSE1055 - Software Project Management",
    semester: "Semester 05",
    imageUrl: "/courseCart.jpeg",
    completion: 40,
    link: "#",
  },
];
