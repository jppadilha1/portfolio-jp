import { Header } from "./../components/header/header.js";
import { Main } from "./../components/main/main.js";
import { Projects } from "../components/projects/projects.js";
import { ContactMe } from "../components/contact/contact.js";
import Clarity from "../node_modules/@microsoft/clarity";
import { useEffect } from "react";

export default function Root() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;
    Clarity.init(projectId);
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }
      `}</style>

      <Header />
      <Main />
      <Projects />
      <ContactMe />
    </>
  );
}
