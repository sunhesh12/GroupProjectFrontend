// Define the Course type
export interface Course {
    id: number;
    name: string;
    semester: string;
    imageUrl: string;
    completion: number;
    link: string;
  }
  
  // Define the courses data with more courses
  export const courses1: Course[] = [
    {
      id: 1,
      name: "CSE1011 - Introduction to Software Engineering",
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
    {
      id: 6,
      name: "CSE1066 - Artificial Intelligence",
      semester: "Semester 06",
      imageUrl: "/courseCart.jpeg",
      completion: 60,
      link: "#",
    },
    {
      id: 7,
      name: "CSE1077 - Computer Networks",
      semester: "Semester 07",
      imageUrl: "/courseCart.jpeg",
      completion: 30,
      link: "#",
    },
    {
      id: 8,
      name: "CSE1088 - Machine Learning",
      semester: "Semester 08",
      imageUrl: "/courseCart.jpeg",
      completion: 90,
      link: "#",
    },
    {
      id: 9,
      name: "CSE1099 - Cloud Computing",
      semester: "Semester 09",
      imageUrl: "/courseCart.jpeg",
      completion: 50,
      link: "#",
    },
    {
      id: 10,
      name: "CSE1101 - Web Development",
      semester: "Semester 04",
      imageUrl: "/courseCart.jpeg",
      completion: 80,
      link: "#",
    },
  ];
  