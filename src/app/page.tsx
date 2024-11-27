import Image from "next/image";
import Signin from "./signin/signin";
import Welcome from "./(user)/welcome"; //add use welcome page 

export default function Home() {
  return (
    <>
      <Welcome /> 
    </>
  );
}
