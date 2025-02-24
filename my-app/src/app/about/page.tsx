"use client"
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const isLoggedin = false;
  const handleClick = () => {
    if (isLoggedin) {
      router.push("/about/contact");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Contact</button>
    </div>
  );
};

export default About;
