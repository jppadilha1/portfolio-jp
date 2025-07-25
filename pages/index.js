import { Header } from "./../components/header/header.js";
import { Main } from "./../components/main/main.js";
import { Projects } from "../components/projects/projects.js";
import { ContactMe } from "../components/contact/contact.js";

export default function Root() {
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
