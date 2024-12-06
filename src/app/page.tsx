import Image from "next/image";

// Styles
import styles from "@/styles/home-page.module.css";

export default function HomePage() {
  return (
    <>
      <article id="hero">
        <section id="image">

        </section>
        <Image
          src="/welcome.webp"
          alt="An image with online education items and pencils on float"
          height={500}
          width={500}
        />
        <section id="text">
          <h1><span>Organize.</span><span>Learn.</span><span>Create.</span></h1>
          <p>Welcome to the learning management system of the University of Sri Jayawardenepura.</p>
        </section>
      </article>
    </>
  );
}
