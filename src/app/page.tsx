import Image from "next/image";
import Signin from "./login/page";
import Welcome from "./(user)/welcome"; //add use welcome page 

export default function Home() {
  return (
    <>
      <Welcome /> 
    </>
  );
}
